import { Backtop } from 'components/etc/Backtop/Backtop';
import { Outlet } from 'react-router-dom';
import { Nav } from './Nav/Nav';
import { Logo } from './Logo/Logo';
import { Header } from './Header/Header';
import { Suspense } from 'react';
import { LoaderBar } from 'components/LoaderBar/LoaderBar';
import {
  Main,
  HeaderContainer,
  MainContainer,
  HeaderWrapper,
} from './SharedLayout.styled';
import { SubHeader } from 'components/SubHeader/SubHeader';

export const SharedLayout = ({ setSubheaderMiddle }) => {
  // const [subHeaderContent, setSubHeaderContent] = useState(null);

  return (
    <>
      <HeaderWrapper>
        {/* <SubHeader leftContent={<GoBackLink />} {...subHeaderContent} /> */}
        {/* На страницах может дублироваться, так проще чем через контекст */}
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
              <Outlet /* context={setSubHeaderContent} */ />
            </Suspense>
          </MainContainer>
        </section>
      </Main>
      <Backtop />
    </>
  );
};
