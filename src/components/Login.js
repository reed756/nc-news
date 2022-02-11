import React, { useState, useContext } from "react";
import styles from "../styles/Login.module.css";
import { UserContext } from "../contexts/User";
import { getUsers } from "../utils/api";
import { useNavigate } from "react-router-dom";

function Login() {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    getUsers()
      .then(({ users }) => {
        const found = users.find((user) => user.username === username);
        setLoggedInUser(found);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
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
