import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { isStr, calcCSSValue } from 'utils';

// Utils

/**
 * @param {string|object} cssProps
 * @returns
 */
export const FlexCentered = cssProps => css`
  display: flex;
  align-items: center;
  justify-content: center;
  ${isStr(cssProps) ? css(cssProps) : { ...cssProps }}
`;

export const Disabled = css`
  pointer-events: none;
  filter: grayscale(1);
  opacity: 0.4;
`;

// Button

export const ButtonBase = styled.button`
  ${FlexCentered(`gap: 5px`)}
  padding: 0;

  color: currentColor;
  background-color: transparent;
  border: none;
  cursor: pointer;

  transition-timing-function: var(--trans-func);
  transition-duration: var(--trans-duration);

  &[disabled],
  &[disabled='true'] {
    ${Disabled}
  }
`;

export const ButtonPrimary = styled(ButtonBase)`
  padding-left: ${({ paddingSide }) => calcCSSValue(paddingSide) || '12px'};
  padding-right: ${({ paddingSide }) => calcCSSValue(paddingSide) || '12px'};

  padding-top: 7px;
  padding-bottom: 7px;

  font-size: 14px;
  color: white;

  background-color: var(--color-accent);
  border-radius: var(--border-radius);
  transition-property: background-color;

  &:focus-visible,
  &:hover {
    background-color: var(--color-blue-light);
  }
`;

export const LinkBase = css`
  position: relative;
  color: currentColor;
  text-decoration: none;

  transition-property: color;
  transition-duration: var(--trans-duration);
  transition-timing-function: var(--trans-func);
`;

export const Title = styled.h2`
  font-family: Arial Black;
  line-height: 1.1;
  letter-spacing: -2px;
  word-break: keep-all;
`;

/**
 * @param {string} names - список свойств через пробел или запятую
 * @returns
 */
export const TransitionBase = names => {
  const list =
    isStr(names) && names ? names.split(/[,\s]/).join(', ') : 'unset';

  return css`
    transition-property: ${list};
    transition-duration: var(--trans-duration);
    transition-timing-function: var(--trans-func);
  `;
};
