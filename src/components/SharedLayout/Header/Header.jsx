import { useHideOnScrollDown } from '@hooks';
import { StyledHeader } from './Header.styled';

export const Header = ({ children }) => {
  const [visible, onTop] = useHideOnScrollDown(true);
  return <StyledHeader visible={onTop || visible}>{children}</StyledHeader>;
};
