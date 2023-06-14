import { useState, useEffect, useRef } from 'react';
import { func, arrayOf, number, string } from 'prop-types';
import { showError } from 'utils';
import TmdbService from 'services/tmdb/tmdbSrv';
import { Spinner } from 'components/etc/Spinner';
import { SpinnerWrapper } from 'styles/shared';

import {
  Poster,
  MovieLink,
  Overlay,
  Title,
  Overview,
  Rating,
  Genres,
  AltTitle,
} from './MovieGalleryItem.styled';

const srv = new TmdbService();
const DEF_POSTER_WIDTH = 500;
const STR_NA = 'N/A';

//
// MovieGalleryItem
//

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
  ...restProps
}) => {
  const [wasLoaded, setWasLoaded] = useState(false);
  const [genres, setGenres] = useState(null);
  const imgRef = useRef(null);
  const onLoadRef = useRef(onLoad);

  // имена жанров
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

  const rating = vote_average ? vote_average.toFixed(1) : STR_NA;
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
