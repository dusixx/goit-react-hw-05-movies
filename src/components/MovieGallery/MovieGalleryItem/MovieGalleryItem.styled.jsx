import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { FlexCentered, NoPosterBg, TransitionBase } from 'styles/shared';

export const MovieLink = styled(Link)`
  ${NoPosterBg}

  position: relative;

  display: block;
  width: 100%;
  height: 100%;

  color: var(--color-gray-lighter);
  border-radius: var(--border-radius);
  overflow: hidden;

  &:hover,
  &:focus-visible {
    & [data-overlay] {
      opacity: 1;
    }
  }
`;

export const Rating = styled.span`
  ${FlexCentered()};

  position: absolute;
  top: 15px;
  right: -5px;
  z-index: 9;

  padding-left: 7px;
  padding-right: 7px;
  height: 20px;

  font-size: 16px;
  line-height: 0;

  @media screen and (max-width: 320px),
    (min-width: 555px) and (max-width: 650px),
    (min-width: 800px) and (max-width: 900px) {
    font-size: 14px;
    padding: 0 4px 0 4px;
  }

  background-color: var(--color-orange);
  border-radius: calc(var(--border-radius) * 0.5);
  color: white;
`;

export const Poster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  /* 
    Не будет выпадать маржин, например, у Overview
    Паддинги работают для всего контента, в тч для Overview
  */
  display: flex;
  flex-direction: column;
  gap: 15px;

  width: 100%;
  height: 100%;

  padding: 20px;
  padding-bottom: 30px;

  @media screen and (max-width: 320px),
    (min-width: 555px) and (max-width: 650px),
    (min-width: 800px) and (max-width: 900px) {
    gap: 10px;
  }

  ${TransitionBase('opacity')};

  background-color: rgb(0 0 0 / 0.8);
  opacity: 0;
`;

export const Title = styled.h2`
  padding-right: 25px;

  font-size: 24px;
  line-height: 1.1;
  letter-spacing: -0.2px;

  overflow-wrap: break-word;

  @media screen and (max-width: 320px),
    (min-width: 555px) and (max-width: 650px),
    (min-width: 800px) and (max-width: 900px) {
    font-size: 16px;
  }
`;

export const AltTitle = styled.h3`
  padding: 20px;
  padding-right: 50px;

  font-family: Arial Black;
  font-size: 18px;
  letter-spacing: -0.5px;

  color: rgb(0 0 0 / 0.2);
  overflow-wrap: break-word;

  @media screen and (max-width: 320px),
    (min-width: 555px) and (max-width: 650px),
    (min-width: 800px) and (max-width: 900px) {
    font-size: 16px;
  }
`;

export const Genres = styled.p`
  font-size: 14px;
  color: var(--color-orange);

  @media screen and (max-width: 320px),
    (min-width: 555px) and (max-width: 650px),
    (min-width: 800px) and (max-width: 900px) {
    font-size: 12px;
  }
`;

export const Overview = styled.p`
  height: 100%;
  padding-right: 5px;

  font-size: 13px;
  line-height: 1.1;

  @media screen and (max-width: 320px),
    (min-width: 555px) and (max-width: 650px),
    (min-width: 800px) and (max-width: 900px) {
    font-size: 11px;
  }

  color: rgba(255 255 255 / 0.5);
  overflow: auto;

  /* Custom scroll */
  ::-webkit-scrollbar {
    width: 3px;

    &-track {
      background: #f1f1f1;
    }
    &-thumb {
      background: var(--color-blue);
    }
    &-thumb:hover {
      background: var(--color-blue-light);
    }
  }
`;
