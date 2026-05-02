import { GoBackLink } from '@components/etc';
import { useHideOnScrollDown } from '@hooks';
import { createPortal } from 'react-dom';
import {
  Container,
  InnerContainer,
  Left,
  Middle,
  Right,
} from './Subheader.styled';

const rootModal = document.querySelector('#root-modal');

export const SubHeader = ({
  leftContent = <GoBackLink />,
  rightContent,
  children,
}) => {
  const [visible, onTop] = useHideOnScrollDown();

  return createPortal(
    <Container visible={visible || onTop}>
      <InnerContainer>
        <Left>{leftContent}</Left>
        <Middle>{children}</Middle>
        <Right>{rightContent}</Right>
      </InnerContainer>
    </Container>,
    rootModal
  );
};
