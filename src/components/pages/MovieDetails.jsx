import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TmdbService from 'services/tmdbSrv';
import { MovieCard } from 'components/MovieInfo/MovieCard';
import { showError } from 'utils';

const srv = new TmdbService();

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    srv
      .getMovieDetails(movieId)
      .then(data => setDetails(data))
      .catch(showError);

    srv
      .getMovieReviews(movieId)
      .then(data => {
        setReviews(data);
      })
      .catch(showError);

    srv
      .getMovieCredits(movieId)
      .then(data => {
        setCredits(data);
      })
      .catch(showError);
  }, [movieId]);

  return details && <MovieCard data={{ ...details, reviews, credits }} />;
};
