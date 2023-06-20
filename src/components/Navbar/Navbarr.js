import React, { useState } from "react";
import MenuData from "./MenuData";
// import { NavLink } from "react-router-dom";
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
                <a
                  href={item.url}
                  className={item.cName}
                  // target={item.target}
                  // to={item.to}
                >
                  {item.title}
                </a>
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
