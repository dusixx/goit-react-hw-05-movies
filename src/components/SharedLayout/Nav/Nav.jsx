import { NavStyled, StyledNavLink } from './Nav.styled';

export const Nav = () => (
  <NavStyled>
    <StyledNavLink to="/">Home</StyledNavLink>
    <StyledNavLink to="movies">Movies</StyledNavLink>
  </NavStyled>
);
