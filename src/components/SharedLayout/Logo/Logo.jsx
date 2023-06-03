import { RiMovie2Line as IconMovie } from 'react-icons/ri';
import { LogoLink } from './Logo.styled';

const LOGO_TEXT = 'MovieFinder';
const DEF_LOGO_SIZE = 26;

export const Logo = () => (
  <LogoLink to="/">
    <IconMovie size={DEF_LOGO_SIZE} />
    <span data-text>{LOGO_TEXT}</span>
  </LogoLink>
);
