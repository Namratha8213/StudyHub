import React, { useState } from 'react';

function MarqueeLink() {
  const [isHovered, setIsHovered] = useState(false);
  let marqueeInterval;

  const handleMouseOver = () => {
    clearInterval(marqueeInterval);
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    marqueeInterval = setInterval(() => {
      // Code to start marquee animation
    }, 100);
    setIsHovered(false);
  };

  return (
    <marquee behavior="scroll" direction="right" scrollamount="15" loop="infinite" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <div className="marque"><a href="https://lms.nmamit.in/">CLICK HERE TO GO TO LMS MOODLE</a></div>
    </marquee>
  );
}

export default MarqueeLink;
