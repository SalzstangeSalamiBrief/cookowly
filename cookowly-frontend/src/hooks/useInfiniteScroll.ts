import { RefObject, useEffect } from 'react';

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0,
};

/**
 * This hooks i used to handle infinite scrolling.
 * If the passed element intersects with the view, then the passed callback gets executed
 *
 * @param targetElementRef the element to use for calculations
 * @param callback the callback to execute
 */
export const useInfiniteScroll = (targetElementRef: RefObject<HTMLElement>, callback: () => void) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const target = entries[0];
      if (target?.isIntersecting) {
        callback();
      }
    }, options);

    if (targetElementRef.current) {
      observer.observe(targetElementRef.current);
    }

    return () => observer.disconnect();
  }, [targetElementRef, callback]);
};
