import { useEffect, useRef, useState } from 'react';

type AnimationOptions = {
  threshold?: number;
  rootMargin?: string;
  animation: string;
  delay?: number;
  onlyOnLoad?: boolean;
};

export function useScrollAnimation({ 
  threshold = 0.1, 
  rootMargin = '0px', 
  animation, 
  delay = 0,
  onlyOnLoad = false 
}: AnimationOptions) {
  const elementRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (onlyOnLoad) {
      setTimeout(() => {
        if (elementRef.current) {
          elementRef.current.classList.add('animate-in');
          elementRef.current.classList.add(animation);
        }
      }, delay);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => {
            entry.target.classList.add('animate-in');
            entry.target.classList.add(animation);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [animation, delay, threshold, rootMargin]);

  return elementRef;
}