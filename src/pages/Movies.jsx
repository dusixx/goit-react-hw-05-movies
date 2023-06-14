import Searchbar from 'components/Searchbar/Searchbar';
import { useEffect, useState, useRef } from 'react';
import MovieGallery from 'components/MovieGallery/MovieGallery';
import { useSearchParams } from 'react-router-dom';
import TmdbService from 'services/tmdb/tmdbSrv';
import { LoadMoreBtn } from 'components/etc/LoadMoreBtn/LoadMoreBtn';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import { showInfo } from 'utils';
import { useWillUnmount } from 'hooks/useWillUnmount';

const srv = new TmdbService();
const NO_SEARCH_RESULTS = 'No search results matching your query';
const searchbarStyle = {
  height: 45,
  marginBottom: 40,
  marginTop: 10,
};

//
// Movies
//

const Movies = ({ loader }) => {
  const [error, setError] = useState(null);
  const [wasLoaded, setWasLoaded] = useState(false);
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const totalPages = useRef(1);
  let page = useRef(1);

  // cleanup
  useWillUnmount(srv.abort);

  useEffect(() => {
    setQuery({ text: searchParams.get('query'), time: Date.now() });
  }, [searchParams]);

  // Добавляем в query текущее время, чтобы запрос был уникален и
  // многократно срабатывал поиск по одному и тому же тексту
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
          // !! лучше отобразить сообщение на странице
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

  // для простоты - очищаем строку запроса
  const handleQueryChange = query => {
    if (!query) setSearchParams({ query });
  };

  const handleSearchbarSubmit = text => {
    setSearchParams({ query: text });
    //setQuery({ text, time: Date.now() });
  };

  const showLoadMoreBtn =
    // wasLoaded, чтобы не висела пока формируется галерея найденых
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
