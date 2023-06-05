import { useEffect, useState } from 'react';
import { Trends } from 'components/Trends/Trends';
import { PageHeader } from 'components/PageHeader/PageHeader';
import { PageTitle } from 'styles/shared';
import { showError } from 'utils';
import TmdbService from 'services/tmdb/tmdbSrv';
// import Loader from 'components/Loader';

const srv = new TmdbService();
const PAGE_TITLE = `Top 20`;

export const Home = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    srv
      .getTrendingMovies('day')
      .then(setTrends)
      .catch(err => {
        // if (err.code === 'ERR_CANCELED') return;
        showError(err);
      });

    // return () => srv.abort();
  }, []);

  return (
    <>
      {/* <Loader visible={trends.length <= 0} /> */}
      <PageTitle style={{ marginBottom: 30 }}>{PAGE_TITLE}</PageTitle>
      <Trends value={trends} />
    </>
  );
};
