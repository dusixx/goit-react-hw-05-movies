import { LinkButton } from 'styles/shared';
import { Caption, Container, Text } from './ErrorMessage.styled';
import { IconError } from 'styles/icons';

const TEXT =
  'It may have been moved, or you may have simply mistyped the page address.';

export const PageNotFound = () => {
  return (
    <Container>
      <IconError size={40} color="var(--color-blue)" />
      <Caption>404: Page not found</Caption>
      <Text>{TEXT}</Text>
      <LinkButton to="/" style={{ textTransform: 'capitalize' }}>
        Go to the homepage
      </LinkButton>
    </Container>
  );
};
