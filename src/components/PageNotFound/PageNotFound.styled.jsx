import styled from '@emotion/styled';
import { LinkPrimary } from 'styles/shared';
import { PageTitle } from 'styles/shared';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 10px;
`;

export const GoHomeLink = styled(LinkPrimary)`
  padding: 10px;
  text-transform: capitalize;
`;

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

export const Caption = styled(PageTitle)`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 16px;
  letter-spacing: unset;

  & span {
    letter-spacing: -1px;
    font-size: 80px;
  }
`;

export const Text = styled.p``;
