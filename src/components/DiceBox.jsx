/* eslint-disable react/prop-types */
import "./DiceBox.css";

export default function DiceBox(props) {
    return (
        <div>
            <ul>
                {props.dice.map((die, index) => {
                    return (
                        <li key={index}>{die}</li>
                    )
                })}
            </ul>
            <button onClick={props.changeDice}>Change Dice</button>
        </div>
    )
}