import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PageTitle } from 'styles/shared';
import { CreditsInfo } from 'components/CreditsInfo/CreditsInfo';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import TmdbService from 'services/tmdb/tmdbSrv';

const srv = new TmdbService();
const DEF_SCROLL_BY = 2;

//
// Credits
//

const Credits = ({ loader }) => {
  const { movieId } = useParams();
  const [error, setError] = useState(null);
  const [details, setDetails] = useState(null);

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
          <CreditsInfo
            data={details}
            loader={loader}
            scrollBy={DEF_SCROLL_BY}
          />
        </>
      )}
      {error && <ErrorMessage error={error} />}
    </>
  );
};

export default Credits;
