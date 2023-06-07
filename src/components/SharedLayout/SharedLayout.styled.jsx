import styled from '@emotion/styled';
import { GoBackLink } from 'components/GoBackLink/GoBackLink';

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
  padding-top: 70px;
  padding-bottom: 40px;
`;

export const Main = styled.main`
  max-width: 1350px;
  min-height: 100vh;
  background-color: whitesmoke;
  margin: 0 auto 0 auto;
`;

export const GoBack = styled(GoBackLink)`
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -1px;
  text-transform: uppercase;
  color: var(--color-black);

  display: flex;
  justify-content: center;

  &:hover,
  &:focus-visible {
    color: var(--color-blue);
  }
`;
