import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { isStr, calcCSSValue, getList } from 'utils';
import { bgiMovieLogo } from './icons';

// utils

export const FlexCentered = cssProps => css`
  display: flex;
  align-items: center;
  justify-content: center;
  ${isStr(cssProps) ? css(cssProps) : { ...cssProps }}
`;

export const TransitionBase = (propNames, duration, func) => {
  const dur = parseFloat(duration);
  const tf = isStr(func) && func ? func : `var(--trans-func)`;

  return css`
    transition-property: ${getList(propNames, ',')};
    transition-duration: ${dur ? `${dur}ms` : `var(--trans-duration)`};
    transition-timing-function: ${tf};
  `;
};

export const Disabled = css`
  pointer-events: none;
  opacity: 0.5;
`;

export const NoPosterBg = css`
  /* Где-то перебивается - без !important не работает */
  background-repeat: no-repeat !important;
  background-position: center !important;
  background: linear-gradient(0deg, #e0e0e0 0, transparent),
    linear-gradient(180deg, #e0e0e0 0, transparent), url(${bgiMovieLogo});
`;

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
  padding: 10px 20px 10px 20px;
  padding-left: ${({ paddingSide }) => calcCSSValue(paddingSide)};
  padding-right: ${({ paddingSide }) => calcCSSValue(paddingSide)};

  color: white;
  border-radius: var(--border-radius);
  background-color: var(--color-blue);
  transition-property: filter;

  &:focus-visible,
  &:hover {
    filter: brightness(1.1);
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

export const LinkButton = styled(Link)`
  padding: 10px 20px 10px 20px;

  color: var(--color-blue);
  background-color: transparent;

  border: 2px solid var(--color-blue);
  border-radius: var(--border-radius);
  ${TransitionBase('color, background-color')};

  &:focus-visible,
  &:hover {
    background-color: var(--color-blue);
    color: white;
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

export const PageContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 0 auto;
  padding: 0 20px 0 20px;
  padding-bottom: 40px;
  padding-top: 50px;
`;
