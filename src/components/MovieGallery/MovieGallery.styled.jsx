import styled from '@emotion/styled';

// const POSTER_HMULT = 1.5;
// const POSTER_MAX_WIDTH = 500;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 15px;
`;

export const Item = styled.li`
  min-height: max-content;
  position: relative;
  aspect-ratio: 0.67; // h=1.5w
`;
