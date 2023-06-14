import styled from '@emotion/styled';
import { ButtonLink, LinkBase } from 'styles/shared';
import { calcCSSValue } from 'utils';

// pre чтобы сохранить оригинальное форматирование
export const Content = styled.pre`
  font-family: inherit;
  line-height: 1.5;
  white-space: pre-wrap;
  overflow: hidden;
  max-height: ${({ maxHeight }) => calcCSSValue(maxHeight)};

  /* Линк внутри поста с рецензией */
  & a {
    ${LinkBase};
    color: var(--color-blue);

    &:hover,
    &:focus-visible {
      color: var(--color-orange);
    }
  }
`;

export const Expander = styled(ButtonLink)`
  display: block;
  margin: 10px auto 0 auto;
  padding: 10px 10px 10px 0;

  font-size: 12px;
  font-weight: bold;
  letter-spacing: -0.2px;
  color: #a7a7a7;

  @media screen and (min-width: 768px) {
    margin: 10px 0 0 0;
  }
`;
