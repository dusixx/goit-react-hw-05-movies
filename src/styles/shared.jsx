import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { isStr, calcCSSValue } from 'utils';

// utils

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

/**
 * @param {string} propNames - список свойств через пробел или запятую
 * @returns
 */
export const TransitionBase = propNames => {
  const list =
    isStr(propNames) && propNames
      ? propNames.split(/[,\s]/).join(', ')
      : 'unset';

  return css`
    transition-property: ${list};
    transition-duration: var(--trans-duration);
    transition-timing-function: var(--trans-func);
  `;
};

// button

export const ButtonBase = styled.button`
  ${FlexCentered(`gap: 5px`)}
  padding: 0;

  color: currentColor;
  background-color: transparent;
  border: none;
  cursor: pointer;

  ${TransitionBase()};

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

// link

export const LinkBase = css`
  position: relative;
  color: currentColor;
  text-decoration: none;

  ${TransitionBase('color')};
`;

export const LinkPrimary = styled(Link)`
  display: inline-block;
  ${TransitionBase('color')};

  font-size: inherit;
  color: var(--color-blue);

  &:hover,
  &:focus-visible {
    color: var(--color-orange);
  }
`;

// typography

export const Title = styled.h2`
  font-family: Arial Black;
  line-height: 1.1;
  letter-spacing: -2px;
`;

export const PageTitle = styled(Title)`
  font-size: 46px;
  text-transform: capitalize;
  text-align: center;
`;

export const PageSubtitle = styled.h3`
  font-size: 20px;
  line-height: 1;
  letter-spacing: -0.5px;
  text-transform: capitalize;
  text-align: center;
  color: rgb(0 0 0 / 0.3);
`;
