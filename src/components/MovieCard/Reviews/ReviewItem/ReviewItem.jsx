import { getAvatar } from '@common';
import { ExpandableContent } from '@components/etc/ExpandableContent/ExpandableContent';
import { IconNoAvatar } from '@styles';
import { number, object, string } from 'prop-types';
import {
  AVATAR_WIDTH,
  CONTENT_MAX_HEIGHT,
  ICON_NO_AVATAR_COLOR,
  ICON_NO_AVATAR_SIZE,
} from './ReviewItem.constants.js';

import { NEW_TAB_TARGET_REL } from '@common/constants.js';
import {
  AvatarAndName,
  AvatarImage,
  AvatarThumb,
  Container,
  Header,
  HeaderGroup,
  SourceLink,
} from './ReviewItem.styled';

export const ReviewItem = ({
  author_details: { avatar_path },
  author,
  content,
  url,
  created_at,
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
          <SourceLink to={url} title={url} {...NEW_TAB_TARGET_REL}>
            Direct link
          </SourceLink>
        </HeaderGroup>
      </Header>

      <ExpandableContent content={content} maxHeight={CONTENT_MAX_HEIGHT} />
    </Container>
  );
};

ReviewItem.propType = {
  author_details: object,
  author: string,
  content: string,
  url: string,
  created_at: string,
  updated_at: string,
  id: number,
};
