import { markupLinks } from '@common';
import debounce from 'lodash.debounce';
import { number, string } from 'prop-types';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Content, Expander } from './ExpandableContent.styled';

const DEBOUNCE_DELAY = 100;

export const ExpandableContent = ({ content, maxHeight = Infinity }) => {
  const [showExpander, setShowExpander] = useState(false);
  const contentRef = useRef(null);

  const contentShouldBeCollapsed = useCallback(() => {
    const { current: ref } = contentRef;

    // expand and measure the content height for the current viewport height
    ref.style.maxHeight = 'max-content';
    const { height } = ref.getBoundingClientRect();
    ref.style.maxHeight = null;

    return height > maxHeight;
  }, [maxHeight]);

  useEffect(() => {
    setShowExpander(contentShouldBeCollapsed());

    const handleWindowResize = debounce(() => {
      setShowExpander(contentShouldBeCollapsed());
    }, DEBOUNCE_DELAY);

    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, [contentShouldBeCollapsed]);

  return (
    <>
      <Content
        ref={contentRef}
        // sometimes posts contain markup
        dangerouslySetInnerHTML={{ __html: markupLinks(content) }}
        maxHeight={showExpander ? maxHeight : 'max-content'}
      />
      {showExpander && (
        <Expander onClick={() => setShowExpander(false)}>Show full</Expander>
      )}
    </>
  );
};

ExpandableContent.propType = {
  content: string,
  maxHeight: number,
};
