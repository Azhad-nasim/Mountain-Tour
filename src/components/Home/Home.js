import { NavLink } from "react-router-dom";
import LogoImg from "../../assets/img/Logo_with_Name.png";

import "./Home.css";

function Home() {
  return (
    <>
      <div className="home" id="home">
        <h1 style={{ color: "#867878" }}>LOSANGELES MOUNTAINS</h1>
      </div>
      <div className="header">
        <img src={LogoImg} alt="back-image" className="logo1" />

        <ul className="nav-menuH">
          <li className="nav-links ">
            <a href="#history">01.History</a>
          </li>
          <li className="nav-links ">
            <a href="#team">02.Team</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Home;
