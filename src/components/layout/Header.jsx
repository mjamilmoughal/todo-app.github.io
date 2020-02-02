import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1 style={headerStyle}>Todo List</h1>
      <Link to="/">Home</Link> | <Link to="/about">About</Link>
    </header>
  );
}

const linkStyle = {
  color: "white"
};

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px"
};

export default Header;
