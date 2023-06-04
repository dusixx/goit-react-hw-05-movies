import { useState } from 'react';
import Modal from 'components/Modal';
import { Spinner } from 'components/Loader';
import { FiCameraOff as IconNoPhoto } from 'react-icons/fi';
import TmdbService from 'services/tmdbSrv';
import {
  Thumb,
  ProfileImage,
  Desc,
  Name,
  Character,
  ModalContainer,
  ModalThumb,
  ProfileLink,
} from './PersonCard.styled';

const srv = new TmdbService();
const PROFILE_WIDTH = 185;
const COLOR_MODAL_BG = 'rgb(255 255 255 / 0.7)';

export const PersonCard = ({ profile_path, name, character, job }) => {
  const [showModal, setShowModal] = useState(false);
  const [wasModalImageLoaded, setWasModalImageLoaded] = useState(false);

  const handleImageClick = (e, path) => {
    e.preventDefault();
    if (!path) return;
    setShowModal(true);
  };

  return (
    <>
      <ProfileLink
        to={srv.buildImageUrl(profile_path)}
        onClick={e => handleImageClick(e, profile_path)}
      >
        <Thumb>
          {profile_path ? (
            <ProfileImage
              src={srv.buildImageUrl(profile_path, PROFILE_WIDTH)}
              alt={name}
            ></ProfileImage>
          ) : (
            <IconNoPhoto size={50} color="lightgray" />
          )}
        </Thumb>
        <Desc>
          <Name>{name}</Name>
          <Character>{job || character}</Character>
        </Desc>
      </ProfileLink>

      <Modal
        onClose={() => setShowModal(false)}
        bgColor={COLOR_MODAL_BG}
        visible={showModal}
      >
        <ModalContainer>
          <Spinner width={40} visible={!wasModalImageLoaded} />
          <ModalThumb>
            <img
              src={srv.buildImageUrl(profile_path)}
              alt={name}
              onLoad={() => setWasModalImageLoaded(true)}
            />
          </ModalThumb>
        </ModalContainer>
      </Modal>
    </>
  );
};
