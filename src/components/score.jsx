import "../styles/score.css"

export default function Score(props){
    const {counter,highestScore}=props;


    return(
        <div className="score">
            <div className="gameName">
                <h1>One Piece</h1>
                <h2>Memory Test</h2>
            </div>
            <div className="scoreBoard">
                <p className="yourScore">Score:{counter}</p>
                <p className="highScore">High Score:{highestScore}</p>
            </div>
        </div>
    )
}