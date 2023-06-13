import { useState } from 'react';
import Modal from 'components/etc/Modal';
import { Spinner } from 'components/etc/Loader';
import { ModalContainer, ModalThumb } from './ModalImage.styled';

const COLOR_MODAL_BG = 'rgb(255 255 255 / 0.7)';

export const ModalImage = ({ src, alt, visible, onClose }) => {
  const [wasModalImageLoaded, setWasModalImageLoaded] = useState(false);

  return (
    <Modal onClose={onClose} bgColor={COLOR_MODAL_BG} visible={visible}>
      <ModalContainer>
        <Spinner width={40} visible={!wasModalImageLoaded} />
        <ModalThumb>
          <img
            src={src}
            alt={alt}
            onLoad={() => setWasModalImageLoaded(true)}
          />
        </ModalThumb>
      </ModalContainer>
    </Modal>
  );
};
