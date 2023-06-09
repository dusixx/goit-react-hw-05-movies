import styled from '@emotion/styled';
import { FlexCentered, TransitionBase } from 'styles/shared';
import { Link } from 'react-router-dom';

export const Card = styled.div`
  line-height: 1.2;
`;

export const ProfileLink = styled(Link)`
  position: relative;
  /* height: 100%; */

  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'auto')};
  pointer-events: ${({ clickable }) => (clickable ? 'all' : 'none')};
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
  gap: 2px;

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
  ${TransitionBase('filter')};

  width: 100%;
  height: 100%;
  object-fit: cover;

  /* Сюда вместо ссылки - чтобы не cработывало для заглушек */
  &:hover,
  &:focus-visible {
    filter: brightness(1.1);
  }
`;
