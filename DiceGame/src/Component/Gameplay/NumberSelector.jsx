import React, { useState } from 'react'
import styled from 'styled-components'

const NumberSelector = ({error,setError,selectedNumber , setSelectedNumber}) => {
    //We Can Use For The Number Selecter By Using useState() Hook 
    const NumberAdd = [1,2,3,4,5,6];
    console.log(selectedNumber);

    const numberSelecterHandle = (value)=> {
        setSelectedNumber (value);
        setError("");
    }

  return (
    <NumberSelectContainer>
    <p style={{color: "Red"}}>{error}</p>
    <div className='flex'>
        {/* //Map Function are Use in array for Tracking The array elements  */}
        {NumberAdd.map((value,index) => (<Box isSelected={value === selectedNumber}
        // key={index} 
        onClick={() => numberSelecterHandle(value)}> 
        {value}</Box>))}

       
    </div><br />
    <p>Select Number</p>
    </NumberSelectContainer>
  );
};

export default NumberSelector

const NumberSelectContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: end;

    .flex{
        display: flex;
        gap: 24px;
    }
    p{
        font-size: 25px;
        font-weight: 600;

    }

`;

const Box = styled.div`

    

    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props) =>(props.isSelected ? "black" : "white") };
    color: ${(props) =>(props.isSelected ? "white" : "black") };
    
`;