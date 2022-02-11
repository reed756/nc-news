import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/User";
import styles from "../styles/Header.module.css";

function Header() {
  const { loggedInUser, setloggedInUser } = useContext(UserContext);
  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>NC News</h1>
      <div className={styles.userProfile}>
        <p className={styles.userName}>{loggedInUser.username}</p>
        <img
          src={loggedInUser.avatar_url}
          alt={loggedInUser.name}
          className={styles.userAvatar}
        />
      </div>
      <button className={styles.logOutButton}>
        <Link to={"/login"}>LOG OUT</Link>
      </button>
    </header>
  );
}

export default Header;
