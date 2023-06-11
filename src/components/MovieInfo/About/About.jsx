import { LinkPrimary } from 'styles/shared';
import { Cast } from './About.styled';
import { getCrewPreview, getCastPreview } from 'services/tmdb/helpers';
import { splitNumIntoTriads } from 'utils';

import {
  List,
  Item,
  Homepage,
  Container,
  Title,
  Overview,
  Text,
  CastAndCrewLink,
  Tagline,
  Label,
} from './About.styled';

const NEW_TAB = { target: '_blank', rel: 'noopener noreferrer' };

export const About = ({
  budget,
  revenue,
  production_countries = [],
  genres = [],
  homepage,
  overview,
  release_date,
  tagline,
  credits,
  runtime,
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

  const castData = getCastPreview(credits);
  const crewData = getCrewPreview(credits);

  const runtimeHHMM = `${new Date(runtime * 60000)
    .toISOString()
    .substr(11, 5)
    .replace(':', 'h ')}m`;

  // !! как-то проще?
  const haveAnyDataAbout =
    releaseDate ||
    countries ||
    genresList ||
    tagline ||
    budget > 0 ||
    revenue > 0 ||
    castData ||
    crewData ||
    runtimeHHMM;

  return (
    <Container>
      {/* {haveAnyDataAbout && <Title>About</Title>} */}

      {haveAnyDataAbout && (
        <>
          <Title>About</Title>

          <List {...restProps}>
            {releaseDate && (
              <Item>
                <Label>release</Label>
                <span>{releaseDate}</span>
              </Item>
            )}

            {countries && (
              <Item>
                <Label>countries</Label>
                <span>{countries}</span>
              </Item>
            )}

            {genresList && (
              <Item>
                <Label>genres</Label>
                <span>{genresList}</span>
              </Item>
            )}

            {tagline && (
              <Item>
                <Label>tagline</Label>
                <span>
                  <Tagline>{tagline}</Tagline>
                </span>
              </Item>
            )}

            {budget > 0 && (
              <Item>
                <Label>budget</Label>
                <span>${splitNumIntoTriads(budget)}</span>
              </Item>
            )}

            {revenue > 0 && (
              <Item>
                <Label>revenue</Label>
                <span>${splitNumIntoTriads(revenue)}</span>
              </Item>
            )}

            {crewData &&
              Object.entries(crewData).map(([jobName, persons]) => {
                return (
                  persons.length > 0 && (
                    <Item key={jobName}>
                      <Label>{jobName}</Label>
                      <span>{persons.join(', ')}</span>
                    </Item>
                  )
                );
              })}

            {castData && (
              <Item>
                <Label>cast</Label>
                <Cast>
                  {castData.preview}
                  <LinkPrimary to="credits">{castData.remaining}</LinkPrimary>
                </Cast>
              </Item>
            )}

            {runtime > 0 && (
              <Item>
                <Label>runtime</Label>
                <span>{runtimeHHMM}</span>
              </Item>
            )}
          </List>
        </>
      )}

      {/* Пример без credits id(874156) */}
      {(castData || crewData) && (
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
          <Text>{overview}</Text>
        </Overview>
      )}
    </Container>
  );
};