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
          }, 2000); 
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    const sections = document.querySelectorAll('section');
    let currentSectionIndex = 0;

    const autoScroll = () => {
      if (currentSectionIndex < sections.length) {
        sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' });
        currentSectionIndex++;
        setTimeout(autoScroll, 3000); // 3 seconds delay between automatic scrolls
      }
    };

    setTimeout(autoScroll, 2000); // Initial delay before starting auto-scroll

    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return null;
}

export default SmoothScroll;
