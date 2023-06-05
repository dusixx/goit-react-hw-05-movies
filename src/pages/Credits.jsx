import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PageTitle } from 'styles/shared';
import { showError } from 'utils';
import TmdbService from 'services/tmdb/tmdbSrv';
import { CreditsInfo } from 'components/CreditsInfo/CreditsInfo';

const srv = new TmdbService();

export const Credits = () => {
  const { movieId } = useParams();

  const [details, setDetails] = useState(null);

  useEffect(() => {
    Promise.all([srv.getMovieDetails(movieId), srv.getMovieCredits(movieId)])
      .then(([movieDetails, credits]) => {
        setDetails({ ...movieDetails, credits });
      })
      .catch(showError);
  }, [movieId]);

  return (
    details && (
      <>
        <PageTitle style={{ marginBottom: 30 }}>{details.title} </PageTitle>
        <CreditsInfo data={details} />
      </>
    )
  );
};
