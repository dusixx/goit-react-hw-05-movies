import { showInfo } from '@common';
import { ErrorMessage } from '@components/ErrorMessage/ErrorMessage';
import { LoadMoreBtn } from '@components/etc/LoadMoreBtn/LoadMoreBtn';
import { MovieGallery } from '@components/MovieGallery/MovieGallery';
import { Searchbar } from '@components/Searchbar/Searchbar';
import { TmdbService } from '@services';
import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const NO_SEARCH_RESULTS = 'No search results matching your query';

const srv = new TmdbService();

const Movies = ({ loader }) => {
  const [error, setError] = useState(null);
  const [wasLoaded, setWasLoaded] = useState(false);
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const totalPages = useRef(1);
  let page = useRef(1);

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    setQuery(query);

    if (query) {
      searchMovies(query);
    } else {
      setResults([]);
      setWasLoaded(false);
    }
  }, [searchParams]);

  const handleLoadMoreClick = clickCount => {
    page.current = clickCount;
    srv
      .searchMovies(query, { page: page.current })
      .then(({ results }) => {
        setResults(cur => [...cur, ...results]);
      })
      .catch(setError);
  };

  const handleQueryChange = query => {
    setQuery(query);
  };

  const searchMovies = query => {
    srv
      .searchMovies(query)
      .then(({ results, total_pages, total_results }) => {
        totalPages.current = total_pages;

        if (!total_results) {
          showInfo(NO_SEARCH_RESULTS);
        }
        setResults(results);
      })
      .catch(setError);
  };

  const handleQuerySubmit = () => {
    setSearchParams({ query });
  };

  const shouldShowLoadMore =
    wasLoaded && totalPages.current > 0 && page.current < totalPages.current;

  return error ? (
    <ErrorMessage error={error} />
  ) : (
    <>
      <Searchbar
        style={{
          height: 45,
          marginBottom: 40,
          marginTop: 10,
        }}
        onSubmit={handleQuerySubmit}
        onChange={handleQueryChange}
        value={query}
      />

      {results?.length > 0 && (
        <MovieGallery
          data={results}
          loader={loader}
          onLoad={() => setWasLoaded(true)}
        />
      )}

      {shouldShowLoadMore && (
        <LoadMoreBtn onClick={handleLoadMoreClick} style={{ marginTop: 40 }} />
      )}
    </>
  );
};

export default Movies;
