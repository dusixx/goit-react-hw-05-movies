import { useState } from 'react';
import { IconNoPhoto } from 'styles/icons';
import TmdbService from 'services/tmdb/tmdbSrv';
import { ModalImage } from 'components/etc/ModalImage/ModalImage';
import { Spinner } from 'components/etc/Loader';
import { SpinnerWrapper } from 'styles/shared';

import {
  Thumb,
  ProfileImage,
  Desc,
  Name,
  Job,
  ProfileLink,
  Card,
} from './PersonCard.styled';

const srv = new TmdbService();

const PROFILE_WIDTH = 185;
const ICON_NO_PHOTO_COLOR = 'lightgray';
const ICON_NO_PHOTO_SIZE = 50;
const STR_NA = 'n/a';

// для crew вместо character доступно поле job
// В остальном для crew и cast все рендерится единообразно

export const PersonCard = ({ profile_path, name, character, job }) => {
  const [showModal, setShowModal] = useState(false);
  const [imgWasLoaded, setImgWasLoaded] = useState(false);

  const handleImageClick = e => {
    e.preventDefault();
    setShowModal(true);
  };

  const photoPreview = srv.getImageUrl(profile_path, PROFILE_WIDTH);
  const photoOriginal = srv.getImageUrl(profile_path);

  return (
    <Card>
      <ProfileLink
        to={photoOriginal}
        onClick={handleImageClick}
        clickable={profile_path}
      >
        <Thumb>
          {profile_path && (
            <>
              {!imgWasLoaded && (
                <SpinnerWrapper>
                  <Spinner spinnerWidth={30} />
                  {/* <SpinnerCircle size={25} /> */}
                </SpinnerWrapper>
              )}
              <ProfileImage
                src={photoPreview}
                alt={name}
                onLoad={() => setImgWasLoaded(true)}
              />
            </>
          )}

          {!profile_path && (
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

      <ModalImage
        visible={showModal}
        onClose={() => setShowModal(false)}
        src={photoOriginal}
        alt={name}
      />
    </Card>
  );
};
