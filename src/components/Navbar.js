import styles from './Navbar.module.css';
import ToggleBtn from './ToggleBtn';

const Navbar = ({ mode, toggleMode }) => {
  const navbarStyles = {
    backgroundColor: mode === 'dark' ? 'black' : 'white',
    color: mode === 'dark' ? 'white' : 'black',
  };

  return (
    <div className={styles.Navbar} style={navbarStyles}>
      <div>
        <h3>TextEdits</h3>
      </div>
      <div>
        <ToggleBtn onChangeMode={toggleMode} />
      </div>
    </div>
  );
};

export default Navbar;
