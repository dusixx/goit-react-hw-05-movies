import { useState } from 'react';
import { Rating } from './Rating/Rating';
import { About } from './About/About';
import Modal from 'components/etc/Modal';
import { Spinner } from 'components/etc/Loader';
import { ReviewList } from './Reviews/ReviewsList';
import TmdbService from 'services/tmdb/tmdbSrv';

import {
  Card,
  Info,
  PosterLink,
  Poster,
  Desc,
  MovieTitle,
  ModalContainer,
  Thumb,
  OriginalTitle,
  WellKnownTitle,
} from './MovieCard.styled';

const srv = new TmdbService();

const POSTER_WIDTH = 500;
const COLOR_MODAL_BG = 'rgb(255 255 255 / 0.7)';

//
// Movie card
//

export const MovieCard = ({ data = {} }) => {
  // деструктурируем инфу тут,
  // чтобы не извлекать общие пропы для прокидывания кому надо
  // TODO: сделать нормально
  const { original_title, title, poster_path, credits, reviews, ...restProps } =
    data;

  const [showModal, setShowModal] = useState(false);
  const [wasModalImageLoaded, setWasModalImageLoaded] = useState(false);

  const handleImageClick = (e, path) => {
    e.preventDefault();
    setShowModal(true);
  };

  // original_title - название на языке оригинала (например, китайский)
  let movieTitle = title || original_title;

  // постер
  const posterData = {
    original: srv.buildImageUrl(poster_path),
    src: srv.buildImageUrl(poster_path, POSTER_WIDTH),
    alt: movieTitle,
  };

  // год релиза
  const releaseYear = data.release_date?.substring(0, 4);
  const reviewsCount = reviews?.total_results;

  return (
    <Card>
      <Info>
        <PosterLink
          to={posterData.original}
          onClick={handleImageClick}
          clickable={poster_path}
        >
          {poster_path && <Poster {...posterData} />}
        </PosterLink>

        {movieTitle && (
          <Desc>
            <MovieTitle>
              <WellKnownTitle>
                {movieTitle}
                {releaseYear && ` (${releaseYear})`}
              </WellKnownTitle>

              {/* Например, id(107406) id(569938) */}
              {movieTitle !== original_title && (
                <OriginalTitle> {original_title}</OriginalTitle>
              )}
            </MovieTitle>

            <Rating reviewsCount={reviewsCount} {...restProps} />

            <About credits={credits} {...restProps} />
          </Desc>
        )}
      </Info>

      {reviewsCount > 0 && <ReviewList data={reviews} />}

      <Modal
        onClose={() => setShowModal(false)}
        bgColor={COLOR_MODAL_BG}
        visible={showModal}
      >
        <ModalContainer>
          <Spinner width={40} visible={!wasModalImageLoaded} />
          <Thumb>
            <img
              src={posterData.original}
              alt={posterData.alt}
              onLoad={() => setWasModalImageLoaded(true)}
            />
          </Thumb>
        </ModalContainer>
      </Modal>
    </Card>
  );
};
