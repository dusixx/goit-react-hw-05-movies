import styled from '@emotion/styled';
import { ButtonSecondary } from 'styles/shared';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const CreditsList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  width: 100%;
`;

export const CreditsListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 150px;

  background: linear-gradient(180deg, #ebebeb 0, transparent);
  border-radius: var(--border-radius);
  overflow: hidden;
`;

export const LoadMoreBtn = styled(ButtonSecondary)`
  margin: 0 auto 0 auto;
  margin-top: 10px;
`;
