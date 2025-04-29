import { useEffect, useRef } from 'react';

export default function StarsBackground() {
  const starsContainerRef = useRef(null);
  
  useEffect(() => {
    if (!starsContainerRef.current) return;
    
    const starsContainer = starsContainerRef.current;
    const numberOfStars = 150;
    
    // Clear any existing stars
    starsContainer.innerHTML = '';
    
    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement('div');
      star.classList.add('star', 'animate-twinkle');
      
      // Random star size between 1px and 3px
      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      
      // Random position
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      
      // Random delay for twinkling
      star.style.animationDelay = `${Math.random() * 4}s`;
      
      starsContainer.appendChild(star);
    }
  }, []);
  
  return (
    <div ref={starsContainerRef} className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0"></div>
  );
}
