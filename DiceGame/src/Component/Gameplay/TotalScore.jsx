import styled from 'styled-components'
import GamePlay from './GamePlay'

const TotalScore = ({score}) => {
  return (
    <Firstdiv>
        <h1>{score}</h1>
        <p>Total Score</p>
      </Firstdiv>
  )
}

export default TotalScore

const Firstdiv = styled.div`

    
    margin-left: 40px;
    max-width: 200px;
    text-align: center;
  h1{
    font-size: 100px;
  }  
  p{
    font-size: 25px;
    font-weight: 500;
    
  }

`;
