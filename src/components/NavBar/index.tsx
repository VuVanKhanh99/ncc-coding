import React from "react";
import "./style.css";

function NavBar() {
  return (
    <nav className="NavbarContainer">
      <ul>
        <li title="Home">Home</li>
        <li title="Services">Services</li>
        <li title="News">News</li>
        <li title="Blog">Blog</li>
        <li title="Contact">Contact</li>
      </ul>
    </nav>
  );
}

export default NavBar;
