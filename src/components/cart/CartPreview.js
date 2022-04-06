import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../../context/cart_context'
import { FaCheck } from "react-icons/fa";
import CartItemPreview from './CartItemPreview'
import CartTotalsPreview from './CartTotalsPreview'

const CartContent = () => {
  const {cart,clearCart} = useCartContext();
  console.log(clearCart);
  return <Wrapper className='section'>
     <h5 className="preview-title">Order summary</h5>
    {cart.map((item) => {
      return <CartItemPreview key={item.id} {...item} />
    })}
    <hr/>    
    <CartTotalsPreview/>
    <div className="delivery-conditions"> 
        <p><FaCheck/>Free delivery on orders over 45£</p>
        <p><FaCheck/>Exchanges and returns within 30 days</p>
        <p><FaCheck/>Personalised products are non-exchangeable</p>
        <p><FaCheck/>Delivery 4 to 5 days on orders placed before 2pm</p>
  
      </div>
  </Wrapper>
}
const Wrapper = styled.section`
 
  padding:4rem 1rem;
 hr{
   width:260px;
 }
  .preview-title{
    margin-bottom:2rem;
  }
  p svg{
    padding-top: 4px;
    margin-right: 5px;
    margin-top: 4px;
  }
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    background: var(--clr-black);
  }
  .delivery-conditions{
    font-size:13px;
    color:#b3b3b3;
    margin:20px 0;
}
`
export default CartContent
