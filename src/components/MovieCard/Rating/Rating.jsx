import { shortenNum } from '@common';
import { NEW_TAB_TARGET_REL, NOT_AVAILABLE } from '@common/constants.js';
import { HashBtnLink } from '@components/etc/HashBtnLink/HashBtnLink';
import { TmdbService } from '@services';
import { IconImdbLogo, IconTmdbLogo } from '@styles';
import { number, oneOfType, string } from 'prop-types';
import {
  ImdbLink,
  Ratings,
  Stat,
  TmdbLink,
  VoteAverage,
} from './Rating.styled';

const srv = new TmdbService();

const DEF_HEIGHT = 40;

export const Rating = ({
  height = DEF_HEIGHT,
  vote_average,
  vote_count,
  imdb_id,
  reviewsCount,
  id,
}) => {
  let rating = Number(vote_average);
  rating = rating ? rating.toFixed(1) : NOT_AVAILABLE;

  const tmdbUrl = srv.getTmdbUrl(id);
  const imdbUrl = srv.getImdbUrl(imdb_id);
  const tmdbData = {
    to: tmdbUrl,
    title: tmdbUrl,
    height,
    ...NEW_TAB_TARGET_REL,
  };
  const imdbData = {
    to: imdbUrl,
    title: imdbUrl,
    height,
    ...NEW_TAB_TARGET_REL,
  };

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
