import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../../context/cart_context'
import { Link } from 'react-router-dom'
import CartColumns from './CartColumns'
import CartItem from './CartItem'
import CartTotals from './CartTotals'

const CartContent = () => {
  const {cart,clearCart} = useCartContext();
  console.log(cart)
  return <Wrapper className='section-cart section-center'>
    <CartColumns />
    {cart.map((item) => {
      return <CartItem key={item.id} {...item} />
    })}
    <hr/>
    <div className="link-container">
      <Link to='/products' className='link-btn'>
        continue shopping
      </Link>
      <button type='button' className="link-btn clear-btn" onClick={clearCart}>
        clear shopping cart
      </button>
    </div>
    <CartTotals />
  </Wrapper>
}
const Wrapper = styled.section`
  .section-cart{
    padding:5rem 0 0 0;
  }
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    color: #999;
    border-radius: var(--radius);
    font-weight: 500;
    cursor: pointer;
  }
  .clear-btn {
    // background: var(--clr-black);
  }
  
`
export default CartContent
