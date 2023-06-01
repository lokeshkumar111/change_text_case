 import styles from './Navbar.module.css';
 const Navbar = () => {
    return(
        <div className = {styles.Navbar}>
            <div>
                <h3>TextUtils</h3>
            </div>
            <div>
                <p>Home</p>
                <p>About</p>
                <p>Contect</p>
            </div>
        </div>

    );
 }
 export default Navbar;