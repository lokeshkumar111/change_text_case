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
        <h3>TextUtils</h3>
      </div>
      <div>
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
        <ToggleBtn onChangeMode={toggleMode} />
      </div>
    </div>
  );
};

export default Navbar;
