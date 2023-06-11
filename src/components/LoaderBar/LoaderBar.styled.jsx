import styled from '@emotion/styled';

export const BarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  height: 3px;
`;

export const Bar = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: lightgray;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;

    width: 192px;
    height: 3px;

    background: var(--color-orange);
    animation: animloader 2s linear infinite;
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
