import React from 'react';
import './SecondaryButton.css'; // Import your CSS file for styling

const SecondaryButton = ({ onClick, children }) => {
  return (
    <div className="primary">
    <h1 className="primary-heading">Secondary Button Example</h1>
    <button className="secondary-button" onClick={onClick}>
      {children}
    </button>
    </div>
  );
};

export default SecondaryButton;
