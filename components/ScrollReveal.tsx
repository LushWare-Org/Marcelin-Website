'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number | number[];
  rootMargin?: string;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  className = '',
  threshold = 0.2,
  rootMargin = '0px 0px -10% 0px',
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once && node) observer.unobserve(node);
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [once, rootMargin, threshold]);

  return (
    <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`.trim()}>
      {children}
    </div>
  );
}
