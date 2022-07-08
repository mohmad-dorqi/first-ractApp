import React from 'react';
import styles from "./navbar.module.css"
import Logo from "../image/logo2.png"

const Navbar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <ul className={styles.list}>
                    <li>Home page</li>
                    <li>Products</li>
                    <li>About us</li>

                </ul>
            </div>
            <div className={styles.logo}>
                <img className={styles.logo} src={Logo} alt='logo'/>
            </div>


        </header >
    );
};

export default Navbar;