import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Title } from 'styles/shared';
import { FlexCentered } from 'styles/shared';

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

export const PosterLink = styled(Link)`
  position: relative;
  flex-shrink: 0;

  @media screen and (min-width: 768px) {
    width: 330px;
  }
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
  margin-bottom: 30px;
  font-size: 38px;
  text-align: center;

  @media screen and (min-width: 768px) {
    max-width: 700px;
    text-align: left;
  }
`;

export const Container = styled.div`
  position: relative;
  ${FlexCentered()};

  & :nth-of-type() {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const Thumb = styled.div`
  position: absolute;

  & img {
    height: 95vh;
    width: auto;
    /* чтобы оставалось куда кликнуть в бекдроп */
    max-width:80vw;

    object-fit: cover;
    object-position: center;
`;
