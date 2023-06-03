import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 0 auto;
  padding: 0 20px 0 20px;
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;

  color: white;
  background-color: rgb(0 0 0 / 0.85);
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
`;

export const MainContainer = styled(Container)`
  padding-top: 90px;
  padding-bottom: 40px;
`;

export const Main = styled.main`
  max-width: 1440px;
  /* height: 100%; */
  background-color: whitesmoke;
  margin: 0 auto 0 auto;
`;
