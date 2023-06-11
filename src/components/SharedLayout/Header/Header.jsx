import { useEffect, useState, useRef } from 'react';
import { StyledHeader } from './Header.styled';
import throttle from 'lodash.throttle';

const THROTTLE_DELAY = 150;

export const Header = ({ children }) => {
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

  return (
    <StyledHeader visible={onTop || visible} style={{ opacity: onTop || 0.9 }}>
      {children}
    </StyledHeader>
  );
};
