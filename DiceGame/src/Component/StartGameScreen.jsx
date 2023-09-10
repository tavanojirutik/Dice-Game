import React from 'react'
import  { styled } from 'styled-components'
// import styles from './Start.Module.css'

const StartGameScreen = ({toggle}) => {
  return (
    <container >
    <div style={{marginLeft: "300px" , marginTop: "100px"}}>
        <img src="./img/dices.png" alt="" />
    </div>
    <div>
        <h1 style={{marginLeft: "70%", fontSize: "400%" , marginTop: "-20%"}}>DiceGame</h1>
        <Button onClick={toggle} style={{backgroundColor: "black" , color:"white" , width: "150px" , height: "40px",borderRadius: "50px",marginLeft: "1200px" , cursor:"pointer"} }>Play Now</Button>
    </div>

    </container>
  )
}

export default StartGameScreen

const Button = styled.button`
    background-color: aliceblue;
    color: black;
    border: 1px solid black;
`