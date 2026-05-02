import { BodyScrollLock } from '@components/etc/BodyScrollLock/BodyScrollLock';
import { bool, func, string } from 'prop-types';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Transition } from 'react-transition-group';
import { Backdrop, Container } from './Modal.styled';
import { getBackdropStyle, TRANSITION_DURATION } from './Modal.utils';

const rootModal = document.querySelector('#root-modal');

export const Modal = ({
  children,
  bgColor,
  onClose,
  bodyScrollLock = true,
  visible,
}) => {
  const backdropRef = useRef(null);

  useEffect(() => {
    const handleKeydown = ({ code }) =>
      code === 'Escape' && onClose && onClose();

    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [onClose]);

  const handleBackdropClick = ({ currentTarget, target }) =>
    currentTarget === target && onClose && onClose();

  return createPortal(
    <Transition
      mountOnEnter
      unmountOnExit
      timeout={TRANSITION_DURATION}
      nodeRef={backdropRef}
      in={visible}
    >
      {state => (
        <Backdrop
          ref={backdropRef}
          onClick={handleBackdropClick}
          bgColor={bgColor}
          style={getBackdropStyle(state)}
        >
          {bodyScrollLock && <BodyScrollLock />}
          <Container>{children}</Container>
        </Backdrop>
      )}
    </Transition>,
    rootModal
  );
};

Modal.propTypes = {
  bgColor: string,
  onClose: func,
  bodyScrollLock: bool,
  visible: bool,
};
