import { useLocation } from 'react-router-dom';
import {
  GoHomeLink,
  Container,
  Message,
  Caption,
  Text,
} from './PageNotFound.styled';

const TEXT =
  'It may have been moved, or you may have simply mistyped the page address.';

export const PageNotFound = () => {
  const location = useLocation();
  location.state = { PAGE_NOT_FOUND: true };

  return (
    <Container>
      <Message>
        <Caption>
          <span>404</span>Page not found
        </Caption>
        <Text>{TEXT}</Text>
      </Message>
      <GoHomeLink to="/">Go to the homepage</GoHomeLink>
    </Container>
  );
};
