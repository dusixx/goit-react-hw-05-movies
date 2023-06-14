import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TmdbService from 'services/tmdb/tmdbSrv';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import { useWillUnmount } from 'hooks/useWillUnmount';

const srv = new TmdbService();

//
// MovieDetails
//

// !! некоторая информация для фильмов из списка трендов
// более актуальная, чем при запросе деталей того же фильма
// Например, рейтинг и кол-во голосов
const MovieDetails = ({ loader: Loader }) => {
  const [error, setError] = useState(null);
  const [showLoader, setShowLoader] = useState(true);
  const { movieId } = useParams();
  const [details, setDetails] = useState(null);

  // cleanup
  useWillUnmount(srv.abort);

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

export default MovieDetails;
