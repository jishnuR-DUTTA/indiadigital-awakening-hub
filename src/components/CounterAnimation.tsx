
import React, { useEffect, useRef, useState } from 'react';

interface CounterProps {
  end: number;
  label: string;
  duration?: number;
  icon?: React.ReactNode;
}

const CounterAnimation: React.FC<CounterProps> = ({ 
  end, 
  label, 
  duration = 2000,
  icon
}) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = Math.ceil(end / (duration / 16));
    
    const timer = setInterval(() => {
      start += increment;
      
      if (start > end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => {
      clearInterval(timer);
    };
  }, [isVisible, end, duration]);

  return (
    <div ref={counterRef} className="text-center p-6 bg-brand-dark rounded-lg shadow-lg border border-brand-gray">
      <div className="flex justify-center mb-4 text-brand-orange">
        {icon}
      </div>
      <div className="text-4xl font-bold text-brand-orange mb-2">{count.toLocaleString()}</div>
      <div className="text-white text-lg">{label}</div>
    </div>
  );
};

export default CounterAnimation;
