import { useEffect, useState, useRef } from 'react';
import MovieGallery from 'components/MovieGallery';
import { PageTitle } from 'styles/shared';
import TmdbService from 'services/tmdb/tmdbSrv';
import { OptionButtons } from 'components/etc/OptionButtons/OptionButtons';
import { LoadMoreBtn } from 'components/etc/LoadMoreBtn/LoadMoreBtn';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';

const srv = new TmdbService();

const PAGE_TITLE = `Trends`;
const DEF_PARAM_VALUE = 'week';

const Home = () => {
  const [error, setError] = useState(null);
  const [trends, setTrends] = useState([]);
  const [active, setActive] = useState(DEF_PARAM_VALUE);
  const totalPages = useRef(1);
  let page = useRef(1);

  useEffect(() => {
    srv
      .getTrendingMovies(active)
      .then(data => {
        setTrends(data.results);
        totalPages.current = data.total_pages;
      })
      .catch(setError);
  }, [active]);

  const handleLoadMoreClick = clickCount => {
    page.current = clickCount;
    srv
      .getTrendingMovies(active, { page: page.current })
      .then(({ results }) => {
        setTrends(cur => [...cur, ...results]);
      })
      .catch(setError);
  };

  return (
    <>
      {error && <ErrorMessage error={error} />}
      {!error && trends?.length > 0 && (
        <>
          <PageTitle style={{ marginBottom: 30, marginTop: 10 }}>
            {PAGE_TITLE}
          </PageTitle>

          <OptionButtons
            items={'week day'}
            onClick={setActive}
            style={{ marginBottom: 30 }}
            value={active}
          />

          <MovieGallery data={trends} />

          {totalPages.current > 0 && page.current < totalPages.current && (
            <LoadMoreBtn
              onClick={handleLoadMoreClick}
              style={{ marginTop: 30 }}
            />
          )}
        </>
      )}
    </>
  );
};

export default Home;
