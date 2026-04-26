import { showInfo } from '@common';
import { ErrorMessage } from '@components/ErrorMessage/ErrorMessage';
import { LoadMoreBtn } from '@components/etc/LoadMoreBtn/LoadMoreBtn';
import { MovieGallery } from '@components/MovieGallery/MovieGallery';
import { Searchbar } from '@components/Searchbar/Searchbar';
import { TmdbService } from '@services';
import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const NO_SEARCH_RESULTS = 'No search results matching your query';
const searchbarStyle = {
  height: 45,
  marginBottom: 40,
  marginTop: 10,
};

const srv = new TmdbService();

const Movies = ({ loader }) => {
  const [error, setError] = useState(null);
  const [wasLoaded, setWasLoaded] = useState(false);
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const totalPages = useRef(1);
  let page = useRef(1);

  useEffect(() => {
    setQuery({ text: searchParams.get('query'), time: Date.now() });
  }, [searchParams]);

  useEffect(() => {
    const text = query?.text ?? '';

    if (!text) {
      setWasLoaded(false);
      return setResults([]);
    }

    srv
      .searchMovies(text)
      .then(({ results, total_pages, total_results }) => {
        if (!total_results) {
          return showInfo(NO_SEARCH_RESULTS);
        }
        setResults(results);
        totalPages.current = total_pages;
      })
      .catch(setError);
  }, [query]);

  const handleLoadMoreClick = clickCount => {
    page.current = clickCount;
    const { text } = query;

    srv
      .searchMovies(text, { page: page.current })
      .then(({ results }) => {
        setResults(cur => [...cur, ...results]);
      })
      .catch(setError);
  };

  const handleQueryChange = query => {
    if (!query) setSearchParams({ query });
  };

  const handleSearchbarSubmit = text => {
    setSearchParams({ query: text });
  };

  const showLoadMoreBtn =
    wasLoaded && totalPages.current > 0 && page.current < totalPages.current;

  return error ? (
    <ErrorMessage error={error} />
  ) : (
    <>
      <Searchbar
        style={searchbarStyle}
        onSubmit={handleSearchbarSubmit}
        onChange={handleQueryChange}
      />

      {results?.length > 0 && (
        <MovieGallery
          data={results}
          loader={loader}
          onLoad={() => setWasLoaded(true)}
        />
      )}

      {showLoadMoreBtn && (
        <LoadMoreBtn onClick={handleLoadMoreClick} style={{ marginTop: 40 }} />
      )}
    </>
  );
};

export default Movies;
