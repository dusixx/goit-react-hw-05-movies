import { LogoLink, LogoText, LogoImage } from './Logo.styled';

export const Logo = () => (
  <LogoLink to="/">
    <LogoImage />
    <LogoText>MovieFinder</LogoText>
  </LogoLink>
);
