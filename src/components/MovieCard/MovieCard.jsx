import { getCastPreview, getCrewPreview } from '@common';
import { ExpandableContent } from '@components/etc/ExpandableContent/ExpandableContent';
import { ModalImage } from '@components/etc/ModalImage/ModalImage';
import { Spinner } from '@components/etc/Spinner/Spinner';
import { TmdbService } from '@services';
import { SpinnerWrapper } from '@styles';
import { object, string } from 'prop-types';
import { useState } from 'react';
import { About } from './About/About';
import {
  Card,
  CastAndCrewLink,
  Desc,
  Homepage,
  Info,
  MovieTitle,
  OriginalTitle,
  Overview,
  Poster,
  PosterLink,
  Title,
  WellKnownTitle,
} from './MovieCard.styled';
import { Rating } from './Rating/Rating';
import { Reviews } from './Reviews/Reviews';

const srv = new TmdbService();
const POSTER_WIDTH = 500;
const OVERVIEW_MAX_HEIGHT = 100;
const NEW_TAB = { target: '_blank', rel: 'noopener noreferrer' };

export const MovieCard = ({ data = {} }) => {
  const [showModal, setShowModal] = useState(false);
  const [wasLoaded, setWasLoaded] = useState(false);
  const {
    original_title,
    title,
    poster_path,
    credits,
    reviews,
    homepage,
    overview,
    ...restProps
  } = data;

  const handleImageClick = e => {
    e.preventDefault();
    setShowModal(true);
  };

  // title in the original language
  let movieTitle = title || original_title;

  const posterData = {
    original: srv.getImageUrl(poster_path),
    src: srv.getImageUrl(poster_path, POSTER_WIDTH),
    alt: movieTitle,
  };
  const releaseYear = data.release_date?.substring(0, 4);
  const reviewsCount = reviews?.total_results;

  const cast = getCastPreview(credits);
  const crew = getCrewPreview(credits);

  return (
    <Card>
      <Info>
        {/* id(359246) didn't fit */}
        <PosterLink
          to={posterData.original}
          onClick={handleImageClick}
          clickable={poster_path}
        >
          {poster_path && (
            <>
              {!wasLoaded && (
                <SpinnerWrapper>
                  <Spinner spinnerWidth={40} />
                </SpinnerWrapper>
              )}
              <Poster {...posterData} onLoad={() => setWasLoaded(true)} />
            </>
          )}
        </PosterLink>

        {movieTitle && (
          <Desc>
            <MovieTitle>
              <WellKnownTitle>
                {movieTitle}
                {releaseYear && ` (${releaseYear})`}
              </WellKnownTitle>

              {/* id(107406) id(569938) */}
              {movieTitle !== original_title && (
                <OriginalTitle> {original_title}</OriginalTitle>
              )}
            </MovieTitle>

            <Rating reviewsCount={reviewsCount} {...restProps} />

            <About cast={cast} crew={crew} {...restProps} />

            {/* no credits id(874156) */}
            {(cast || crew) && (
              <CastAndCrewLink to="credits">Full cast & crew</CastAndCrewLink>
            )}

            {homepage && (
              <Homepage to={homepage} title={homepage} {...NEW_TAB}>
                Official website
              </Homepage>
            )}

            {overview && (
              <Overview>
                <Title>Overview</Title>
                <ExpandableContent
                  content={overview}
                  maxHeight={OVERVIEW_MAX_HEIGHT}
                />
              </Overview>
            )}
          </Desc>
        )}
      </Info>

      {reviewsCount > 0 && <Reviews data={reviews} />}

      <ModalImage
        visible={showModal}
        onClose={() => setShowModal(false)}
        src={posterData.original}
        alt={posterData.alt}
      />
    </Card>
  );
};

MovieCard.propType = {
  original_title: string,
  title: string,
  poster_path: string,
  credits: object,
  reviews: object,
  homepage: string,
  overview: string,
};
