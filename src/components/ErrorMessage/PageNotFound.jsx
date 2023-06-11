import { useLocation } from 'react-router-dom';
import { LinkButton } from 'styles/shared';
import { Caption, Container, Text } from './ErrorMessage.styled';

const TEXT =
  'It may have been moved, or you may have simply mistyped the page address.';

export const PageNotFound = () => {
  const location = useLocation();
  location.state = { PAGE_NOT_FOUND: true };

  return (
    <Container>
      <Caption>Page not found</Caption>
      <Text>{TEXT}</Text>
      <LinkButton to="/" style={{ textTransform: 'capitalize' }}>
        Go to the homepage
      </LinkButton>
    </Container>
  );
};
