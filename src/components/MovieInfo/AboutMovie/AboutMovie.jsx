import { LinkPrimary } from 'styles/shared';
import { Cast } from './AboutMovie.styled';
import { getCastData, getCrewData } from './helpers';
import {
  List,
  Item,
  Homepage,
  Container,
  Title,
  Overview,
  Text,
  CastAndCrewLink,
} from './AboutMovie.styled';

export const AboutMovie = ({
  budget,
  production_countries = [],
  genres = [],
  homepage,
  overview,
  release_date,
  tagline,
  credits,
  ...restProps
}) => {
  const genresList = genres?.length
    ? genres.map(({ name }) => name).join(', ')
    : null;

  const countries = production_countries?.length
    ? production_countries.map(({ name }) => name).join(', ')
    : null;

  const releaseDate = release_date
    ? new Date(release_date).toLocaleDateString()
    : null;

  const castData = getCastData(credits);
  const crewData = getCrewData(credits);

  let haveAnyDataAbout =
    releaseDate || countries || genresList || tagline || budget > 0 || castData;

  return (
    <Container>
      {haveAnyDataAbout && <Title>About</Title>}

      {haveAnyDataAbout && (
        <List {...restProps}>
          {releaseDate && (
            <Item>
              <span>Release:</span>
              <span>{releaseDate}</span>
            </Item>
          )}

          {countries && (
            <Item>
              <span>Counries:</span>
              <span>{countries}</span>
            </Item>
          )}

          {genresList && (
            <Item>
              <span>Genres:</span>
              <span>{genresList}</span>
            </Item>
          )}

          {tagline && (
            <Item>
              <span>Tagline:</span>
              <span>
                <i>{tagline}</i>
              </span>
            </Item>
          )}

          {budget > 0 && (
            <Item>
              <span>Budget:</span>
              <span>${budget}</span>
            </Item>
          )}

          {crewData &&
            Object.entries(crewData).map(([job, persons]) => {
              return (
                persons.length > 0 && (
                  <Item key={job}>
                    <span>{job}:</span>
                    <span>{persons.join(', ')}</span>
                  </Item>
                )
              );
            })}

          {castData && (
            <Item>
              <span>Cast:</span>
              <Cast>
                {castData.preview}
                <LinkPrimary to="cast">{castData.remaining}</LinkPrimary>
              </Cast>
            </Item>
          )}
        </List>
      )}

      <CastAndCrewLink to="cast">Full cast & crew</CastAndCrewLink>

      {homepage && (
        <Homepage to={homepage} title={homepage}>
          Official website
        </Homepage>
      )}

      {overview && (
        <Overview>
          <Title>Overview</Title>
          <Text>{overview}</Text>
        </Overview>
      )}
    </Container>
  );
};
