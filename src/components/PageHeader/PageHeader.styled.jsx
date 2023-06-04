import styled from '@emotion/styled';
import { PageSubtitle } from 'styles/shared';

export const PageHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  width: 100%;
  margin-bottom: 30px;
  word-break: break-all;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: initial;
  }
`;

export const PageHeaderTitle = styled.div`
  text-align: center;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 60%;
  }
`;

export const Subtitle = styled(PageSubtitle)`
  margin-top: 15px;
`;

export const PageHeaderLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 20%;
    text-align: left;
    justify-content: flex-start;
  }
`;

export const PageHeaderRight = styled(PageHeaderLeft)`
  @media screen and (min-width: 768px) {
    text-align: right;
    justify-content: flex-end;
  }
`;
