import styled from '@emotion/styled';
import { TransitionBase } from 'styles/shared';

const POSTER_HMULT = 1.5;
const POSTER_MAX_WIDTH = 500;
const ITEMS_GAP = '15px';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${ITEMS_GAP};
`;

export const Item = styled.li`
  position: relative;
  ${TransitionBase('filter')};

  --items-per-row: 1;

  flex-basis: calc(
    (100vw - ${ITEMS_GAP} * (var(--items-per-row) - 1)) / var(--items-per-row)
  );

  height: calc(
    (
        (100vw - ${ITEMS_GAP} * (var(--items-per-row) - 1)) /
          (var(--items-per-row))
      ) * (${POSTER_HMULT})
  );

  @media screen and (min-width: ${POSTER_MAX_WIDTH - 0.1}px) {
    --items-per-row: 2;

    height: unset;
    flex-basis: calc(
      (100% - ${ITEMS_GAP} * (var(--items-per-row) - 1)) / var(--items-per-row)
    );
  }

  @media screen and (min-width: 800px) {
    --items-per-row: 3;
  }

  @media screen and (min-width: 1200px) {
    --items-per-row: 4;
  }
`;
