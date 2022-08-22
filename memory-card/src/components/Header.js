import React from "react";

function Header(props) {
  const { score, highScore } = props;

  return (
    <header className="header">
      <h1 className="title">Akira Memory Card Game</h1>
      <div className="scoreBoard">
        <p className="currentScore">Score: {score}</p>
        <p className="highScore">High Score: {highScore}</p>
      </div>
    </header>
  );
}

export default Header;
