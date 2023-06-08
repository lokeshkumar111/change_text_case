import './App.css';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  };

  return (
    <div className="App">
      <Navbar mode={mode} toggleMode={toggleMode} />
      <TextBox mode={mode} />
    </div>
  );
}

export default App;
