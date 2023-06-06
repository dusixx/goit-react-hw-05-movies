import styled from '@emotion/styled';
import { ButtonSecondary, Subtitle } from 'styles/shared';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }

  margin-top: 40px;
  border-top: 1px solid lightgray;
`;

export const Title = styled(Subtitle)`
  margin-top: 30px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const LoadMoreBtn = styled(ButtonSecondary)`
  margin: 0 auto 0 auto;
`;
