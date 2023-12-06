import React, { useState, useRef, useEffect } from 'react';
import arrow from '../assets/arrow.png'; 

const Collapse = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  const contentRef = useRef(null);

  const toggleCollapse = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    if (contentRef.current) {
      if (isActive) {
        contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;
        contentRef.current.style.transform = 'translateY(0%)';
      } else {
        contentRef.current.style.height = '0px';
        contentRef.current.style.transform = 'translateY(-100%)';
      }
    }
  }, [isActive]);

  return (
    <div className="collapse">
      <div className="collapse-title" onClick={toggleCollapse}>
        <h3>{title}</h3>
        <img 
          src={arrow} 
          alt="Toggle" 
          className={`collapse-arrow ${isActive ? 'active' : ''}`}
        />
      </div>
      <div className="collapse-content" ref={contentRef}>
        <div className="collapse-txt">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Collapse;