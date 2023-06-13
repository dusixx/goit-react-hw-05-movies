import { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import throttle from 'lodash.throttle';
import { GoBackLink } from 'components/etc/GoBackLink/GoBackLink';
import {
  Container,
  LeftColumn,
  MiddleColumn,
  RightColumn,
  InnerContainer,
} from './SubHeader.styled';

const THROTTLE_DELAY = 150;
const rootModal = document.querySelector('#root-modal');

export const SubHeader = ({
  leftContent = <GoBackLink />,
  rightContent,
  children,
}) => {
  const [visible, setVisible] = useState(true);
  const [onTop, setOnTop] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleDocumentScroll = () => {
      setOnTop(window.scrollY === 0);
      setVisible(lastScrollY.current > window.scrollY);
      lastScrollY.current = window.scrollY;
    };

    document.addEventListener(
      'scroll',
      throttle(handleDocumentScroll, THROTTLE_DELAY)
    );
  }, []);

  return createPortal(
    <Container visible={onTop || visible}>
      <InnerContainer>
        <LeftColumn>{leftContent}</LeftColumn>
        <MiddleColumn>{children}</MiddleColumn>
        <RightColumn>{rightContent}</RightColumn>
      </InnerContainer>
    </Container>,
    rootModal
  );
};
