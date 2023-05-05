import React from "react";
import "./Nav.css";
import HamburgerDrawer from "../drawer/HamburgerDrawer.js";

const Nav = ({ setCategory }) => {
  return (
    <>
      <div className="nav">
        <div className="menu">
          <HamburgerDrawer setCategory={setCategory} />
        </div>
        <img
          src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
          alt=""
          className="logo"
        ></img>
      </div>
    </>
  );
};

export default Nav;
