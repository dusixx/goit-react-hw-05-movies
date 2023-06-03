import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { LinkBase } from 'styles/shared';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
  color: rgba(255 255 255 / 0.5);

  @media screen and (min-width: 320px) {
    gap: 30px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  ${LinkBase};
  padding: 15px 0 15px 0;
  font-size: 15px;

  @media screen and (min-width: 320px) {
    padding: 20px 0 20px 0;
    font-size: 16px;
  }

  /* Линия внизу у активного */
  &::after {
    content: '';

    position: absolute;
    left: 0;
    bottom: 0;

    display: block;
    width: 100%;
    height: 5px;

    background-color: transparent;
    transition-property: background-color;
    transition-duration: var(--trans-duration);
    transition-timing-function: var(--trans-func);
  }

  &.active {
    color: white;
    ::after {
      background-color: var(--color-orange);
    }
  }

  &:hover,
  &:focus-visible {
    color: white;
  }
`;
