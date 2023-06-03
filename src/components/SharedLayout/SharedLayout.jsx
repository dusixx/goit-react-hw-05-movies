import { Outlet } from 'react-router-dom';
import { HeaderNav } from './HeaderNav/HeaderNav';
import { Logo } from './Logo/Logo';
import {
  Header,
  Main,
  HeaderContainer,
  MainContainer,
} from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <div>
      <Header>
        <HeaderContainer>
          <Logo />
          <HeaderNav />
        </HeaderContainer>
      </Header>
      <Main>
        <MainContainer>
          <Outlet />
        </MainContainer>
      </Main>
    </div>
  );
};
