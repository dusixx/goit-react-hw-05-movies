import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { FlexCentered, TransitionBase } from 'styles/shared';
import { calcCSSValue } from 'utils';
import { HashLink } from '../../HashLink/HashLink';

export const Ratings = styled.div`
  ${FlexCentered('gap: 15px; flex-wrap: wrap;')};

  @media screen and (min-width: 768px) {
    justify-content: initial;
  }
`;

const Tag = styled(Link)`
  ${FlexCentered()};
  ${TransitionBase('filter')};

  height: ${({ height }) => calcCSSValue(height)};
  border-radius: var(--border-radius);
  color: white;

  &:hover,
  &:focus-visible {
    filter: brightness(1.05);
  }
`;

export const ReviewsHashLink = styled(HashLink)`
  padding: 5px;
  padding-left: 0;
`;

export const VoteAverage = styled(Tag)`
  padding: 0 10px 0 10px;
  font-family: Arial Black;
  font-size: 22px;
  line-height: 0;
  background-color: var(--color-orange);
`;

export const ImdbLink = styled(Tag)`
  padding: 0 7px 0 7px;
  background-color: var(--color-imdb-yellow);

  & svg {
    height: 60%;
  }
`;

export const Stat = styled.span`
  font-size: 14px;
  & span {
    font-weight: bold;
  }
`;

export const TmdbLink = styled(Tag)`
  padding: 0 7px 0 7px;

  background: linear-gradient(
    to right,
    var(--color-tmdb-green) 0%,
    var(--color-tmdb-blue) 100%
  );

  & svg {
    height: 100%;
  }
`;
