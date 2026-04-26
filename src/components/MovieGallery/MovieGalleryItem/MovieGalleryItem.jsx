import { showError } from '@common';
import { NOT_AVAILABLE } from '@common/constants.js';
import { Spinner } from '@components/etc/Spinner/Spinner';
import { TmdbService } from '@services';
import { SpinnerWrapper } from '@styles';
import { arrayOf, func, number, string } from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import {
  AltTitle,
  Genres,
  MovieLink,
  Overlay,
  Overview,
  Poster,
  Rating,
  Title,
} from './MovieGalleryItem.styled';

const srv = new TmdbService();

const DEF_POSTER_WIDTH = 500;

export const MovieGalleryItem = ({
  id,
  title,
  poster_path,
  vote_average,
  vote_count,
  overview,
  release_date,
  genre_ids,
  onLoad,
}) => {
  const [wasLoaded, setWasLoaded] = useState(false);
  const [genres, setGenres] = useState(null);
  const imgRef = useRef(null);
  const onLoadRef = useRef(onLoad);

  useEffect(() => {
    srv
      .getGenres(genre_ids)
      .then(res => setGenres(res.join(', ')))
      .catch(showError);
  }, [genre_ids, id, wasLoaded]);

  // onLoad
  useEffect(() => {
    if (wasLoaded || !poster_path) {
      onLoadRef.current && onLoadRef.current(imgRef.current);
    }
  }, [wasLoaded, poster_path]);

  const rating = vote_average ? vote_average.toFixed(1) : NOT_AVAILABLE;
  const releaseYear = release_date?.substring(0, 4);

  return (
    <>
      {(wasLoaded || !poster_path) && (
        <Rating title={`Votes: ${vote_count}`}>{rating}</Rating>
      )}

      <MovieLink to={`/movies/${id}`}>
        {!poster_path && (
          <AltTitle>
            {title}
            {releaseYear && ` (${releaseYear})`}
          </AltTitle>
        )}

        {poster_path && (
          <>
            {!wasLoaded && (
              <SpinnerWrapper>
                <Spinner spinnerWidth={35} />
              </SpinnerWrapper>
            )}
            <Poster
              ref={imgRef}
              src={srv.getImageUrl(poster_path, DEF_POSTER_WIDTH)}
              alt={title}
              onLoad={() => setWasLoaded(true)}
            />
          </>
        )}

        <Overlay data-overlay>
          {title && (
            <Title>
              {title}
              {releaseYear && ` (${releaseYear})`}
            </Title>
          )}
          {genres && <Genres>{genres}</Genres>}
          {overview && <Overview>{overview}</Overview>}
        </Overlay>
      </MovieLink>
    </>
  );
};

MovieGalleryItem.propTypes = {
  onLoad: func,
  genre_ids: arrayOf(number),
  title: string,
  poster_path: string,
};
