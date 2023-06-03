import {
  List,
  Item,
  Homepage,
  Container,
  Title,
  Overview,
  Text,
} from './AboutMovie.styled';

export const AboutMovie = ({
  budget,
  production_countries = [],
  genres = [],
  homepage,
  overview,
  release_date,
  tagline,
  style,
  ...restProps
}) => {
  const genresList = genres.map(({ name }) => name).join(', ');
  const countries = production_countries.map(({ name }) => name).join(', ');

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
