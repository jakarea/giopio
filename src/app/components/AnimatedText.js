'use client'

import React, { useEffect, useRef, useState } from 'react';

const AnimatedText = ({ numbers }) => {
  const [isVisible, setIsVisible] = useState(false);
  const animatedTextRef = useRef(null);

  useEffect(() => {
    const checkViewport = () => {
      if (animatedTextRef.current) {
        const bounding = animatedTextRef.current.getBoundingClientRect();
        const isVisible = (
          bounding.top >= 0 &&
          bounding.left >= 0 &&
          bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
        setIsVisible(isVisible);
      }
    };

    // Initial check on mount
    checkViewport();

    // Listen to scroll events
    window.addEventListener('scroll', checkViewport);
    
    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', checkViewport);
    };
  }, []);

  return (
    <h4
      ref={animatedTextRef}
      className={`text-[32px] font-medium leading-10 text-second xl:text-[42px] anim animated-text dark:text-white ${isVisible ? 'show' : ''}`}
    >
      {numbers}
    </h4>
  );
};

export default AnimatedText;
