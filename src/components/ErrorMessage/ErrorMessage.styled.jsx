import styled from '@emotion/styled';
import { PageTitle } from 'styles/shared';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 20px;
`;

export const Caption = styled(PageTitle)`
  display: flex;
  align-items: center;
  gap: 10px;

  font-size: 26px;
  letter-spacing: unset;

  & span {
    font-weight: 400;
    letter-spacing: -1px;
  }
`;

export const Text = styled.p``;
