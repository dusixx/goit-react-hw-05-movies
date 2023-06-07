import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TmdbService from 'services/tmdb/tmdbSrv';
import { MovieCard } from 'components/MovieInfo/MovieCard';
import { showError } from 'utils';
// import Loader from 'components/Loader';

const srv = new TmdbService();

// !!! некоторая информация для фильмов из списка трендов
// более актуальная чем при запросе деталей того же фильма
// Например - рейтинг и кол-во голосов

export const MovieDetails = () => {
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
      .catch(showError);
  }, [movieId]);

  return (
    <>
      {/* мельтешит и по сути бесполезен */}
      {/* <Loader visible={!details} /> */}
      {details && <MovieCard data={details} />}
    </>
  );
};
