import styled from '@emotion/styled';
import { LinkPrimary } from 'styles/shared';
import { PageTitle } from 'styles/shared';

export const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
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
