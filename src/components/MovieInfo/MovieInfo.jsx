import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TmdbService from 'services/tmdbSrv';
import { Rating } from './Rating/Rating';
import { AboutMovie } from './AboutMovie/AboutMovie';
import { showError } from 'utils';
import Modal from 'components/Modal';
import { Spinner } from 'components/Loader';
import Loader from 'components/Loader';

import {
  Info,
  PosterLink,
  Poster,
  Desc,
  MovieTitle,
  Container,
  Thumb,
} from './MovieInfo.styled';

const srv = new TmdbService();

const POSTER_WIDTH = 500;
const COLOR_MODAL_BG = 'rgb(255 255 255 / 0.7)';

export const MovieInfo = ({ value = {} }) => {
  // деструктурируем инфу
  const { original_title, title, poster_path, ...restProps } = value;

  const [reviews, setReviews] = useState(null);
  const [credits, setCredits] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [wasModalImageLoaded, setWasModalImageLoaded] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    srv
      .getMovieReviews(movieId)
      .then(data => {
        setReviews(data);
      })
      .catch(showError);

    srv
      .getMovieCredits(movieId)
      .then(data => {
        setCredits(data);
      })
      .catch(showError);
  }, [movieId]);

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
  const releaseYear = value.release_date?.substring(0, 4);
  const reviewsCount = reviews?.total_results;

  return (
    <>
      {/* <Loader visible={!credits || !reviews} /> */}

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
