import { useEffect, useState, useRef } from 'react';
import MovieGallery from 'components/MovieGallery';
import { PageTitle } from 'styles/shared';
import TmdbService from 'services/tmdb/tmdbSrv';
import { OptionButtons } from 'components/etc/OptionButtons/OptionButtons';
import { LoadMoreBtn } from 'components/etc/LoadMoreBtn/LoadMoreBtn';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import { SubHeader } from 'components/SubHeader/SubHeader';
import { useWillUnmount } from './useWillUnmount';

const srv = new TmdbService();

const PAGE_TITLE = `Trends`;
const DEF_OPTION_VALUE = 'day';
const OPTION_ITEMS = 'day week';

const Home = ({ loader, fromOutlet }) => {
  const [active, setActive] = useState(DEF_OPTION_VALUE);
  const [error, setError] = useState(null);
  const [trends, setTrends] = useState([]);
  const [wasLoaded, setWasLoaded] = useState(false);
  const totalPages = useRef(1);
  const page = useRef(1);

  // cleanup
  useWillUnmount(srv.abort);

  useEffect(() => {
    srv
      .getTrendingMovies(active)
      .then(data => {
        setTrends(data.results);
        totalPages.current = data.total_pages;
      })
      .catch(err => {
        setError(err);
        console.log(err);
      });

    return () => srv.abort();
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

  const showLoadMoreBtn =
    wasLoaded && totalPages.current > 0 && page.current < totalPages.current;

  return (
    <>
      {error && <ErrorMessage error={error} />}
      {!error && trends?.length > 0 && (
        <>
          <SubHeader>
            <OptionButtons
              items={OPTION_ITEMS}
              onClick={setActive}
              value={active}
            />
          </SubHeader>

          <PageTitle style={{ marginBottom: 35 }}>{PAGE_TITLE}</PageTitle>

          <MovieGallery
            data={trends}
            loader={loader}
            onLoad={() => setWasLoaded(true)}
          />

          {showLoadMoreBtn && (
            <LoadMoreBtn
              onClick={handleLoadMoreClick}
              style={{ marginTop: 40 }}
            />
          )}
        </>
      )}
    </>
  );
};

export default Home;
