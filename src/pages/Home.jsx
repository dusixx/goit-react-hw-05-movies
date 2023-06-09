import { useEffect, useState, useRef } from 'react';
import { MovieGallery } from 'components/MovieGallery/MovieGallery';
import { PageTitle } from 'styles/shared';
import { showError } from 'utils';
import TmdbService from 'services/tmdb/tmdbSrv';
import { OptionButtons } from 'components/OptionButtons/OptionButtons';
import { LoadMoreBtn } from 'components/LoadMoreBtn/LoadMoreBtn';

const srv = new TmdbService();

const PAGE_TITLE = `Trends`;
const DEF_PARAM_VALUE = 'week';

export const Home = () => {
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
      .catch(showError);
  }, [active]);

  const handleLoadMoreClick = clickCount => {
    page.current = clickCount;
    srv
      .getTrendingMovies(active, { page: page.current })
      .then(({ results }) => {
        setTrends(cur => [...cur, ...results]);
      })
      .catch(showError);
  };

  return (
    <>
      <PageTitle style={{ marginBottom: 30, marginTop: 10 }}>
        {PAGE_TITLE}
      </PageTitle>
      <OptionButtons
        items={'week day'}
        onClick={name => setActive(name)}
        style={{ marginBottom: 30 }}
        value={active}
      />

      {trends && trends.length > 0 && <MovieGallery data={trends} />}

      {totalPages.current > 0 && page.current < totalPages.current && (
        <LoadMoreBtn onClick={handleLoadMoreClick} style={{ marginTop: 30 }} />
      )}
    </>
  );
};
