import { Outlet } from 'react-router-dom';
import { HeaderNav } from './HeaderNav/HeaderNav';
import { Logo } from './Logo/Logo';

import {
  Header,
  Main,
  HeaderContainer,
  MainContainer,
  GoBack,
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
          <GoBack>back</GoBack>
          <Outlet />
        </MainContainer>
      </Main>
    </div>
  );
};
