import { arrayOf, number, object, string } from 'prop-types';
import { LinkPrimary } from 'styles/shared';
import { splitNumIntoTriads } from 'utils';

import {
  List,
  Item,
  Container,
  Title,
  Tagline,
  Label,
  Cast,
} from './About.styled';

//
// About
//

export const About = ({
  budget,
  revenue,
  production_countries = [],
  genres = [],
  homepage,
  overview,
  release_date,
  tagline,
  crew,
  cast,
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

  const runtimeHHMM = `${new Date(runtime * 60000)
    .toISOString()
    .substr(11, 5)
    .replace(':', 'h ')}m`;

  const shouldRender =
    releaseDate ||
    countries ||
    genresList ||
    tagline ||
    budget > 0 ||
    revenue > 0 ||
    runtimeHHMM;

  if (!shouldRender) return null;

  return (
    <Container>
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

        {crew &&
          Object.entries(crew).map(([jobName, persons]) => {
            return (
              persons.length > 0 && (
                <Item key={jobName}>
                  <Label>{jobName}</Label>
                  <span>{persons.join(', ')}</span>
                </Item>
              )
            );
          })}

        {cast && (
          <Item>
            <Label>cast</Label>
            <Cast>
              {cast.preview}
              <LinkPrimary to="credits">{cast.remaining}</LinkPrimary>
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
    </Container>
  );
};

About.propType = {
  budget: number,
  revenue: number,
  runtime: number,
  production_countries: arrayOf(object),
  genres: arrayOf(object),
  cast: object,
  crew: object,
  release_date: string,
  tagline: string,
};
