import { useLocation } from 'react-router-dom';
import { LinkButton } from 'styles/shared';
import { Caption, Container, Text } from './ErrorMessage.styled';
import { BiMessageRoundedError as IconError } from 'react-icons/bi';

const TEXT =
  'It may have been moved, or you may have simply mistyped the page address.';

export const PageNotFound = () => {
  const location = useLocation();
  location.state = { PAGE_NOT_FOUND: true };

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
