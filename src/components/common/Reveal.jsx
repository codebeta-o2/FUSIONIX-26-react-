import { useEffect, useRef } from 'react';
import './Reveal.css';

export default function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setTimeout(() => ref.current?.classList.add('visible'), delay);
          obs.disconnect();
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [delay]);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}
