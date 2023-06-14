import { useState } from 'react';
import Modal from './Modal/Modal';
import { Spinner } from '../Spinner';
import { ModalContainer, ModalThumb } from './ModalImage.styled';
import { string, bool, func } from 'prop-types';

const COLOR_MODAL_BG = 'rgb(255 255 255 / 0.7)';

//
// ModalImage
//

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

ModalImage.propType = {
  src: string,
  alt: string,
  visible: bool,
  onClose: func,
};
