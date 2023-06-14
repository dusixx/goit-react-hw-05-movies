import styled from '@emotion/styled';
import { ButtonPrimary, FlexCentered, TransitionBase } from 'styles/shared';
import { calcCSSValue } from 'utils';

export const Container = styled.div`
  height: ${({ height }) => calcCSSValue(height) || '100%'};
  width: ${({ width }) => calcCSSValue(width) || '100%'};
  margin: 0 auto 0 auto;

  border: 1px solid rgb(var(--color-blue-rgb), 0.5);
  border-radius: var(--border-radius);
  overflow: hidden;

  ${TransitionBase('box-shadow border-color')};

  &:focus-within {
    box-shadow: 0 0 0 0.3rem rgb(var(--color-blue-rgb), 0.2);
    border-color: rgb(var(--color-blue-rgb), 0.7);
  }

  @media screen and (min-width: 768px) {
    width: 70%;
  }
`;

export const SearchForm = styled.form`
  ${FlexCentered()};

  height: 100%;
  width: 100%;
  border-radius: unset;
`;

export const SearchBtn = styled(ButtonPrimary)`
  height: 100%;
  padding: 8px 15px 8px 15px;
  border-radius: unset;
  background-color: var(--color-blue);
`;
