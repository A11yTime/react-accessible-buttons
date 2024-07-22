import React from 'react';
import './Button.css'; // Import your CSS file for styling

const PrimaryButton = ({ onClick, children }) => {
  return (
    <div className="primary">
    <h1 className="primary-heading">Primary Button Example</h1>
    <button className="primary-button" onClick={onClick}>
      {children}
    </button>
    </div>
  );
};

export default PrimaryButton;
