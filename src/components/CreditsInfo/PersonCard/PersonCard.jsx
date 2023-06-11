import { useState } from 'react';
import Modal from 'components/etc/Modal';
import { Spinner } from 'components/etc/Loader';
import { IconNoPhoto } from 'styles/icons';
import TmdbService from 'services/tmdb/tmdbSrv';
import {
  Thumb,
  ProfileImage,
  Desc,
  Name,
  Job,
  ModalContainer,
  ModalThumb,
  ProfileLink,
  Card,
} from './PersonCard.styled';

const srv = new TmdbService();

const PROFILE_WIDTH = 185;
const ICON_NO_PHOTO_COLOR = 'lightgray';
const ICON_NO_PHOTO_SIZE = 50;
const STR_NA = 'n/a';
const COLOR_MODAL_BG = 'rgb(255 255 255 / 0.7)';

// для crew вместо character доступно поле job
// В остальном для crew и cast все рендерится единообразно

export const PersonCard = ({ profile_path, name, character, job }) => {
  const [showModal, setShowModal] = useState(false);
  const [wasModalImageLoaded, setWasModalImageLoaded] = useState(false);

  const handleImageClick = e => {
    e.preventDefault();

    setShowModal(true);
  };

  const previewPhoto = srv.buildImageUrl(profile_path, PROFILE_WIDTH);
  const originalPhoto = srv.buildImageUrl(profile_path);

  return (
    <Card>
      <ProfileLink
        to={originalPhoto}
        onClick={handleImageClick}
        clickable={profile_path}
      >
        <Thumb>
          {profile_path ? (
            <ProfileImage src={previewPhoto} alt={name} />
          ) : (
            <IconNoPhoto
              size={ICON_NO_PHOTO_SIZE}
              color={ICON_NO_PHOTO_COLOR}
            />
          )}
        </Thumb>
      </ProfileLink>

      {/* Не ссылкой, чтобы копировать текст при желании */}
      <Desc>
        <Name>{name}</Name>
        <Job>{job || character || STR_NA}</Job>
      </Desc>

      <Modal
        onClose={() => setShowModal(false)}
        bgColor={COLOR_MODAL_BG}
        visible={showModal}
      >
        <ModalContainer>
          <Spinner width={40} visible={!wasModalImageLoaded} />
          <ModalThumb>
            <img
              src={originalPhoto}
              alt={name}
              onLoad={() => setWasModalImageLoaded(true)}
            />
          </ModalThumb>
        </ModalContainer>
      </Modal>
    </Card>
  );
};
