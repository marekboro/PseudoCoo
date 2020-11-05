import React, { Fragment } from 'react'
import sudoku from '../helpers/sudoku'

import "./Difficulty.css";

const Difficulty = (props) => {

    if (props.cowTimer) {
        props.cowTimer.clearAll()
        props.cowTimer.addImmediately(2, "How brave are you feeling today?", "")
        props.cowTimer.addToQueue(10, "Might I suggest 'Mooooodium Rare'?", "You look like you love a challenge...")
        props.cowTimer.addToQueue(10, "Oh, hurry up and choose!", "maybe I'll just choose for you...")
        props.cowTimer.addToQueue(10, "MOOOOOO", "BAAAAA")
        props.cowTimer.addToQueue(10, "", "", true, 15, 22)
    }

    function setDifficulty(event){
        const generatedString = sudoku.sudoku.generate(event.target.value, true);
        props.chooseMenu("inGame")
        props.createGameString(generatedString);
    }

    function makeChoice(event) {
        props.chooseMenu(event.target.value)
    }

    return (
        <Fragment>
            <div className="menu-grid">
                <button className="return-home" onClick={makeChoice} value="mainMenu"> Return to Menu</button>
            </div>
            <h1>Choose Diffi-cow-lty</h1>
            <section id="buttons">
                <button onClick={setDifficulty} value="easy">Laughing Coooo</button>
                <button onClick={setDifficulty} value="medium">Skimmed Milk</button>
                <button onClick={setDifficulty} value="hard">Moooodium Rare</button>
                <button onClick={setDifficulty} value="very-hard">Udderly difficult</button>
                <button onClick={setDifficulty} value="insane">Mad Coo!!!</button>
                <button onClick={setDifficulty} value="inhuman">Holy Coo!!!!</button>
            </section>
        </Fragment>
    )

}

export default Difficulty;