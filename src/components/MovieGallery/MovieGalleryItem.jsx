import { showError } from 'utils';
import { useState, useEffect } from 'react';
import TmdbService from 'services/tmdb/tmdbSrv';

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
  ...restProps
}) => {
  const [wasLoaded, setWasLoaded] = useState(false);
  const [genres, setGenres] = useState(null);

  // имена жанров
  useEffect(() => {
    srv
      .getGenres(genre_ids)
      .then(res => setGenres(res.join(', ')))
      .catch(showError);
  }, [genre_ids]);

  let rating = vote_average ? vote_average.toFixed(1) : 'N/A';
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
          <Poster
            src={srv.buildImageUrl(poster_path, DEF_POSTER_WIDTH)}
            alt={title}
            onLoad={() => setWasLoaded(true)}
            loading="lazy"
          />
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
