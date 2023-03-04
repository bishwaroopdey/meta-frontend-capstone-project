import React, { useState } from 'react';
import Nav from "./Nav";
import "../assets/styles/Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import primaryLogo from "../assets/images/primary logo.png";

function Header() {
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
    console.log(isActive);
  }

  return (
    <header className="header">
      <img src={primaryLogo} alt="primary-logo" className="primary-logo"/>
      <button className="navbar-toggle" onClick={toggle}>
        <FontAwesomeIcon icon={faBars} size="2x"/>
      </button>
      <Nav isActive={isActive} />
    </header>
  );
}

export default Header;