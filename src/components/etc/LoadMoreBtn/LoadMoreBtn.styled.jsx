import { calcCSSValue } from '@common';
import styled from '@emotion/styled';
import { ButtonSecondary, FlexCentered } from '@styles';

export const Button = styled(ButtonSecondary)`
  ${FlexCentered()};

  margin-left: ${({ centered }) => (centered ? 'auto' : 0)};
  margin-right: ${({ centered }) => (centered ? 'auto' : 0)};

  width: ${({ width }) => calcCSSValue(width)};
  height: ${({ height }) => calcCSSValue(height)};
  /* 
  While the button has a spinner, don't remove the background color.
  Otherwise, the spinner will blend into the page background.
  You can make the spinner's color change on a transparent background. 
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
