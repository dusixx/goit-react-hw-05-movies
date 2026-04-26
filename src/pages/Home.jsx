import { ErrorMessage } from '@components/ErrorMessage/ErrorMessage';
import { LoadMoreBtn } from '@components/etc/LoadMoreBtn/LoadMoreBtn';
import { OptionButtons } from '@components/etc/OptionButtons/OptionButtons';
import { MovieGallery } from '@components/MovieGallery/MovieGallery';
import { SubHeader } from '@components/Subheader/Subheader';
import { TmdbService } from '@services';
import { PageTitle } from '@styles';
import { useEffect, useRef, useState } from 'react';

const PAGE_TITLE = `Trends`;
const DEF_OPTION_VALUE = 'day';
const OPTION_ITEMS = 'day week';

const srv = new TmdbService();

const Home = ({ loader }) => {
  const [active, setActive] = useState(DEF_OPTION_VALUE);
  const [error, setError] = useState(null);
  const [trends, setTrends] = useState([]);
  const [wasLoaded, setWasLoaded] = useState(false);
  const totalPages = useRef(1);
  const page = useRef(1);

  useEffect(() => {
    srv
      .getTrendingMovies(active)
      .then(data => {
        setTrends(data.results);
        totalPages.current = data.total_pages;
      })
      .catch(err => {
        setError(err);
        console.debug(err);
      });
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
