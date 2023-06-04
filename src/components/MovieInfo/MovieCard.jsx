import { useState } from 'react';
import TmdbService from 'services/tmdbSrv';
import { Rating } from './Rating/Rating';
import { AboutMovie } from './AboutMovie/AboutMovie';
import Modal from 'components/Modal';
import { Spinner } from 'components/Loader';

import {
  Info,
  PosterLink,
  Poster,
  Desc,
  MovieTitle,
  Container,
  Thumb,
} from './MovieCard.styled';

const srv = new TmdbService();

const POSTER_WIDTH = 500;
const COLOR_MODAL_BG = 'rgb(255 255 255 / 0.7)';

export const MovieCard = ({ data = {} }) => {
  // деструктурируем инфу - делаем так,
  // чтобы не извлекать общие пропы для прокидывания кому надо
  // TODO: сделать нормально
  const { original_title, title, poster_path, credits, reviews, ...restProps } =
    data;

  const [showModal, setShowModal] = useState(false);
  const [wasModalImageLoaded, setWasModalImageLoaded] = useState(false);

  const handleImageClick = e => {
    e.preventDefault();
    setShowModal(true);
  };

  // имя фильма
  let movieTitle = original_title || title;

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
    <>
      <Info>
        <PosterLink to={posterData.original} onClick={handleImageClick}>
          <Poster {...posterData} />
        </PosterLink>

        {movieTitle && (
          <Desc>
            <MovieTitle>
              {movieTitle}
              {releaseYear && ` (${releaseYear})`}
            </MovieTitle>

            <Rating reviewsCount={reviewsCount} {...restProps} />

            <AboutMovie credits={credits} {...restProps} />
          </Desc>
        )}
      </Info>

      <Modal
        onClose={() => setShowModal(false)}
        bgColor={COLOR_MODAL_BG}
        visible={showModal}
      >
        <Container>
          <Spinner width={40} visible={!wasModalImageLoaded} />
          <Thumb>
            <img
              src={posterData.original}
              alt={posterData.alt}
              onLoad={() => setWasModalImageLoaded(true)}
            />
          </Thumb>
        </Container>
      </Modal>
    </>
  );
};
