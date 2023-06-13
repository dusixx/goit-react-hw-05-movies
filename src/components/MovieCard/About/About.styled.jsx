import styled from '@emotion/styled';
import { Subtitle } from 'styles/shared';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.3;

  @media screen and (min-width: 768px) {
    align-items: initial;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  max-width: 700px;

  @media screen and (min-width: 768px) {
    align-items: initial;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: initial;
    gap: 20px;
  }

  & span {
    text-align: center;
    @media screen and (min-width: 768px) {
      text-align: left;
    }
  }
`;

export const Label = styled.span`
  width: 100px;
  flex-shrink: 0;

  font-weight: bold;
  letter-spacing: -0.2px;
  text-transform: capitalize;

  &::after {
    content: ':';
  }
`;

export const Cast = styled.p`
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

export const Tagline = styled.span`
  font-style: italic;
  font-weight: 400;
  color: gray;
`;

export const Title = styled(Subtitle)`
  margin-top: 35px;
  margin-bottom: 20px;
`;
