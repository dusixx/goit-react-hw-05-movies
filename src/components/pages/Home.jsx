import { useEffect, useState } from 'react';
import TmdbService from 'services/tmdbSrv';
import { Trends } from 'components/Trends/Trends';
import { Title } from 'styles/shared';
import Loader from 'components/Loader';
import { showError } from 'utils';

const srv = new TmdbService();
const PAGE_TITLE = `Today's top`;

const titleStyle = {
  marginBottom: '30px',
  fontSize: 34,
  textTransform: 'capitalize',
  textAlign: 'center',
};

export const Home = () => {
  const [trends, setTrends] = useState([]);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    srv
      .getTrendingMovies('day')
      .then(res => setTrends(res))
      .catch(err => {
        // if (err.code === 'ERR_CANCELED') return;
        showError(err);
      })
      .finally(() => setShowLoader(false));

    // return () => srv.abort();
  }, [setShowLoader]);

  return (
    <>
      {/* <Loader visible={showLoader} /> */}
      <Title style={titleStyle}>{PAGE_TITLE}</Title>
      <Trends value={trends} />
    </>
  );
};
