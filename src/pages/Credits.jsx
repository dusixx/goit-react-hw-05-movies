import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PageTitle } from 'styles/shared';
import TmdbService from 'services/tmdb/tmdbSrv';
import { CreditsInfo } from 'components/CreditsInfo/CreditsInfo';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import { useWillUnmount } from 'hooks/useWillUnmount';
const srv = new TmdbService();

const Credits = ({ loader }) => {
  const { movieId } = useParams();
  const [error, setError] = useState(null);
  const [details, setDetails] = useState(null);

  // cleanup
  useWillUnmount(srv.abort);

  useEffect(() => {
    Promise.all([srv.getMovieDetails(movieId), srv.getMovieCredits(movieId)])
      .then(([movieDetails, credits]) => {
        setDetails({ ...movieDetails, credits });
      })
      .catch(setError);
  }, [movieId]);

  return (
    <>
      {!error && details && (
        <>
          <PageTitle style={{ marginBottom: 35 }}>{details.title} </PageTitle>
          <CreditsInfo data={details} loader={loader} />
        </>
      )}
      {error && <ErrorMessage error={error} />}
    </>
  );
};

export default Credits;
