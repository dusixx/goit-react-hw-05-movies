import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { FlexCentered } from 'styles/shared';
import { IconMovieLogo } from 'styles/icons';

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
`;

export const LogoImage = styled(IconMovieLogo)`
  width: 30px;
  height: 30px;
  color: var(--color-blue);

  @media screen and (min-width: 320px) and (max-width: 370px) {
    width: 25px;
    height: 25px;
  }
`;

export const LogoText = styled.span`
  display: none;

  @media screen and (min-width: 320px) {
    display: inline;
  }
`;
