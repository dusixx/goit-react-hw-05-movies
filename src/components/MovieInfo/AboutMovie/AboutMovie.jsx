import { Link } from 'react-router-dom';
import {
  List,
  Item,
  Homepage,
  Container,
  Title,
  Overview,
  Text,
  CastList,
} from './AboutMovie.styled';

const DEF_CAST_COUNT = 5;

export const AboutMovie = ({
  budget,
  production_countries = [],
  genres = [],
  homepage,
  overview,
  release_date,
  tagline,
  credits,
  style,
  ...restProps
}) => {
  const genresList = genres.map(({ name }) => name).join(', ');
  const countries = production_countries.map(({ name }) => name).join(', ');

  const castList = credits?.cast
    ?.slice(0, DEF_CAST_COUNT)
    .map(({ original_name: name }) => name)
    .join(', ');

  console.log(credits?.crew);

  const crewList = credits?.crew
    ?.slice(0, DEF_CAST_COUNT)
    .map(({ original_name: name }) => name)
    .join(', ');

  const releaseDate = release_date
    ? new Date(release_date).toLocaleDateString()
    : 'n/a';

  return (
    <Container style={style}>
      <Title>About</Title>

      <List {...restProps}>
        <Item>
          <span>Release:</span>
          <span>{releaseDate}</span>
        </Item>
        <Item>
          <span>Counries:</span>
          <span>{countries || 'n/a'}</span>
        </Item>
        <Item>
          <span>Genres:</span>
          <span>{genresList || 'n/a'}</span>
        </Item>
        <Item>
          <span>Tagline:</span>
          <span>
            <i>{tagline || 'n/a'}</i>
          </span>
        </Item>
        <Item>
          <span>Budget:</span>
          <span>{budget ? `$${budget}` : `n/a`}</span>
        </Item>

        {castList && castList.length > 0 && (
          <Item>
            <span>Cast:</span>
            <CastList>
              {castList}
              <Link to="cast">
                ...and other {credits.cast.length - DEF_CAST_COUNT} actor(s)
              </Link>
            </CastList>
          </Item>
        )}

        {crewList && crewList.length > 0 && (
          <Item>
            <span>Crew:</span>
            <CastList>
              {crewList}
              <Link to="cast">
                ...and other {credits.crew.length - DEF_CAST_COUNT} peoples(s)
              </Link>
            </CastList>
          </Item>
        )}
      </List>

      {homepage && (
        <Homepage to={homepage} title={homepage}>
          Official website
        </Homepage>
      )}

      <Overview>
        <Title>Overview</Title>
        <Text>{overview}</Text>
      </Overview>
    </Container>
  );
};
