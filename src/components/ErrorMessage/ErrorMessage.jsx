import { LinkButton } from 'styles/shared';
import { Caption, Container, Text } from './ErrorMessage.styled';
import { BiMessageRoundedError as IconError } from 'react-icons/bi';

export const ErrorMessage = ({ error }) => {
  console.error(error);

  return (
    <Container>
      <IconError size={40} color="var(--color-blue)" />
      <Caption>Something went wrong</Caption>
      <Text>{error.code}</Text>
      <LinkButton to={-1} style={{ textTransform: 'capitalize' }}>
        Go back
      </LinkButton>
    </Container>
  );
};
