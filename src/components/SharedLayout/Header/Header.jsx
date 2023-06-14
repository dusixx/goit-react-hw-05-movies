import { StyledHeader } from './Header.styled';
import { useHideOnScrollDown } from 'hooks/useHideOnScrollDown';

export const Header = ({ children }) => {
  const [visible, onTop] = useHideOnScrollDown(true);

  return <StyledHeader visible={onTop || visible}>{children}</StyledHeader>;
};
