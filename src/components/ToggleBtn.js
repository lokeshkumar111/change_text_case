import React, { useState } from 'react';
import darkMode from './media/darkMode.png';
import lightMode from './media/lightMode.png';
function ToggleButton({ onChangeMode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    onChangeMode(isDarkMode ? 'dark' : 'light');
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button onClick={handleToggle}>
      {isDarkMode ? <img style={{width:'40px'}} src={lightMode} alt="light"/> : <img style={{width:'40px'}} src={darkMode} alt="dark"/>}
    </button>
  );
}

export default ToggleButton;
