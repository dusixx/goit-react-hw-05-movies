import styled from '@emotion/styled';
import { TransitionBase } from 'styles/shared';

// const POSTER_HMULT = 1.5;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: var(--gallery-items-gap);
  width: 100%;
`;

export const Item = styled.li`
  position: relative;
  ${TransitionBase('filter')};

  flex-basis: calc(
    (100% - var(--gallery-items-gap) * (var(--gallery-items-per-row) - 1)) /
      (var(--gallery-items-per-row))
  );

  @media screen and (min-width: 500px) {
    --gallery-items-per-row: 2;
  }

  @media screen and (min-width: 800px) {
    --gallery-items-per-row: 3;
  }

  @media screen and (min-width: 1200px) {
    --gallery-items-per-row: 4;
  }
`;
