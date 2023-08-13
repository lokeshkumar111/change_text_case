import styles from './TextBox.module.css';
import { useState } from 'react';

const TextBox = ({ mode }) => {
  const [text, setText] = useState('');

  const handleUpBtn = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoBtn = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClBtn = () => {
    let newText = '';
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleRemoveSpBtn=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  const handleCopyBtn = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert('Text is copied ✓');
      })
      .catch((error) => {
        console.error('Error copying text:', error);
      });
  };

  const textBoxStyles = {
    backgroundColor: mode === 'dark' ? '#042743' : 'white',
    color: mode === 'dark' ? 'white' : 'black',
  };
  const textAreaStyle = {
    backgroundColor: mode === 'dark' ? 'rgb(29, 40, 68)' : 'white',
    color: mode === 'dark' ? 'white' : 'black',
  }
  const textAreaButtonStyle={
    color:  mode ==='dark' ? 'white': 'black'
  }

  return (
    <div className={styles.TextBox} style={textBoxStyles}>
      <textarea className='textAreaStyle' style={textAreaStyle}
        placeholder="Enter your text here..."
        name="Text1"
        cols="100"
        rows="10"
        onChange={handleOnChange}
        value={text}
      ></textarea>
      <div style={textAreaButtonStyle} className="textAreaButtonStyle">
        <button onClick={handleUpBtn}>Change to UPPER CASE</button>
        <button onClick={handleLoBtn}>Change to lower case</button>
        <button onClick={handleRemoveSpBtn}>Remove Extra Space</button>
        <button onClick={handleCopyBtn}>Copy Text</button>
        <button onClick={handleClBtn}>Clear</button>
      </div>
      <div>
        <h2>Your Text Summary</h2>
        <p>
          {text.split(' ').length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(' ').length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default TextBox;
