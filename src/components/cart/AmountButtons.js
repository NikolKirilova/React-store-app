import React from 'react'
import styled from 'styled-components'
import { FaPlus, FaMinus } from 'react-icons/fa'

const AmountButtons = ({increase,decrease,amount}) => {
  return <Wrapper className='amount-btn'>
    <button type='button' className='amount-btn' onClick={decrease}><FaMinus/></button>
    <h4 className='amount'>{amount}</h4>
    <button type='button' className='amount-btn' onClick={increase}><FaPlus/></button>
     </Wrapper>
}

const Wrapper = styled.div`
  display: grid;
  width: 74px;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  border: 2px solid #333;
  border-radius: 20px;
  padding: 0px 4px;
  h4 {
    margin-bottom: 0;
    font-weight:400;
    font-size: 16px;
  }
  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 0.7rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h2 {
    margin-bottom: 0;
  }
`

export default AmountButtons
