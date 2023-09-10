// import { useState } from 'react'
import styled from 'styled-components'
import StartGameScreen from './Component/StartGameScreen'
import { useState } from 'react'
import GamePlay from './Component/Gameplay/GamePlay'
function App() {
  
  //This Code Use For Rediract One Page To Another Page 
  const [isGameStarted,setIsGameStarted]=useState(false)

  const toggleGamePlay = ()=> {
    setIsGameStarted((prev)=>!prev)
  };
  return (
    <>
    {
      isGameStarted ? <GamePlay/> : <StartGameScreen
      toggle={toggleGamePlay} />
    }
    </>
  )
}

export default App
const Button = styled.button`
background-color: black;
color: white;
padding: 10px;


  `;