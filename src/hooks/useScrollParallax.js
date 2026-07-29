import { useState, useEffect } from 'react';

export default function useScrollParallax() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const root = document.getElementById('scroll-root');
    if (!root) return;
    function onScroll() { setScrollY(root.scrollTop); }
    root.addEventListener('scroll', onScroll, { passive: true });
    return () => root.removeEventListener('scroll', onScroll);
  }, []);

  return scrollY;
}
