import { ErrorMessage } from '@components/ErrorMessage/ErrorMessage';
import { MovieCard } from '@components/MovieCard/MovieCard';
import { TmdbService } from '@services';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const srv = new TmdbService();

// NOTE: some information for movies from the trending list
// is more relevant than when requesting details for the same movie
// For example, rating and number of votes

const MovieDetails = ({ loader: Loader }) => {
  const [error, setError] = useState(null);
  const [showLoader, setShowLoader] = useState(true);
  const { movieId } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    setShowLoader(true);

    // TODO: show content loader (skeleton)
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
