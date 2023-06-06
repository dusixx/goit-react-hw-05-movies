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
} from './TrendsItem.styled';

const srv = new TmdbService();
const DEF_POSTER_HEIGHT = 500;

//
// TrendsItem
//

export const TrendsItem = ({
  id,
  title,
  poster_path,
  posterSize = DEF_POSTER_HEIGHT,
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

  // рейтинг
  let rating = Number(vote_average);
  rating = rating ? rating.toFixed(1) : 'N/A';

  // постер
  const posterData = {
    src: srv.buildImageUrl(poster_path, posterSize),
    alt: title,
  };

  // год релиза
  const releaseYear = release_date?.substring(0, 4);

  return (
    <>
      {wasLoaded && <Rating title={`Votes: ${vote_count}`}>{rating}</Rating>}

      <MovieLink to={`movies/${id}`}>
        <Poster
          {...posterData}
          onLoad={() => setWasLoaded(true)}
          loading="lazy"
        />

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
