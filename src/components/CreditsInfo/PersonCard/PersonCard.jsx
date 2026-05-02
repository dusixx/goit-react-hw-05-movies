import { NOT_AVAILABLE } from '@common';
import { ModalImage, Spinner } from '@components/etc';
import { TmdbService } from '@services';
import { IconNoPhoto, SpinnerWrapper } from '@styles';
import { string } from 'prop-types';
import { useState } from 'react';
import {
  Card,
  Desc,
  Job,
  Name,
  ProfileImage,
  ProfileLink,
  Thumb,
} from './PersonCard.styled';

const srv = new TmdbService();

const PROFILE_WIDTH = 185;
const ICON_NO_PHOTO_COLOR = 'lightgray';
const ICON_NO_PHOTO_SIZE = 50;

// NOTE: for crew, the job field is available instead of character
export const PersonCard = ({
  name,
  original_name,
  profile_path,
  character,
  job,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [imgWasLoaded, setImgWasLoaded] = useState(false);

  const handleImageClick = e => {
    e.preventDefault();
    setShowModal(true);
  };

  const photoPreview = srv.getImageUrl(profile_path, PROFILE_WIDTH);
  const photoOriginal = srv.getImageUrl(profile_path);
  const personName = name || original_name;

  const shouldRender = personName || profile_path || character || job;
  if (!shouldRender) {
    return null;
  }

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
                </SpinnerWrapper>
              )}
              <ProfileImage
                src={photoPreview}
                alt={personName}
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
      <Desc>
        <Name>{personName}</Name>
        <Job>{job || character || NOT_AVAILABLE}</Job>
      </Desc>

      <ModalImage
        visible={showModal}
        onClose={() => setShowModal(false)}
        src={photoOriginal}
        alt={personName}
      />
    </Card>
  );
};

PersonCard.propType = {
  name: string,
  original_name: string,
  profile_path: string,
  character: string,
  job: string,
};
