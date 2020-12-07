import React from "react";
import image from "./images/santa.svg";

const Header = () => {
  return (
    <div className="header">
      <a href="/">
        <img src={image} className="header__image" alt="santa" />
      </a>
      <h1>Le Secret Santa</h1>
      <p className="subtitle">des Perruche!</p>
    </div>
  );
};

export default Header;
