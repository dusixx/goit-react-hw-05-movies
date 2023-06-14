import { LinkButton } from 'styles/shared';
import { Caption, Container, Text } from './ErrorMessage.styled';
import { IconError } from 'styles/icons';
import { shape, string } from 'prop-types';

export const ErrorMessage = ({ error }) => {
  console.error(error);

  return (
    <Container>
      <IconError size={40} color="var(--color-blue)" />
      <Caption>Something went wrong</Caption>
      <Text>{error.code}</Text>
      <LinkButton to="/" style={{ textTransform: 'capitalize' }}>
        Go to the homepage
      </LinkButton>
      {/* <LinkButton to={-1} style={{ textTransform: 'capitalize' }}>
        Go back
      </LinkButton> */}
    </Container>
  );
};

ErrorMessage.propType = {
  error: shape({
    message: string,
    code: string,
  }),
};
