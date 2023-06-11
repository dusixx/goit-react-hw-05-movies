import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Title, TransitionBase, FlexCentered, NoPosterBg } from 'styles/shared';

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
    top: 0; // ${HEADER_HEIGHT};
    width: 330px;
    height: calc(330px * ${POSTER_HMULT});
  }
`;

export const Poster = styled.img`
  ${TransitionBase('filter')};

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

export const WellKnownTitle = styled(Title)`
  font-size: 38px;
  text-align: center;

  @media screen and (min-width: 768px) {
    max-width: 700px;
    text-align: left;
  }
`;

export const OriginalTitle = styled.h3`
  color: rgb(0 0 0 / 0.3);
  font-size: 15px;
  letter-spacing: -0.3px;
`;

export const ModalContainer = styled.div`
  position: relative;
  ${FlexCentered()};

  & :nth-of-type() {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const Thumb = styled.div`
  position: absolute;

  & img {
    height: 90vh;
    width: auto;
    /* чтобы оставалось куда кликнуть в бекдроп */
    max-width: 70vw;
    object-fit: contain;
    object-position: center;
  }
`;
