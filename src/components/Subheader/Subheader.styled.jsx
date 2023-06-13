import styled from '@emotion/styled';
import { FlexCentered, TransitionBase } from 'styles/shared';
import { Container as PageContainer } from '../SharedLayout/SharedLayout.styled';

const visibility = visible => (visible ? 'none' : 'translate(0, -60%)');

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 90;

  display: flex;
  width: 100%;
  height: 80px;
  padding-top: 48px;

  @media screen and (min-width: 320px) {
    height: 100px;
    padding-top: 58px;
  }

  background-color: white;
  border-bottom: 1px solid lightgray;

  ${TransitionBase('transform opacity')};
  transform: ${({ visible }) => visibility(visible)};
`;

export const InnerContainer = styled(PageContainer)`
  display: flex;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const Middle = styled(Column)`
  ${FlexCentered()};
  width: 80%;
`;

export const Left = styled(Column)`
  width: 10%;
`;

export const Right = styled(Column)`
  justify-content: flex-end;
  width: 10%;
`;
