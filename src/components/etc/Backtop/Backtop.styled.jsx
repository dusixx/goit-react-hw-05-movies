import styled from '@emotion/styled';
import { ButtonBase, FlexCentered, TransitionBase } from 'styles/shared';
import { calcCSSValue } from 'utils';

export const BacktopBtn = styled(ButtonBase)`
  ${FlexCentered()};

  display: ${({ visible }) => (visible ? 'flex' : 'none')};

  position: fixed;
  bottom: ${({ offset }) => calcCSSValue(offset) || '20px'};
  right: ${({ offset }) => calcCSSValue(offset) || '20px'};
  z-index: 99;

  width: ${({ size }) => calcCSSValue(size) || '50px'};
  height: ${({ size }) => calcCSSValue(size) || '50px'};

  color: white;
  background-color: var(--color-blue);
  border-radius: 50%;

  opacity: 0.4;
  ${TransitionBase('opacity')};

  &:hover,
  &:focus-visible {
    opacity: 1;
  }
`;
