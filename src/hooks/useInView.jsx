import { useEffect, useRef, useState } from 'react';

/**
 * Hook to detect when an element scrolls into the viewport.
 * @param {object} options - Options for the Intersection Observer (e.g., rootMargin)
 * @returns {[ref, boolean]} - The ref to attach to the element and the isVisible state
 */
export const UseInView = (options) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Update the state based on whether the element is intersecting
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Stop observing once visible to prevent re-animation on scroll-up/down
        observer.unobserve(entry.target); 
      }
    }, options);

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    // Cleanup function
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return [ref, isVisible];
};