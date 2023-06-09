import Searchbar from 'components/Searchbar/Searchbar';
import { useEffect, useState, useRef } from 'react';
import { MovieGallery } from 'components/MovieGallery/MovieGallery';
import { useSearchParams, useLocation } from 'react-router-dom';
import TmdbService from 'services/tmdb/tmdbSrv';
import { showError } from 'utils';
import { LoadMoreBtn } from 'components/LoadMoreBtn/LoadMoreBtn';

const srv = new TmdbService();
const searchbarStyle = {
  height: 40,
  marginBottom: 40,
  marginTop: 20,
};

// TODO: сохранять результаты поиска в ЛС и восстанавливать их если пришли с дочерней страницы
// Например - смотрели детали фильма. Иначе очищать ЛС. Не скролить в топ!

export const Movies = () => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const totalPages = useRef(1);
  let page = useRef(1);

  useEffect(() => {
    const text = searchParams.get('query') ?? '';
    setQuery({ text, time: Date.now() });
  }, [searchParams]);

  // Добавляем в query текущее время, чтобы запрос всегда был уникален
  // Тогда при повторном нажатии на кнопку поиска - будет запрос

  useEffect(() => {
    if (!query) return;
    const { text } = query;

    srv
      .searchMovies(text)
      .then(data => {
        setResults(data.results);
        totalPages.current = data.total_pages;
      })
      .catch(showError);
  }, [query]);

  const handleLoadMoreClick = clickCount => {
    page.current = clickCount;
    const { text } = query;

    srv
      .searchMovies(text, { page: page.current })
      .then(({ results }) => {
        setResults(cur => [...cur, ...results]);
      })
      .catch(showError);
  };

  // для простоты - очищаем строку запроса. В свою очередь произойдет
  // установка query, поиск по пустому запросу вернет пустой массив и
  // очистится галерея найденных ранее
  const handleQueryChange = query => {
    if (!query) setSearchParams({ query });
  };

  const handleSearchbarSubmit = text => {
    setResults([]);
    setQuery({ text, time: Date.now() });
  };

  return (
    <>
      <Searchbar
        style={searchbarStyle}
        onSubmit={handleSearchbarSubmit}
        onChange={handleQueryChange}
      />

      {results && results.length > 0 && <MovieGallery data={results} />}

      {totalPages.current > 0 && page.current < totalPages.current && (
        <LoadMoreBtn onClick={handleLoadMoreClick} style={{ marginTop: 30 }} />
      )}
    </>
  );
};
