import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { LinkBase, LinkPrimary, Subtitle, TransitionBase } from 'styles/shared';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.3;

  @media screen and (min-width: 768px) {
    align-items: initial;
  }
`;

export const Title = styled(Subtitle)`
  margin-top: 35px;
  margin-bottom: 20px;
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

export const CastAndCrewLink = styled(LinkPrimary)`
  display: flex;
  align-items: center;
  width: max-content;

  padding: 5px;
  padding-left: 0;
  margin-top: 25px;

  text-transform: capitalize;
`;

export const Homepage = styled(Link)`
  ${LinkBase};

  display: block;
  width: 150px;
  margin-top: 20px;
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

export const Overview = styled.div`
  text-align: center;
  line-height: 1.5;

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

export const Tagline = styled.span`
  font-style: italic;
  font-weight: 400;
  color: gray;
`;

export const Text = styled.p`
  max-width: 700px;
`;
