import styled from 'styled-components'

const RoleDice = ({roleDice , currentDice}) => {

    


  return (
    <DiceContainer>
    <div className='dice' onClick={roleDice }>
        <img src={`/img/Dice/dice_${currentDice}.png`} alt="dice 1" />
        <p>Click on Dice to Roll</p>
    </div>
    </DiceContainer>
  )
}

export default RoleDice

const DiceContainer = styled.div`   
    display: flex;
    margin-top: 48px;
    flex-direction: column;
    align-items: center;
    p{
        font-size: 20px;
        text-align: center;
    }
    .dice{
        cursor: pointer;
    }
`;
