import { useState, useEffect } from 'react';

interface ScrollPosition {
  x: number;
  y: number;
}

/**
 * useScroll Hook
 * 
 * Custom hook for tracking scroll position.
 * 
 * @example
 * const { scrollPosition, isScrolled } = useScroll();
 * 
 * if (isScrolled) {
 *   // Show sticky header
 * }
 */
export function useScroll() {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition({
        x: window.scrollX,
        y: window.scrollY,
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return {
    scrollPosition,
    isScrolled: scrollPosition.y > 0,
  };
}

