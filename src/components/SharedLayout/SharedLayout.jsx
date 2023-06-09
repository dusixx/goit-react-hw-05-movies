import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Nav } from './Nav/Nav';
import { Logo } from './Logo/Logo';
import { Header } from './Header/Header';
import { LoaderBar } from 'components/etc/LoaderBar/LoaderBar';
import { SubHeader } from 'components/Subheader/Subheader';
import { Backtop } from 'components/etc/Backtop/Backtop';
import { ScrollToTop } from 'components/etc/ScrollToTop/ScrollToTop';

import {
  Main,
  HeaderContainer,
  MainContainer,
  HeaderWrapper,
} from './SharedLayout.styled';

export const SharedLayout = () => (
  <>
    <ScrollToTop />

    <HeaderWrapper>
      <SubHeader />
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
