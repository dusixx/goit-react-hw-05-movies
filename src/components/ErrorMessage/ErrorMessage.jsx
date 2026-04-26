import { IconError, LinkButton } from '@styles';
import { shape, string } from 'prop-types';
import { Caption, Container, Text } from './ErrorMessage.styled';

export const ErrorMessage = ({ error }) => {
  console.debug(error);

  return (
    <Container>
      <IconError size={40} color="var(--color-blue)" />
      <Caption>Something went wrong</Caption>
      <Text>{error.code}</Text>
      <LinkButton to="/" style={{ textTransform: 'capitalize' }}>
        Go to the homepage
      </LinkButton>
    </Container>
  );
};

ErrorMessage.propType = {
  error: shape({
    message: string,
    code: string,
  }),
};
