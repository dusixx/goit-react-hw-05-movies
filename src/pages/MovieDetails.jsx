import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TmdbService from 'services/tmdb/tmdbSrv';
import { MovieCard } from 'components/MovieInfo/MovieCard';
import { showError } from 'utils';
// import Loader from 'components/Loader';

const srv = new TmdbService();

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

  console.log('Details', details);

  return (
    <>
      {/* мельтешит и по сути бесполезен */}
      {/* <Loader visible={!details} /> */}
      {details && <MovieCard data={details} />}
    </>
  );
};
