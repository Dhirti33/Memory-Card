import "../styles/gameOver.css"

const GameOver = ()=>{

    const restart = () =>{
        const GameOver = document.querySelector(".gameOver")
        GameOver.classList.remove('open')
        window.location.reload()

    }
    return(
        <div className="gameOver">
            <h1 className="gameText">Sorry</h1>
            <h1 className="gameText">A card was clicked twice</h1>
            <button className="gameButton" onClick={restart}>Restart</button>
      </div>
    )
}

export default GameOver;