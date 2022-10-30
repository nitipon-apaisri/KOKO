import React from "react";
import styles from "../../styles/Navbar.module.css";
const Navbar = () => {
    return (
        <nav className={styles.menu}>
            <ul className={styles.menu_list}>
                <li className={styles.menu_item}>Collection</li>
                <li className={styles.menu_item}>Creator</li>
            </ul>
        </nav>
    );
};

export default Navbar;
