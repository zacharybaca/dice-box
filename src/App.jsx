/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import DiceBox from "./components/DiceBox";

function App() {
  
  const [dice, setDice] = useState([null, null, null, null, null]);

  function changeDice() {
    setDice([])
    dice.map((die) => {
      const randomNumber = Math.floor(Math.random() * 6);
      setDice((prevState) => [...prevState, die = randomNumber])
    })
    console.log('Length: ', dice.length)
  }

  return (
    <div>
      <h1>Change Dice Project</h1>
      <DiceBox dice={dice} changeDice={changeDice}/>
    </div>
  )
}

export default App
