// import React from 'react'
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector'
import { styled } from 'styled-components';
import RoleDice from './RoleDice'
import React, { useState } from 'react'
import Rule from './Rule'


export const GamePlay = () => {
  const [score , setScore]=useState(0)
  const [selectedNumber , setSelectedNumber] = useState();
  const [currentDice , setCurrentDice] = useState(1);
  const [error,setError] = useState();
  const [showRule , setshowRule] = useState();


  const generateRandocmNumber = (min ,max) => {
    // console.log(Math.floor(Math.random()* (max - min)+min));
    return Math.floor(Math.random()* (max - min)+min) ;
}

const roleDice =() => {
    const randomNumber = generateRandocmNumber (1,7);
    setCurrentDice((prev) => randomNumber); 

    if (!selectedNumber){
      setError("Bro.. You Have Not Selected Any Number")
      return;
    } 

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber)
    }else{
      setScore((prev) => prev - 2)
    }

    setSelectedNumber(undefined)  //For User Select and then unselect Number Box
}

  const resetScore = ()=>{
    setScore(0);
  }



  return (
    <TopContainer>
      <div className='t_secation'>
      <TotalScore  score={score} />
    
      <NumberSelector selectedNumber={selectedNumber} 
      setSelectedNumber={setSelectedNumber}  
      setError={setError} 
      error={error}
      />
     
      </div>
      <RoleDice currentDice={currentDice}  roleDice={roleDice} />
      <TopContainer2>
        <div > 
        <button className='ScoreBtn' onClick={resetScore}>Reset </button> 
        </div>
      </TopContainer2>
    
      <TopContainer3>
        <div > 
        <button className='GR' onClick={() => setshowRule((prev) => !prev)}>{showRule ? 'Hide' : 'Show'}  Rules</button>
        </div>
      </TopContainer3>
      {showRule && <Rule/>}
    </TopContainer>
    
  )
}
export default GamePlay;

const TopContainer = styled.main`
  .t_secation{
    display: flex;
    justify-content: space-between;
    align-items: end;
    margin-right: 20px;
  }
`;

const TopContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .ScoreBtn{
    background-color: black;
    color: white;
    
    width: 150px;
    height: 30px;
    border-radius: 10px;
    margin-bottom: 10px;
    margin-top: 10px;
    cursor: pointer;
  }
  & :hover{
    background-color: #ffffff;
    color: black;
  }

`;

const TopContainer3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .GR{
    background-color: black;
    color: white;
    width: 150px;
    height: 30px;
    border-radius: 10px;
    margin-bottom: 10px;
    cursor: pointer;
  }
  & :hover{
    background-color: #ffffff;
    color: black;
  }
`;