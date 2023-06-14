import styled from '@emotion/styled';
import { TransitionBase } from 'styles/shared';

const visibility = visible => (visible ? 'none' : 'translate(0, -100%)');

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;

  color: white;
  background-color: var(--color-header-bg);
  border-bottom: 1px solid rgb(255 255 255 / 0.1);

  ${TransitionBase('transform opacity')};
  transform: ${({ visible }) => visibility(visible)};
`;
