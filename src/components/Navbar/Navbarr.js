import React, { useState } from "react";
import MenuData from "./MenuData";
import { NavLink } from "react-router-dom";
import LogoS from "../../assets/img/Logo.png";
import "./Nav.css";
import Home from "../Home/Home";
import Team from "../Team/Team";
import History from "../History/History";
import Footer from "../Footer/index";

const Nav1 = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick((current) => !current);
  };
  function openNewTab() {
    window.open("/Mountain-Tour/history", "_blank");
  }
  function openNewTab2() {
    window.open("/Mountain-Tour/team", "_blank");
  }

  return (
    <>
      <nav className="NavbarItems">
        <h1>
          <a href="#home">
            <img src={LogoS} alt="Logo" className="logo" />
          </a>
        </h1>
        <div className="menu-icons" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {MenuData.map((item, index) => {
            return (
              <li key={index}>
                <NavLink
                  // href={item.url}
                  className={item.cName1}
                  // target={item.target}
                  // to={item.to}
                  onClick={openNewTab}
                >
                  {item.title1}
                </NavLink>
                <NavLink
                  // href={item.url}
                  className={item.cName2}
                  // target={item.target}
                  // to={item.to}
                  onClick={openNewTab2}
                >
                  {item.title2}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <Home />
      <History />
      <Team />
      <Footer />
    </>
  );
};

export default Nav1;
