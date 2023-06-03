import styled from '@emotion/styled';
import { Title } from 'styles/shared';

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 10px;

  @media screen and (min-width: 768px) {
    align-items: initial;
    flex-direction: row;
    gap: 30px;
  }
`;

export const Thumb = styled.div`
  position: relative;
  flex-shrink: 0;

  /* border-radius: var(--border-radius);
  overflow: hidden; */

  @media screen and (min-width: 768px) {
    width: 330px;
  }

  /* border-bottom: 6px solid var(--color-orange); */
  /* border: 6px solid rgba(0 0 0 / 0.05);
  overflow: hidden; */

  /* &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;

    display: block;
    width: 100%;
    height: 6px;
    background-color: var(--color-orange);
  } */
`;

export const Poster = styled.img`
  border-radius: var(--border-radius);
`;

export const Desc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    align-items: initial;
  }
`;

export const MovieTitle = styled(Title)`
  font-size: 36px;
  text-align: center;

  @media screen and (min-width: 768px) {
    max-width: 800px;
    font-size: 34px;
    text-align: left;
  }
`;
