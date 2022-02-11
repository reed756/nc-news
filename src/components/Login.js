import React from "react";
import styles from "../styles/Login.module.css";

function Login() {
  return (
    <form className={styles.loginForm}>
      <label className={styles.loginLabel}>Username</label>
      <input className={styles.logininput}></input>
      <button className={styles.loginButton}>LOGIN</button>
    </form>
  );
}

export default Login;
