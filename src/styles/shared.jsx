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

  font-size: inherit;
  font-family: inherit;
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
  padding: 10px;
  padding-left: ${({ paddingSide }) => calcCSSValue(paddingSide) || '20px'};
  padding-right: ${({ paddingSide }) => calcCSSValue(paddingSide) || '20px'};

  color: white;
  border-radius: var(--border-radius);
  background-color: var(--color-blue);

  transition-property: background-color;

  &:focus-visible,
  &:hover {
    background-color: var(--color-blue-light);
  }
`;

export const ButtonSecondary = styled(ButtonPrimary)`
  color: var(--color-blue);
  background-color: transparent;
  border: 2px solid var(--color-blue);

  transition-property: color, background-color;

  &:focus-visible,
  &:hover {
    background-color: var(--color-blue);
    color: white;
  }
`;

export const ButtonLink = styled(ButtonBase)`
  display: inline-block;
  ${TransitionBase('color')};

  font-size: inherit;
  color: var(--color-blue);

  &:hover,
  &:focus-visible {
    color: var(--color-orange);
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

export const Subtitle = styled.h3`
  text-transform: uppercase;
  font-family: Arial Black;
  font-size: 16px;
  letter-spacing: -0.5px;
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
