import { ReactComponent as IconImdbLogo } from '../../../images/imdbLogo.svg';
import { SiThemoviedatabase as IconTmdbLogo } from 'react-icons/si';
import { truncateNumber } from 'utils';
import {
  VoteAverage,
  TmdbLink,
  ImdbLink,
  Ratings,
  Stat,
  ReviewsHashLink,
} from './Rating.styled';

const DEF_HEIGHT = 40;
const TMDB_BASE_URL = 'https://www.themoviedb.org/movie/';
const IMDB_BASE_URL = 'https://www.imdb.com/title/';
const NEW_TAB = { target: '_blank', rel: 'noopener noreferrer' };

export const Rating = ({
  height = DEF_HEIGHT,
  vote_average,
  vote_count,
  popularity,
  imdb_id,
  reviewsCount,
  id,
  ...restProps
}) => {
  let rating = Number(vote_average);
  rating = rating ? rating.toFixed(1) : 'N/A';

  const tmdbUrl = `${TMDB_BASE_URL}${id}`;
  const tmdbData = { to: tmdbUrl, title: tmdbUrl, height, ...NEW_TAB };

  const imdbUrl = `${IMDB_BASE_URL}${imdb_id}`;
  const imdbData = { to: imdbUrl, title: imdbUrl, height, ...NEW_TAB };

  return (
    <Ratings>
      <VoteAverage {...tmdbData}>{rating}</VoteAverage>
      {imdb_id && (
        <ImdbLink {...imdbData}>
          <IconImdbLogo />
        </ImdbLink>
      )}
      <TmdbLink {...tmdbData}>
        <IconTmdbLogo size={height} title={tmdbUrl} />
      </TmdbLink>

      {vote_count > 0 && (
        <Stat>
          <span>{truncateNumber(vote_count)}</span> votes
        </Stat>
      )}

      {reviewsCount > 0 && (
        <ReviewsHashLink to="#reviews">
          <span>{reviewsCount}</span> review(s)
        </ReviewsHashLink>
      )}
    </Ratings>
  );
};
