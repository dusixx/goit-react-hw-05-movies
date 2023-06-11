import { Backtop } from 'components/etc/Backtop/Backtop';
import { Outlet } from 'react-router-dom';
import { HeaderNav } from './HeaderNav/HeaderNav';
import { Logo } from './Logo/Logo';
import { Header } from './Header/Header';
import { Suspense } from 'react';
import { Main, HeaderContainer, MainContainer } from './SharedLayout.styled';
import { LoaderBar } from 'components/LoaderBar/LoaderBar';

export const SharedLayout = () => {
  return (
    <div>
      {/* <ScrollToTop /> */}
      <Header>
        <HeaderContainer>
          <Logo />
          <HeaderNav />
        </HeaderContainer>
      </Header>
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
    </div>
  );
};
