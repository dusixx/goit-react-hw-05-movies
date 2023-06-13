import styled from '@emotion/styled';
import { ButtonBase, FlexCentered, TransitionBase } from 'styles/shared';

const COLOR_ACTIVE = 'white';
const COLOR_INACTIVE = 'var(--color-text)';
const COLOR_ACTIVE_BG = 'var(--color-orange)';
const COLOR_INACTIVE_FOCUSED_BG = 'lightgray';

export const OptionsList = styled.div`
  ${FlexCentered('gap: 8px')};
`;

export const OptionButton = styled(ButtonBase)`
  position: relative;
  padding: 5px 12px 5px 12px;

  font-family: inherit;
  font-size: 12px;
  letter-spacing: -0.3px;
  text-transform: capitalize;

  @media screen and (min-width: 320px) {
    font-size: inherit;
  }

  border-radius: calc(var(--border-radius) * 0.8);
  ${TransitionBase('color background-color')};

  color: ${({ active }) => (active ? COLOR_ACTIVE : COLOR_INACTIVE)};

  background-color: ${({ active }) =>
    active ? COLOR_ACTIVE_BG : 'transparent'};

  &:focus-visible,
  &:hover {
    background-color: ${({ active }) => !active && COLOR_INACTIVE_FOCUSED_BG};
  }
`;
