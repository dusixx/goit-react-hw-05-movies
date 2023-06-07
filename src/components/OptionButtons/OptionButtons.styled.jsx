import styled from '@emotion/styled';
import { ButtonBase, FlexCentered, TransitionBase } from 'styles/shared';
import { calcCSSValue } from 'utils';

export const OptionsList = styled.div`
  ${FlexCentered()};
  flex-wrap: wrap;
  gap: 10px;

  margin-bottom: ${({ style }) => calcCSSValue(style?.marginBottom)};
`;

export const OptionButton = styled(ButtonBase)`
  position: relative;
  padding: 8px 12px 8px 12px;

  font-family: inherit;
  font-size: inherit;
  text-transform: capitalize;

  border-radius: var(--border-radius);
  ${TransitionBase('color background-color')};

  color: ${({ active }) => (active ? 'white' : 'var(--color-blue)')};
  background-color: ${({ active }) =>
    active ? 'var(--color-blue)' : 'transparent'};

  &:focus-visible,
  &:hover {
    background-color: ${({ active }) => !active && 'lightgray'};
  }
`;
