import { Outlet } from 'react-router-dom';
import { HeaderNav } from './HeaderNav/HeaderNav';
import { Logo } from './Logo/Logo';

import {
  Header,
  Main,
  HeaderContainer,
  MainContainer,
  SubHeader,
  // GoBack,
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
        {/* <GoBack>back</GoBack> */}
        {/* <SubHeader style={{ height: 40 }} /> */}
        <MainContainer>
          <SubHeader style={{ height: 40 }} />
          <Outlet />
        </MainContainer>
      </Main>
    </div>
  );
};
