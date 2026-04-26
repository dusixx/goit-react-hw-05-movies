import { IconError, LinkButton } from '@styles';
import { Caption, Container, Text } from './ErrorMessage.styled';

const NOT_FOUND = '404: Page not found';
const GO_HOME = ' Go to the homepage';
const TEXT =
  'It may have been moved, or you may have simply mistyped the page address.';

export const PageNotFound = () => {
  return (
    <Container>
      <IconError size={40} color="var(--color-blue)" />
      <Caption>{NOT_FOUND}</Caption>
      <Text>{TEXT}</Text>
      <LinkButton to="/" style={{ textTransform: 'capitalize' }}>
        {GO_HOME}
      </LinkButton>
    </Container>
  );
};
