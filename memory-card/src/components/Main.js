import React, { useState } from "react";
import CardsGrid from "./CardsGrid.js";
import Header from "./Header.js";

const Main = () => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [selectedCards, setSelectedCards] = useState([]);

  //Increments the Score
  const handleScore = () => {
    setScore((prevScore) => prevScore + 1);
  };

  //setting high score
  const handleHighScore = () => {
    if (score > highScore) {
      setHighScore(score);
      console.log("New High Score!");
    } else {
      console.log("Did not beat High Score");
    }
  };

  //when player loses
  const reset = () => {
    setScore(0);
    setSelectedCards([]);
  };

  const handleCard = (newCard) => {
    setSelectedCards((selectedCards) => [...selectedCards, newCard]);
    console.log(newCard)
  };

  const handleGame = (newCard) => {
    if (!selectedCards.includes(newCard)) {
      handleCard(newCard);
      handleScore();
      console.log(selectedCards);
    } else {
      console.log(selectedCards);
      handleHighScore();
      reset();
    }
  };
  const shuffleCards = () =>{
    

  }

  return (
    <div>
      <Header score={score} highScore={highScore} />
      <CardsGrid handleGame={handleGame} score={score} highscore={highScore} />
    </div>
  );
};

export default Main;
