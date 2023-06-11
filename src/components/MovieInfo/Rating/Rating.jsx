import { IconImdbLogo, IconTmdbLogo } from 'styles/icons';
import { shortenNum } from 'utils';
import { HashLink } from 'components/etc/HashLink/HashLink';
import {
  VoteAverage,
  TmdbLink,
  ImdbLink,
  Ratings,
  Stat,
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
          <span>{shortenNum(vote_count)}</span> votes
        </Stat>
      )}

      {reviewsCount > 0 && (
        <HashLink to="#reviews" style={{ padding: '5px 5px 5px 0' }}>
          <span>{reviewsCount}</span> review(s)
        </HashLink>
      )}
    </Ratings>
  );
};
