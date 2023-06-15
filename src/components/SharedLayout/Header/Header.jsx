import { StyledHeader } from './Header.styled';
import { useHideOnScrollDown } from 'hooks';

export const Header = ({ children }) => {
  const [visible, onTop] = useHideOnScrollDown(true);

  return <StyledHeader visible={onTop || visible}>{children}</StyledHeader>;
};
