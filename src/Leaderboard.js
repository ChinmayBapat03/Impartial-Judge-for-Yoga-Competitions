import React from "react";
import Profiles from "./Profiles";
import { Info } from "./db";
import "./leaderboard.css";

const Leaderboard = () => {
  return (
    <>
      <div className="app" id="main">
        <Profiles Info={Info}></Profiles>
      </div>
    </>
  );
};

export default Leaderboard;
