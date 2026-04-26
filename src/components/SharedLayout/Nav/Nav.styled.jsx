import styled from '@emotion/styled';
import { LinkBase, TransitionBase } from '@styles';
import { NavLink } from 'react-router-dom';

export const NavStyled = styled.nav`
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
    padding: 20px 0 19px 0;
    font-size: 16px;
  }

  &::after {
    content: '';

    position: absolute;
    left: 0;
    bottom: -1px;

    display: block;
    width: 100%;
    height: 6px;

    background-color: transparent;
    ${TransitionBase('background-color')};
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
