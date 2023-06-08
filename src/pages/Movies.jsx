import Searchbar from 'components/Searchbar/Searchbar';
import { useEffect, useState, useRef } from 'react';
import { MovieGallery } from 'components/MovieGallery/MovieGallery';
import { useSearchParams, useLocation } from 'react-router-dom';
import TmdbService from 'services/tmdb/tmdbSrv';
import { showError } from 'utils';
import { Spinner } from 'components/Loader';
import { LoadMoreBtn } from 'components/LoadMoreBtn/LoadMoreBtn';

const srv = new TmdbService();

// TODO: сохранять результаты поиска в ЛС и восстанавливать их если пришли с дочерней страницы
// Например - смотрели детали фильма. Иначе очищать ЛС

export const Movies = () => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const page = useRef(1);
  const totalPages = useRef(1);

  // console.log('query', query);
  // console.log('results', results);
  // console.log('page', page);

  // useEffect(() => {
  //   console.log(location);
  // }, [location]);

  useEffect(() => {
    setQuery(searchParams.get('query') ?? '');
  }, [searchParams]);

  useEffect(() => {
    srv
      .searchMovies(query)
      .then(data => {
        setResults(data.results);
        totalPages.current = data.total_pages;
      })
      .catch(showError);
  }, [query]);

  const handleLoadMoreClick = () => {
    page.current += 1;
    srv
      .searchMovies(query, { page: page.current })
      .then(({ results }) => {
        setResults(cur => [...cur, ...results]);
      })
      .catch(showError);
  };

  return (
    <>
      <Searchbar
        style={{ height: 40, marginBottom: 40, marginTop: 20 }}
        onSubmit={setQuery}
        onChange={() => setQuery('')}
      />

      {results && results.length > 0 && <MovieGallery data={results} />}

      {totalPages.current > 0 && page.current < totalPages.current && (
        <LoadMoreBtn
          onClick={handleLoadMoreClick}
          style={{ marginTop: 30 }}
          loader={Spinner}
        />
      )}
    </>
  );
};
