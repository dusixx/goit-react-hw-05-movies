import styled from '@emotion/styled';
import { GoBackLink } from 'components/etc/GoBackLink/GoBackLink';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 0 auto;
  padding: 0 20px 0 20px;
`;

export const HeaderWrapper = styled.div`
  position: relative;
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
`;

export const MainContainer = styled(Container)`
  padding-bottom: 40px;
  padding-top: 90px;

  @media screen and (min-width: 320px) {
    padding-top: 120px;
  }
`;

export const Main = styled.main`
  /* background: linear-gradient(180deg, #ebebeb 0, transparent); */
  margin: 0 auto 0 auto;
  max-width: 1350px;
  min-height: 100vh;
  background-color: whitesmoke;
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
