import styled from '@emotion/styled';
import { ButtonSecondary, FlexCentered } from 'styles/shared';
import { calcCSSValue } from 'utils';

export const Button = styled(ButtonSecondary)`
  ${FlexCentered()};

  margin-left: ${({ centered }) => (centered ? 'auto' : 0)};
  margin-right: ${({ centered }) => (centered ? 'auto' : 0)};

  width: ${({ width }) => calcCSSValue(width)};
  height: ${({ height }) => calcCSSValue(height)};

  /*
    Пока кнопка со спинером - не убираем цвето фона
    Иначе, спиннер сольется с фоном страницы
    Можно сдлеать, чтобы цвет спиннера менялся на прозрачном фоне
  */
  background-color: ${({ isLoading }) =>
    isLoading ? 'var(--color-blue)' : 'transparent'};
`;

export const Spinner = styled.span`
  display: inline-block;
  width: ${({ size }) => calcCSSValue(size)};
  height: ${({ size }) => calcCSSValue(size)};

  border: 2px solid #fff;
  border-bottom-color: transparent;
  border-radius: 50%;

  animation: rotation 0.7s linear infinite;
  opacity: 0.6;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
