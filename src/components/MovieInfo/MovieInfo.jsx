import { useEffect } from 'react';
import TmdbService from 'services/tmdbSrv';
import { Info, Thumb, Poster, Desc, MovieTitle } from './MovieInfo.styled';
import { Rating } from './Rating/Rating';
import { AboutMovie } from './AboutMovie/AboutMovie';

const srv = new TmdbService();
const POSTER_WIDTH = 500;

export const MovieInfo = ({ value = {} }) => {
  const { title, poster_path, ...restProps } = value;

  // подтягиваем список ролей
  useEffect(() => {
    srv.getMovieReviews();
  });

  // постер
  const posterData = {
    src: srv.buildImageUrl(poster_path, POSTER_WIDTH),
    alt: title,
  };

  // console.log('Details', value);

  // год релиза
  const releaseYear = value.release_date?.substring(0, 4);

  return (
    <Info>
      <Thumb>
        <Poster {...posterData} />
      </Thumb>
      <Desc>
        <MovieTitle style={{ marginBottom: 25 }}>
          {title}
          {releaseYear && ` (${releaseYear})`}
        </MovieTitle>
        <Rating {...restProps} />
        <AboutMovie style={{ marginTop: 30 }} {...restProps} />
      </Desc>
    </Info>
  );
};
