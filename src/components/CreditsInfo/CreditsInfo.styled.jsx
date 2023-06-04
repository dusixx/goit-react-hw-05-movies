import styled from '@emotion/styled';

export const CreditsList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 25px;

  width: 100%;
  margin-top: 30px;
`;

export const CreditsListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 150px;
  border-radius: var(--border-radius);
  overflow: hidden;
`;
