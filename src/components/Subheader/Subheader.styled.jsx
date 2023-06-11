import styled from '@emotion/styled';

export const SubHeader = styled.div`
  position: absolute;
  left: 0;
  top: 0;

  display: flex;
  min-width: 100vw;
  width: 100%;
  height: ${({ style }) => style?.height || '90px'};

  background-color: white;
  border-bottom: 1px solid lightgray;
`;
