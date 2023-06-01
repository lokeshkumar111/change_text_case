import styles from './TextBox.module.css'
import {useState} from 'react';
const TextBox = () =>{

    const[text, setText] = useState("");
    
    const handleUpBtn=()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoBtn=()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClBtn=()=>{
        let newText = '';
        setText(newText);
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const handleCopyBtn = () => {
        navigator.clipboard.writeText(text)
          .then(() => {
            alert('Text is copied ✓');
          })
          .catch((error) => {
            console.error('Error copying text:', error);
          });
      };
    return(
        <div className={styles.TextBox}>
            <textarea name="Text1" cols="100" rows="20" onChange={handleOnChange} value={text}></textarea>
            <div>
                <button onClick={handleUpBtn}>Change to UpperCase</button>
                <button onClick={handleLoBtn}>Change to LowerCase</button>
                <button onClick={handleClBtn}>Clear</button>
                <button onClick={handleCopyBtn}>Copy Text</button>
            </div>
            <div>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </div>
    );
}
export default TextBox;