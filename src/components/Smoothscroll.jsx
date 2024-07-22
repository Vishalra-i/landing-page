'use client'
import React, { useEffect } from 'react';

function SmoothScroll() {
  useEffect(() => {
    const handleAnchorClick = (e) => {
      if (e.target.tagName === 'A' && e.target.hash) {
        e.preventDefault();
        const targetElement = document.querySelector(e.target.hash);
        if (targetElement) {
          setTimeout(() => {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }, 2000); // 2 seconds delay
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return null;
}

export default SmoothScroll;
