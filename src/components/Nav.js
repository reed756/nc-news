import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/articles?topic=coding">Coding</Link>
      <Link to="/articles?topic=football">Football</Link>
      <Link to="/articles?topic=cooking">Cooking</Link>
    </nav>
  );
}

export default Nav;
