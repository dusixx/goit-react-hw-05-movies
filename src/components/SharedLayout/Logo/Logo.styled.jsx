import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { FlexCentered } from 'styles/shared';

export const LogoLink = styled(Link)`
  ${FlexCentered(`gap: 10px`)};
  margin-right: 30px;

  font-weight: 700;
  font-size: 18px;
  letter-spacing: -0.5px;
  color: white;

  @media screen and (min-width: 370px) {
    font-size: 24px;
  }

  @media screen and (min-width: 450px) {
    margin-right: 60px;
  }

  & [data-text] {
    display: none;
    @media screen and (min-width: 320px) {
      display: inline;
    }
  }

  & svg {
    color: var(--color-blue);
  }
`;
