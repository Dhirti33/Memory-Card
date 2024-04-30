import actors from "./action";
import "../styles/card.css";
import { useEffect, useState } from "react";

export default function Card(props) {
  const [deck, setDeck] = useState(actors);
  const [counter, setCounter] = useState(0);
  const [highestScore, setHighestScore] = useState(0);

  console.log(highestScore);
  // ============== Shuffles the Card ===============
  const shuffleDeck = () => {
    const shuffledDeck = [...deck];

    for (let i = shuffledDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
    }
    console.log(deck);
    setDeck(shuffledDeck);
  };
  //============================================================
  //============= Save High score to local storage=============
  const setHighScore = (value) => {
    localStorage.setItem("highScore", value);
  };
  //===========================================================
  //===========Checked if card has been clicked then shuffle======
  const GameOver = document.querySelector(".gameOver")
  const congrat = document.querySelector(".congrat")
  const handleCardClick = (id) => {
    deck.map((actor) => {
      if (actor.id === id) {
        const count = counter + 1;
        if (!actor.isClicked) {
          actor.isClicked = true;
          
          setCounter(count);
          props.isCount(count);
          if(count === 6){
            congrat.classList.add('open')
            
          }
          shuffleDeck(); // Call shuffleDeck when the card is clicked
          setHighScore(count);
        } else {
          GameOver.classList.add('open')
          if (counter > highestScore) {
            setHighScore(counter);
            setHighestScore(counter)
          }
        }
        return actor;
      }
      return actor;
    });
  };
  



  useEffect(() => {
    // Retrieve the highScore from localStorage when the component mounts
     const savedHighScore = localStorage.getItem("highScore");
    setHighestScore(savedHighScore);
    props.isHighestScore(savedHighScore);
  }, []);

  return (
    <div className="cardContainer">
      {deck.map((actor) => (
        <div
          className="card"
          key={actor.id}
          onClick={() => handleCardClick(actor.id)}
        >
          <div className={deck.isClicked ? "clicked-card" : "unclicked-card"}>
            <img src={actor.img} alt="" className="actorImg" />
          </div>
          <div className="actorName">{actor.name}</div>
        </div>
      ))}
      
    </div>
  );
}
