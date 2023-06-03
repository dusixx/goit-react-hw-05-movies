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
    /* max-width: 70vw; */

    object-fit: cover;
    object-position: center;
`;
