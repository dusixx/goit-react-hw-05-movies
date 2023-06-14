import { useState } from 'react';
import { Rating } from './Rating/Rating';
import { About } from './About/About';
import { Reviews } from './Reviews/Reviews';
import TmdbService from 'services/tmdb/tmdbSrv';
import { getCrewPreview, getCastPreview } from 'services/tmdb/helpers';
import { ModalImage } from 'components/etc/ModalImage/ModalImage';

import {
  Card,
  Info,
  PosterLink,
  Poster,
  Desc,
  MovieTitle,
  OriginalTitle,
  WellKnownTitle,
  CastAndCrewLink,
  Title,
  Text,
  Homepage,
  Overview,
} from './MovieCard.styled';
import { ExpandableFormattedContent } from 'components/etc/ExpandableFormattedContent';

const srv = new TmdbService();

const POSTER_WIDTH = 500;
const NEW_TAB = { target: '_blank', rel: 'noopener noreferrer' };

//
// Movie card
//

export const MovieCard = ({ data = {} }) => {
  // деструктурируем инфу тут,
  // чтобы не извлекать общие пропы для прокидывания кому надо
  // TODO: сделать нормально
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

  const [showModal, setShowModal] = useState(false);

  const handleImageClick = (e, path) => {
    e.preventDefault();
    setShowModal(true);
  };

  // original_title - название на языке оригинала (например, китайский)
  let movieTitle = title || original_title;

  // постер
  const posterData = {
    original: srv.getImageUrl(poster_path),
    src: srv.getImageUrl(poster_path, POSTER_WIDTH),
    alt: movieTitle,
  };

  // год релиза
  const releaseYear = data.release_date?.substring(0, 4);
  const reviewsCount = reviews?.total_results;

  const cast = getCastPreview(credits);
  const crew = getCrewPreview(credits);

  return (
    <Card>
      <Info>
        {/* !! id(359246) изображение не втиснуто */}
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

            <About cast={cast} crew={crew} {...restProps} />

            {/* Пример без credits id(874156) */}
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
                {/* <Text>{overview}</Text> */}
                <ExpandableFormattedContent
                  content={overview}
                  collapsedHeight={100}
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
