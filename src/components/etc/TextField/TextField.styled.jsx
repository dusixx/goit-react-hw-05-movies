import styled from '@emotion/styled';
import { ButtonBase, TransitionBase } from 'styles/shared';

export const Field = styled.label`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  width: 100%;
  height: ${({ height }) => height || '100%'};
  color: var(--color-text);
`;

export const Input = styled.input`
  height: 100%;
  width: 100%;
  padding: 0 40px 0 20px;

  font-family: inherit;
  font-size: inherit;
  background-color: white;

  border: unset;
  outline: none;

  ${TransitionBase()};

  &::placeholder {
    opacity: 0.6;
    text-transform: capitalize;
  }
`;

export const ClearBtn = styled(ButtonBase)`
  position: absolute;
  top: 50%;
  right: 10px;

  height: 60%;
  padding: 3px;

  color: gray;
  transform: translateY(-50%);
  transition-property: color;

  &:focus-visible,
  &:hover {
    color: var(--color-black);
  }
`;
