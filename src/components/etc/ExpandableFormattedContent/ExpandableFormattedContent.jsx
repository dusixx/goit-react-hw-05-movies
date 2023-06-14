import { useRef, useState, useEffect, useCallback } from 'react';
import { Content, Expander } from './ExpandableFormattedContent.styled';
import { markupLinks } from 'utils';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 100;

export const ExpandableFormattedContent = ({ content, collapsedHeight }) => {
  const [showExpander, setShowExpander] = useState(false);
  const contentRef = useRef(null);

  const contentShouldBeCollapsed = useCallback(() => {
    const { current: ref } = contentRef;

    // раскрываем и замеряем высоту контента для текущей высоты вьюпорта
    ref.style.maxHeight = 'max-content';
    const { height } = ref.getBoundingClientRect();
    ref.style.maxHeight = null;

    return height > collapsedHeight;
  }, [collapsedHeight]);

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
        // В постах попадается разметка, ставим в innerHTML
        dangerouslySetInnerHTML={{ __html: markupLinks(content) }}
        maxHeight={showExpander ? collapsedHeight : 'max-content'}
      />
      {showExpander && (
        <Expander onClick={() => setShowExpander(false)}>Show full</Expander>
      )}
    </>
  );
};
