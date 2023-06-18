import React, { useState } from "react";
import "./Team.css";
import ImgTeam from "../../assets/img/main1.jpg";
import Table2 from "./table2";
import Table1 from "./table1";
const Team = () => {
  const [showFirstInfo, setShowFirstInfo] = useState(true);

  const handleFirstButtonClick = () => {
    setShowFirstInfo(true);
  };

  const handleSecondButtonClick = () => {
    setShowFirstInfo(false);
  };
  return (
    <>
      <div className="team">
        <h1 className="team-h1">
          <span className="number">
            02<i className="fa-solid fa-square"></i>
          </span>

          <span className="heading1">CLIMB</span>
          <br />
          <br />
          <p className="p-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, aliquip ex ea commodo consequat.
          </p>
        </h1>
        <div className="climb">
          <h3>
            <a onClick={handleFirstButtonClick} style={{ fontSize: "20px" }}>
              MOUNTAIN 1
            </a>
          </h3>
          <h3 style={{ marginLeft: "2rem", fontSize: "20px", top: "1rem" }}>
            <a onClick={handleSecondButtonClick}>MOUNTAIN 2</a>
          </h3>
        </div>
        <img src={ImgTeam} className="teamImg" alt="Team-Image" />

        {showFirstInfo ? <Table1 /> : <Table2 />}
      </div>
    </>
  );
};

export default Team;
