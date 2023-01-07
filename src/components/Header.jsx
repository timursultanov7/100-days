import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <header>
      <Link className="home-link" to="/">
        Home
      </Link>

      <h1 className="h1-logo">100 Days of Coding Challenges</h1>
    </header>
  );
};

export default Header;
