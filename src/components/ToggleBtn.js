import React, { useState } from 'react';

function ToggleButton({ onChangeMode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    onChangeMode(isDarkMode ? 'dark' : 'light');
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button onClick={handleToggle}>
      {isDarkMode ? 'Dark Mode Enabled' : 'Light Mode Enabled'}
    </button>
  );
}

export default ToggleButton;
