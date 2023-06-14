import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { LinkBase, LinkPrimary } from 'styles/shared';

import {
  Title as TitleShared,
  TransitionBase,
  NoPosterBg,
  Subtitle,
} from 'styles/shared';

const HEADER_HEIGHT = '58px';
const POSTER_HMULT = 1.5;

export const Card = styled.article``;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 10px;

  @media screen and (min-width: 768px) {
    align-items: initial;
    flex-direction: row;
    gap: 30px;
  }
`;

export const PosterLink = styled(Link)`
  position: relative;
  flex-shrink: 0;

  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'auto')};
  pointer-events: ${({ clickable }) => (clickable ? 'all' : 'none')};

  width: 90vw;
  height: calc(90vw * ${POSTER_HMULT});

  border-radius: var(--border-radius);
  overflow: hidden;

  ${NoPosterBg}

  @media screen and (min-width: 768px) {
    position: sticky;
    top: 40px; // ${HEADER_HEIGHT};
    width: 330px;
    height: calc(330px * ${POSTER_HMULT});
  }
`;

export const Poster = styled.img`
  ${TransitionBase('filter')};

  width: 100%;
  height: 100%;
  object-fit: cover;

  /* Сюда вместо ссылки - чтобы не cработывало для заглушек */
  &:hover,
  &:focus-visible {
    filter: brightness(1.1);
  }
`;

export const Desc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    align-items: initial;
  }
`;

export const MovieTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
`;

export const WellKnownTitle = styled(TitleShared)`
  font-size: 38px;
  text-align: center;

  @media screen and (min-width: 768px) {
    max-width: 700px;
    text-align: left;
  }
`;

export const OriginalTitle = styled.h3`
  font-size: 15px;
  letter-spacing: -0.3px;

  color: rgb(0 0 0 / 0.3);
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

export const CastAndCrewLink = styled(LinkPrimary)`
  display: flex;
  align-items: center;
  width: max-content;

  padding: 5px;
  padding-left: 0;
  margin-top: 25px;

  text-transform: capitalize;
`;

export const Homepage = styled(Link)`
  ${LinkBase};

  display: block;
  width: 150px;
  margin-top: 20px;
  padding: 10px;

  text-transform: capitalize;
  text-align: center;

  color: var(--color-blue);
  border: 2px solid var(--color-blue);
  border-radius: var(--border-radius);

  ${TransitionBase('color background-color')};

  &:hover,
  &:focus-visible {
    background-color: var(--color-blue);
    color: white;
  }
`;

export const Overview = styled.div`
  line-height: 1.5;
`;

export const Title = styled(Subtitle)`
  text-align: center;
  margin-top: 35px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;
