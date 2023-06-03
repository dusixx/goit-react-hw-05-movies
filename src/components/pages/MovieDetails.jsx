import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TmdbService from 'services/tmdbSrv';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { showError } from 'utils';

const srv = new TmdbService();

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    srv
      .getMovieDetails(movieId)
      .then(data => setDetails(data))
      .catch(showError);

    // srv.getMovieCredits(movieId).then(console.log).catch(showError);
    // srv.getMovieReviews(movieId).then(console.log).catch(showError);
  }, [movieId]);

  return details && <MovieInfo value={details} />;
};
