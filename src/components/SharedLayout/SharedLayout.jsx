import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Nav } from './Nav/Nav';
import { Logo } from './Logo/Logo';
import { Header } from './Header/Header';
import { LoaderBar } from 'components/LoaderBar/LoaderBar';
// import { SubHeader } from 'components/SubHeader/SubHeader';
import { Backtop } from 'components/etc/Backtop/Backtop';

import {
  Main,
  HeaderContainer,
  MainContainer,
  HeaderWrapper,
} from './SharedLayout.styled';

export const SharedLayout = () => (
  <>
    <HeaderWrapper>
      {/* <SubHeader /> */}
      <Header>
        <HeaderContainer>
          <Logo />
          <Nav />
        </HeaderContainer>
      </Header>
    </HeaderWrapper>

    <Main>
      <section>
        <MainContainer>
          <Suspense fallback={<LoaderBar />}>
            <Outlet />
          </Suspense>
        </MainContainer>
      </section>
    </Main>
    <Backtop />
  </>
);
