import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Nav.module.css";

function Nav() {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.navLink}>
        All
      </Link>
      <Link to="/articles/topic/coding" className={styles.navLink}>
        Coding
      </Link>
      <Link to="/articles/topic/football" className={styles.navLink}>
        Football
      </Link>
      <Link to="/articles/topic/cooking" className={styles.navLink}>
        Cooking
      </Link>
    </nav>
  );
}

export default Nav;
