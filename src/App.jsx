import { useState } from "react";

import "./App.css";
import Score from "./components/score";
import Card from "./components/card";
import GameOver from "./components/gameOver";
import Congrat from "./components/congrat";

function App() {
  const [counter, setCounter] = useState(0);
  const [highestScore, setHighestScore] = useState(0);

  const shuffledDeck = (count) => {
    setCounter(count);
  };

  const handleCardClick = (savedHighScore) => {
    setHighestScore(savedHighScore);
  };

  return (
    <div className="cover">
      <Score counter={counter} highestScore={highestScore} />
      <Card isCount={shuffledDeck} isHighestScore={handleCardClick} />
      <GameOver/>
      <Congrat/>
    </div>
  );
}

export default App;
