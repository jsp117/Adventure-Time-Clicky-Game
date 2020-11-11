import React from "react";
import "../styles/Header.css";



function Header(props) {
  return (
    <header className="header text-center container-fluid">
      <div className="row">
      <h1 className="col">Adventure Time Clicky Game</h1>
      </div>
      <div className="row">
      <h4 className="col-sm-1">Score: {props.score}</h4>
      <div className="col-sm-9"></div>
      <h4 className="col" id="highscore">High Score: {props.highscore}</h4>
      </div>
    </header>
  );
}

export default Header;
