import React from 'react';
import './AccessibleButton.css'; // Import your CSS file for styling

const AccessibleButton = ({ onClick, children, ariaLabel }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="custom">
    <h1 className="primary-heading">Custom Button Example</h1>
    <div className="body">
    <div
      className="accessible-button"
      tabIndex="0"
      role="button"
      onClick={handleClick}
      onKeyDown={(e) => {
        // Handle Enter or Space key press
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
      aria-label={ariaLabel}
    >
      {children}
    </div>
    </div>
    </div>
  );
};

export default AccessibleButton;
