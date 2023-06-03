import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { LinkBase, TransitionBase } from 'styles/shared';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    align-items: initial;
  }
`;

export const Title = styled.h3`
  margin-bottom: 20px;
  text-transform: uppercase;
  font-family: Arial Black;
  font-size: 16px;
  letter-spacing: -0.5px;
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
  }

  & span {
    text-align: center;
    @media screen and (min-width: 768px) {
      text-align: left;
    }
  }

  & span:first-of-type {
    /* color: #858585; */
    font-weight: bold;
    letter-spacing: -0.2px;
    width: 100px;
    flex-shrink: 0;
  }
`;

export const Homepage = styled(Link)`
  ${LinkBase};

  display: block;
  width: 150px;
  margin-top: 30px;
  padding: 10px;

  text-transform: capitalize;
  text-align: center;

  color: var(--color-blue);
  border: 2px solid var(--color-blue);
  border-radius: var(--border-radius);

  ${TransitionBase('color background-color')};

  &:hover,
  &:focus-visible {
    background-color: var(--color-blue);
    color: white;
  }
`;

export const Text = styled.p`
  max-width: 700px;
`;

export const Overview = styled.div`
  margin-top: 30px;
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

export const CastList = styled.p`
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: left;
  }
  & a {
    color: var(--color-blue);
  }
`;
