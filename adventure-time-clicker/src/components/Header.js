import React from "react";
import "../styles/Header.css";



function Header(props) {
  return (
    <header className="header">
      <h1>Adventure Time Clicky Game</h1>
      <h2>Score: {props.score}</h2>
      <h2 id="highscore">High Score: {props.highscore}</h2>
    </header>
  );
}

export default Header;
