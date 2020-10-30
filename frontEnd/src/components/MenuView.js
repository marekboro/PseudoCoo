import React, { Fragment } from 'react'
import ImageUpload from '../containers/ImageUpload'
import Difficulty from "./Difficulty"
import LoadGame from './LoadGame'

/* eslint-disable */

const MenuView = (props) => {

        if (props.cowTimer){
            props.cowTimer.startTimer(2, 12, 12, false, "Welcome to PseudoCoo!", "moooooo")
            .then(() => {if (props.viewOption==="mainMenu") {props.cowTimer.startTimer(10, 15, 25, false, "", "")}})
        }

        function makeChoice(event) {
            props.cowTimer.endTimer()
            props.chooseMenu(event.target.value)
        }
        
        switch (props.viewOption) {
            // case "mainMenu":
            default:
                return (

                    <Fragment>
                        <h1>Menu</h1>
                        <div className="menu-grid">
                            <button className="menu-button" onClick={makeChoice} value="DifficultyMenu" > PLAY </button>
                            <button className="menu-button" onClick={makeChoice} value="ImportImage" > Get PseudoCoo from Image </button>
                            <button className="menu-button" onClick={makeChoice} value="SavedGames" > Continue a Game </button>
                        </div>
                    </Fragment>
                )

            case "DifficultyMenu":
                return (

                    <Fragment>
                        <Difficulty chooseMenu={props.chooseMenu} createGameString={props.createGameString} returnHome={props.chooseMenu} cowTimer={props.cowTimer} viewOption={props.viewOption} />
                    </Fragment>
                )

            case "ImportImage":
                return (
                    <Fragment>
                        <ImageUpload createGameString={props.createGameString} returnHome={props.chooseMenu} cowTimer={props.cowTimer} viewOption={props.viewOption} />
                    </Fragment>
                )

            case "SavedGames":
                return (

                    <Fragment>
                        <LoadGame savedGames={props.savedGames} loadGame={props.loadGame} removeGame={props.removeGame} returnHome={props.chooseMenu} cowTimer={props.cowTimer} viewOption={props.viewOption} />
                    </Fragment>
                )
        }
}

export default MenuView;
