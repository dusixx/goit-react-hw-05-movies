import { getAvatar } from 'services/tmdb/helpers';
import { IconNoAvatar } from 'styles/icons';
import { useRef, useEffect } from 'react';

import {
  Container,
  AvatarThumb,
  AvatarImage,
  AvatarAndName,
  Header,
  HeaderGroup,
  Content,
  SourceLink,
  Expander,
} from './ReviewCard.styled';
import { useState } from 'react';

const AVATAR_WIDTH = 185;
const CONTENT_MAX_HEIGHT = 100;
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
  const [showExpander, setShowExpander] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const contentHeight = contentRef.current.getBoundingClientRect().height;
    setShowExpander(contentHeight > CONTENT_MAX_HEIGHT);
  }, []);

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
      <Content
        ref={contentRef}
        // В постах попадается разметка, ставим их в innerHTML
        dangerouslySetInnerHTML={{ __html: content }}
        style={showExpander ? { maxHeight: CONTENT_MAX_HEIGHT } : null}
      />
      {showExpander && (
        <>
          <Expander onClick={() => setShowExpander(false)}>Show full</Expander>
        </>
      )}
    </Container>
  );
};
