import React from "react";
import "./Header.css";
import { FaSearch, FaGlobe, FaArrowDown } from "react-icons/fa";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
// import { BiImageAdd } from "react-icons/bi";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon"
          src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
        />
      </Link>
      <div className="header__center">
        <input type="text" />
        <FaSearch />
      </div>

      <div className="header__right">
        <p>Become a host</p>
        <FaGlobe />
        <FaArrowDown />
        <Avatar />
        {/* <BiImageAdd /> */}
      </div>
    </div>
  );
}

export default Header;
