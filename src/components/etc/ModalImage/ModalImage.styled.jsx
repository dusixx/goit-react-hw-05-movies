import styled from '@emotion/styled';
import { FlexCentered } from 'styles/shared';

export const ModalContainer = styled.div`
  position: relative;
  ${FlexCentered()};

  & :nth-of-type() {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const ModalThumb = styled.div`
  position: absolute;

  & img {
    max-height: 90vh;
    width: auto;
    /* чтобы оставалось куда кликнуть в бекдроп */
    max-width: 70vw;
    object-fit: contain;
    object-position: center;
  }
`;
