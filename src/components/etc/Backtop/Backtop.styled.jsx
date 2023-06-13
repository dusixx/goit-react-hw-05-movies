import styled from '@emotion/styled';
import { ButtonBase, FlexCentered, TransitionBase } from 'styles/shared';
import { calcCSSValue } from 'utils';

const DEF_OFFSET = 10;
const DEF_SIZE = 50;
const DEF_OPACITY = 0.4;

const visibility = (offset = DEF_OFFSET, show = false) => {
  return show ? `unset` : `translate(0, calc(100% + ${offset}px))`;
};

export const BacktopBtn = styled(ButtonBase)`
  ${FlexCentered()};

  position: fixed;
  bottom: ${({ offset = DEF_OFFSET }) => calcCSSValue(offset)};
  right: ${({ offset = DEF_OFFSET }) => calcCSSValue(offset)};
  z-index: 99;

  width: ${({ size = DEF_SIZE }) => calcCSSValue(size)};
  height: ${({ size = DEF_SIZE }) => calcCSSValue(size)};

  color: white;
  background-color: var(--color-blue);
  border-radius: 50%;
  opacity: ${DEF_OPACITY};

  ${(TransitionBase('opacity transform'), 150)};
  transform: ${({ visible, offset }) => visibility(offset, visible)};

  &:hover,
  &:focus-visible {
    opacity: 1;
  }
`;
