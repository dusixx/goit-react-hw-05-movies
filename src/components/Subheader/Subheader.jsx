import { createPortal } from 'react-dom';
import { GoBackLink } from 'components/etc/GoBackLink/GoBackLink';
import { useHideOnScrollDown } from '../../hooks/useHideOnScrollDown';
import {
  Container,
  Left,
  Middle,
  Right,
  InnerContainer,
} from './SubHeader.styled';

const rootModal = document.querySelector('#root-modal');

export const SubHeader = ({
  leftContent = <GoBackLink />,
  rightContent,
  children,
}) => {
  const [visible, onTop] = useHideOnScrollDown();

  return createPortal(
    <Container
      visible={visible || onTop} /* style={{ opacity: onTop || 0.8 }} */
    >
      <InnerContainer>
        <Left>{leftContent}</Left>
        <Middle>{children}</Middle>
        <Right>{rightContent}</Right>
      </InnerContainer>
    </Container>,
    rootModal
  );
};
