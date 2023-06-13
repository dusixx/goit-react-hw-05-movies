import styled from '@emotion/styled';
import { LinkPrimary } from 'styles/shared';

export const LinkStyled = styled(LinkPrimary)`
  display: inline-flex;
  align-items: center;
  padding: 5px 5px 5px 0;

  color: var(--color-black);

  &:hover,
  &:focus-visible {
    color: var(--color-blue);
  }
`;
