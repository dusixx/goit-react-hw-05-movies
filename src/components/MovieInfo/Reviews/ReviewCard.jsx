import TmdbService from 'services/tmdb/tmdbSrv';
import { FaUserCircle as IconNoAvatar } from 'react-icons/fa';

import {
  Container,
  AvatarThumb,
  AvatarImage,
  AvatarAndName,
  Header,
  HeaderGroup,
  Content,
  SourceLink,
} from './ReviewCard.styled';

const srv = new TmdbService();

const AVATAR_WIDTH = 185;
const ICON_NO_AVATAR_SIZE = 60;
const ICON_NO_AVATAR_COLOR = 'lightgray';
const NEW_TAB = { target: '_blank', rel: 'noopener noreferrer' };

export const ReviewCard = ({
  author_details: { avatar_path },
  author,
  content,
  url,
  created_at,
  updated_at,
  id,
}) => {
  const getAvatar = path =>
    path
      ? /http/i.test(path)
        ? path.replace(/\//, '')
        : srv.buildImageUrl(path, AVATAR_WIDTH)
      : null;

  const createdDate = new Date(created_at).toLocaleString();

  return (
    <Container>
      <Header>
        <AvatarAndName>
          <AvatarThumb>
            {avatar_path ? (
              <AvatarImage src={getAvatar(avatar_path)} alt={author} />
            ) : (
              <IconNoAvatar
                size={ICON_NO_AVATAR_SIZE}
                color={ICON_NO_AVATAR_COLOR}
              />
            )}
          </AvatarThumb>
          <b>{author}</b>
        </AvatarAndName>

        <HeaderGroup>
          <span>{createdDate}</span>
          <SourceLink to={url} title={url} {...NEW_TAB}>
            Direct link
          </SourceLink>
        </HeaderGroup>
      </Header>
      {/* В постах попадается разметка, ставим их в innerHTML */}
      <Content dangerouslySetInnerHTML={{ __html: content }} />
    </Container>
  );
};
