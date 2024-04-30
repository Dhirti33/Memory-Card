import "../styles/congrat.css"

const Congrat = () =>{
    const Restart = () =>{
        const congrat = document.querySelector(".congrat")
        congrat.classList.remove('open')
        window.location.reload()

    }
    return(
        <div className="congrat">
            <h1 className="congratText">Congratulations!!</h1>
            <h1 className="congratText">You passed the text</h1>
            <button onClick={Restart} className="congratButton">Play again</button>
        </div>
    )
}

export default Congrat;