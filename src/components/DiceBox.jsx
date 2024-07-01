/* eslint-disable react/prop-types */
import "./DiceBox.css";

export default function DiceBox(props) {
    return (
        <div id="dice-box-container">
            <div id="list-container">
                <ul id="list">
                    {props.dice.map((die, index) => {
                        return (
                            <li key={index}>{`Die ${index + 1}: ${die}`}</li>
                        )
                    })}
                </ul>
            </div>
            <div id="button-container">
                <button onClick={props.changeDice}>Roll Dice</button>
            </div> 
        </div>
    )
}