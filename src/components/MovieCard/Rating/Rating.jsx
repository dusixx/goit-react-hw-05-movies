import { number, oneOfType, string } from 'prop-types';
import { IconImdbLogo, IconTmdbLogo } from 'styles/icons';
import { HashBtnLink } from 'components/etc/HashBtnLink/HashBtnLink';
import TmdbService from 'services/tmdb/tmdbSrv';
import { shortenNum } from 'utils';

import {
  VoteAverage,
  TmdbLink,
  ImdbLink,
  Ratings,
  Stat,
} from './Rating.styled';

const srv = new TmdbService();
const DEF_HEIGHT = 40;
const NEW_TAB = { target: '_blank', rel: 'noopener noreferrer' };

//
// Rating
//

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

  const tmdbUrl = srv.getTmdbUrl(id);
  const imdbUrl = srv.getImdbUrl(imdb_id);
  const tmdbData = { to: tmdbUrl, title: tmdbUrl, height, ...NEW_TAB };
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
        <HashBtnLink to="#reviews" style={{ padding: '5px 5px 5px 0' }}>
          <span>{reviewsCount}</span> review(s)
        </HashBtnLink>
      )}
    </Ratings>
  );
};

Rating.propType = {
  height: oneOfType([string, number]),
  vote_average: number,
  vote_count: number,
  popularity: number,
  imdb_id: string,
  reviewsCount: number,
  id: number,
};
