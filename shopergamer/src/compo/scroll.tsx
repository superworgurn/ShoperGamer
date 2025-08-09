import { useState, useEffect, type RefObject } from 'react';

export const useIntersectionObserver = (
  ref: RefObject<HTMLElement>,
  options: IntersectionObserverInit = { threshold: 0.1 }
): boolean => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntersecting(true);
        observer.unobserve(entry.target); 
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if(ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return isIntersecting;
};