import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/User";
import styles from "../styles/Header.module.css";

function Header() {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  function handleClick() {
    setLoggedInUser(null);
  }
  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>NC News</h1>
      {loggedInUser ? (
        <>
          <div className={styles.userProfile}>
            <p className={styles.userName}>{loggedInUser.username}</p>
            <img
              src={loggedInUser.avatar_url}
              alt={loggedInUser.name}
              className={styles.userAvatar}
            />
          </div>
          <button className={styles.logOutButton} onClick={handleClick}>
            <Link to={"/login"}>LOG OUT</Link>
          </button>
        </>
      ) : null}
    </header>
  );
}

export default Header;
