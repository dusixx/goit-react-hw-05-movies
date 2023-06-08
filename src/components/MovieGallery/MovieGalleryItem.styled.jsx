import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { FlexCentered } from 'styles/shared';

export const MovieLink = styled(Link)`
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

//
// rating
//

export const Rating = styled.span`
  position: absolute;
  top: 15px;
  right: -5px;
  z-index: 9;

  ${FlexCentered()};

  padding-left: 7px;
  padding-right: 7px;
  height: 20px;

  font-size: 16px;
  line-height: 0;

  @media screen and (max-width: 320px),
    (min-width: 500px) and (max-width: 650px),
    (min-width: 800px) and (max-width: 900px) {
    font-size: 14px;
    padding: 0px 4px 0px 4px;
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

//
// overlay
//

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
    (min-width: 500px) and (max-width: 650px),
    (min-width: 800px) and (max-width: 900px) {
    gap: 10px;
  }

  background-color: rgb(0 0 0 / 0.8);
  opacity: 0;

  /* border-bottom: 6px solid var(--color-orange); */

  /*   &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;

    display: block;
    width: 100%;
    height: 5px;
    background-color: var(--color-orange);
  } */

  transition-property: opacity;
  transition-timing-function: var(--trans-func);
  transition-duration: var(--trans-duration);
`;

//
// title
//

export const Title = styled.h2`
  padding-right: 20px;

  font-size: 26px;
  line-height: 1.1;
  letter-spacing: -0.2px;

  @media screen and (max-width: 320px),
    (min-width: 500px) and (max-width: 650px),
    (min-width: 800px) and (max-width: 900px) {
    font-size: 16px;
  }
`;

//
// genres
//

export const Genres = styled.p`
  font-size: 14px;
  color: var(--color-orange);

  @media screen and (max-width: 320px),
    (min-width: 500px) and (max-width: 650px),
    (min-width: 800px) and (max-width: 900px) {
    font-size: 12px;
  }
`;

//
// overview
//

export const Overview = styled.p`
  height: 100%;
  padding-right: 5px;

  font-size: 13px;
  line-height: 1.1;

  @media screen and (max-width: 320px),
    (min-width: 500px) and (max-width: 650px),
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

// export const ItemWrapper = styled.div`
//   position: relative;
// `;
