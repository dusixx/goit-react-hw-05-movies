import styled from '@emotion/styled';
import { FlexCentered, TransitionBase } from 'styles/shared';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  line-height: 1.2;
`;

export const ProfileLink = styled(Link)`
  position: relative;
  /* height: 100%; */
`;

export const Thumb = styled.div`
  ${FlexCentered()};
  height: calc(150px * 1.5);
  width: 100%;
`;

export const Desc = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 5px;

  width: 100%;
  height: 100%;

  padding: 7px;
  padding-bottom: 10px;
  color: var(--color-black);

  word-wrap: break-word;
  text-align: center;
  background-color: #e4e4e4;
`;

export const Name = styled.b`
  text-transform: capitalize;
`;

export const Job = styled.span`
  font-size: 12px;
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${TransitionBase('filter')};

  /* Сюда вместо ссылки - чтобы не cработывало для заглушек */
  &:hover,
  &:focus-visible {
    filter: brightness(1.1);
  }
`;

export const ModalContainer = styled.div`
  position: relative;
  ${FlexCentered()};

  & :nth-of-type() {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const ModalThumb = styled.div`
  position: absolute;

  & img {
    height: 90vh;
    width: auto;
    /* чтобы оставалось куда кликнуть в бекдроп */
    max-width: 70vw;
    object-fit: contain;
    object-position: center;
  }
`;
