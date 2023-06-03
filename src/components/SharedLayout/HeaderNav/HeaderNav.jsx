import { Nav, StyledNavLink } from './HeaderNav.styled';

export const HeaderNav = () => (
  <Nav>
    <StyledNavLink to="/">Home</StyledNavLink>
    <StyledNavLink to="movies">Movies</StyledNavLink>
  </Nav>
);
