import { RefObject, useEffect } from 'react';

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0,
};

export const useInfiniteScroll = (targetElementRef: RefObject<HTMLElement>, callback: () => void) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const target = entries[0];
      console.log('INSCROLL', target?.isIntersecting);
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
