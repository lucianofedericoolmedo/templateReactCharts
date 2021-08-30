import React from "react";
import "./Navbar.scss";

export const Navbar = (props) => {
  return (
    <nav className={"gaia-navbar " + (props.className || "")}>
      <ul className="gaia-navbar-link-list">
        {props.navOptions.map((option) => (
          <li className="gaia-navbar-link">
            <img src={option.pageIcon} className="gaia-navbar-link-icon" />
            <span className="gaia-navbar-link-text">{option.pageName}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};
