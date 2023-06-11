import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TmdbService from 'services/tmdb/tmdbSrv';
import { MovieCard } from 'components/MovieInfo/MovieCard';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import { func } from 'prop-types';

const srv = new TmdbService();

// !! некоторая информация для фильмов из списка трендов
// более актуальная чем при запросе деталей того же фильма
// Например - рейтинг и кол-во голосов

const MovieDetails = ({ loader: Loader }) => {
  const [error, setError] = useState(null);
  const [showLoader, setShowLoader] = useState(false);
  const { movieId } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    setShowLoader(true);
    Promise.all([
      srv.getMovieDetails(movieId),
      srv.getMovieReviews(movieId),
      srv.getMovieCredits(movieId),
    ])
      .then(([movieDetails, reviews, credits]) => {
        setDetails({ ...movieDetails, reviews, credits });
      })
      .catch(setError)
      .finally(() => setShowLoader(false));
  }, [movieId]);

  return (
    <>
      {showLoader && Loader}
      {error && <ErrorMessage error={error} />}
      {!error && details && <MovieCard data={details} />}
    </>
  );
};

MovieDetails.propTypes = {
  Loader: func,
};

export default MovieDetails;
