import React from 'react';
import PrimaryButton from './components/PrimaryButton'; // Adjust the path based on your file structure
import SecondaryButton from './components/SecondaryButton';
import AccessibleButton from './components/AccessibleButton';

const App = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <PrimaryButton onClick={handleClick}>Click Me</PrimaryButton>
      <SecondaryButton onClick={handleClick}>Click me</SecondaryButton>
      <AccessibleButton onClick={handleClick} ariaLabel="Click to perform action">
      Click Me
    </AccessibleButton>
    </div>
  );
};

export default App;
