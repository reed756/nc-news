import React, { useContext } from "react";
import { UserContext } from "../contexts/User";

function Header() {
  const { loggedInUser, setloggedInUser } = useContext(UserContext);
  return (
    <header>
      <h1>Northcoders News</h1>
      <div>
        <p>You are logged in as {loggedInUser.username}</p>
        <button>LOG OUT</button>
      </div>
      <img src={loggedInUser.avatar_url} alt={loggedInUser.name} />
    </header>
  );
}

export default Header;
