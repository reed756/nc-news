import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Nav.module.css";

function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.unorderedList}>
        <li className={styles.listItem}>
          <Link to="/" className={styles.navLink}>
            All
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link to="/articles/topic/coding" className={styles.navLink}>
            Coding
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link to="/articles/topic/football" className={styles.navLink}>
            Football
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link to="/articles/topic/cooking" className={styles.navLink}>
            Cooking
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
