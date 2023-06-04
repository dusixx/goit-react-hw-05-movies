import { LinkPrimary } from 'styles/shared';
import { Cast } from './AboutMovie.styled';
import { getCastData, getCrewData } from './helpers';
// import { RiArrowRightSLine as IconRightArrow } from 'react-icons/ri';
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

  const newTab = { target: '_blank', rel: 'noopener noreferrer' };

  let haveAnyDataAbout =
    releaseDate || countries || genresList || tagline || budget > 0 || castData;

  return (
    <Container>
      {haveAnyDataAbout && <Title>About</Title>}

      {haveAnyDataAbout && (
        <List {...restProps}>
          {releaseDate && (
            <Item>
              <span>release</span>
              <span>{releaseDate}</span>
            </Item>
          )}

          {countries && (
            <Item>
              <span>countries</span>
              <span>{countries}</span>
            </Item>
          )}

          {genresList && (
            <Item>
              <span>genres</span>
              <span>{genresList}</span>
            </Item>
          )}

          {tagline && (
            <Item>
              <span>tagline</span>
              <span>
                <i>{tagline}</i>
              </span>
            </Item>
          )}

          {budget > 0 && (
            <Item>
              <span>budget</span>
              <span>${budget}</span>
            </Item>
          )}

          {crewData &&
            Object.entries(crewData).map(([jobName, persons]) => {
              return (
                persons.length > 0 && (
                  <Item key={jobName}>
                    <span>{jobName}</span>
                    <span>{persons.join(', ')}</span>
                  </Item>
                )
              );
            })}

          {castData && (
            <Item>
              <span>cast</span>
              <Cast>
                {castData.preview}
                <LinkPrimary to="credits">{castData.remaining}</LinkPrimary>
              </Cast>
            </Item>
          )}
        </List>
      )}

      <CastAndCrewLink to="credits">
        Full cast & crew
        {/* <IconRightArrow size={20} /> */}
      </CastAndCrewLink>

      {homepage && (
        <Homepage to={homepage} title={homepage} {...newTab}>
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
