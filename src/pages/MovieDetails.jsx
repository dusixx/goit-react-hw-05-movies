import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TmdbService from 'services/tmdb/tmdbSrv';
import { MovieCard } from 'components/MovieInfo/MovieCard';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';

// import Loader from 'components/Loader';

const srv = new TmdbService();

// !!! некоторая информация для фильмов из списка трендов
// более актуальная чем при запросе деталей того же фильма
// Например - рейтинг и кол-во голосов

const MovieDetails = () => {
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    Promise.all([
      srv.getMovieDetails(movieId),
      srv.getMovieReviews(movieId),
      srv.getMovieCredits(movieId),
    ])
      .then(([movieDetails, reviews, credits]) => {
        setDetails({ ...movieDetails, reviews, credits });
      })
      .catch(setError);
  }, [movieId]);

  return (
    <>
      {/* мельтешит и по сути бесполезен */}
      {/* <Loader visible={!details} /> */}
      {!error && details && <MovieCard data={details} />}
      {error && <ErrorMessage error={error} />}
    </>
  );
};

export default MovieDetails;
