import React, { useState, useContext } from "react";
import styles from "../styles/Login.module.css";
import { UserContext } from "../contexts/User";
import { getUsers } from "../utils/api";

function Login() {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    getUsers().then(({ users }) => {
      console.log(users);
    });
  }
  function handleChange(event) {
    setUsername(event.target.value);
  }
  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <label className={styles.loginLabel}>Username</label>
      <input className={styles.logininput} onChange={handleChange}></input>
      <button className={styles.loginButton}>LOGIN</button>
    </form>
  );
}

export default Login;
