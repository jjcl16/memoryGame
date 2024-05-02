import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardsBoard from './CardsBoard'

function App() {
  const [played, setPlayed] = useState([])
  const [topScore, setTopScore] = useState(0)

  if(played.length > topScore) setTopScore(played.length)

  return (
    <>
      <div className="top">
        <h1>Memory Game</h1>
        <div className="score">Score: {played.length}</div>
        <div className="score">Top Score: {topScore}</div>
      </div>    
      <CardsBoard played={played} setPlayed={setPlayed}></CardsBoard>
    </>
  )
}

export default App


// function callDragonBall () {
//   fetch('https://dragonball-api.com/api/characters?limit=12')
//   .then(response => response.json())
//   .then(data => console.log(data));
// }