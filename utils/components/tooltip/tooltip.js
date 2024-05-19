import React, { useState } from 'react';
import './Tooltip.css';

const Tooltip = ({ text, tooltip }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <span
      className="tooltip-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
      {showTooltip && <span className="tooltip">{tooltip}</span>}
    </span>
  );
};

export default Tooltip;