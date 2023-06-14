import { getAvatar } from 'services/tmdb/helpers';
import { IconNoAvatar } from 'styles/icons';
import { ExpandableContent } from 'components/etc/ExpandableContent';

import {
  Container,
  AvatarThumb,
  AvatarImage,
  AvatarAndName,
  Header,
  HeaderGroup,
  SourceLink,
} from './ReviewItem.styled';

const AVATAR_WIDTH = 185;
const CONTENT_MAX_HEIGHT = 100;
const ICON_NO_AVATAR_SIZE = 60;
const ICON_NO_AVATAR_COLOR = 'lightgray';

const NEW_TAB = { target: '_blank', rel: 'noopener noreferrer' };

//
// ReviewCard
//

export const ReviewItem = ({
  author_details: { avatar_path },
  author,
  content,
  url,
  created_at,
  updated_at,
  id,
}) => {
  const createdDate = new Date(created_at).toLocaleString();

  return (
    <Container>
      <Header>
        <AvatarAndName>
          <AvatarThumb>
            {avatar_path ? (
              <AvatarImage
                src={getAvatar(avatar_path, AVATAR_WIDTH)}
                alt={author}
              />
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

      <ExpandableContent
        content={content}
        maxHeight={CONTENT_MAX_HEIGHT}
      />
    </Container>
  );
};
