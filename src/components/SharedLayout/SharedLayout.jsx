import { Backtop, LoaderBar, ScrollToTop } from '@components/etc';
import { SubHeader } from '@components/Subheader/Subheader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';
import { Logo } from './Logo/Logo';
import { Nav } from './Nav/Nav';

import {
  HeaderContainer,
  HeaderWrapper,
  Main,
  MainContainer,
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
