import styled from '@emotion/styled';
import { calcCSSValue } from 'utils';

export const BarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  width: 100vw;
  height: ${({ height }) => calcCSSValue(height)};
`;

export const Bar = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  background: white;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;

    height: 100%;
    width: 50%;

    background: var(--color-orange);
    animation: animloader 2s ease-in infinite;
  }

  @keyframes animloader {
    0% {
      left: 0;
      transform: translateX(-100%);
    }
    100% {
      left: 100%;
      transform: translateX(0%);
    }
  }
`;
