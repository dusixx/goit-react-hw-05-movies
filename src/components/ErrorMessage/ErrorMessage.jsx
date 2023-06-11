import { LinkButton } from 'styles/shared';
import { Caption, Container, Text } from './ErrorMessage.styled';

export const ErrorMessage = ({ error }) => {
  console.error(error);

  return (
    <Container>
      <Caption>Something went wrong</Caption>
      <Text>{error.code}</Text>
      <LinkButton to={-1} style={{ textTransform: 'capitalize' }}>
        Go back
      </LinkButton>
    </Container>
  );
};
