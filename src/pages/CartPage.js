import React, { useContext }  from 'react'
import styled from 'styled-components'
import AuthContext from '../context/auth_context'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import { CartContent  } from '../components'

const CartPage = () => {
  const {cart} = useCartContext();

  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  if(cart.length < 1){
    return <Wrapper className="page-100">
      <div className="empty">
        <h2>Your cart is empty</h2>
        <Link to='/products' className='btn'>
          fill it
        </Link>
      </div>
    </Wrapper>
  }
  return <main>
    
    <Wrapper className='page'>
       
      <div className="section-center">

      <h3>Shopping Cart</h3>
      </div>
        <CartContent />
        <div className='checkout-link section-center'>
        {!isLoggedIn && (
          <Link to="/auth" className="order-btn">
        proceed to checkout
      </Link>)}
      {isLoggedIn && (
          <Link to="/checkout" className="order-btn">
        proceed to checkout
      </Link>)}
        </div>
    </Wrapper>
  </main>
}

const Wrapper = styled.main`
.section-center{
  margin:40px auto;
}
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
  .checkout-link{
    display:flex;
    justify-content:flex-end;
    
  }
  .order-btn{
    cursor: pointer;
    font-size: 13px;
    color: white;
    background-color: #f5554c;
    text-transform: uppercase;
    border-color: #f5554c;
    border-radius: 19px;
    padding: 0.7rem 2.7rem;
    font-weight: 550;
    letter-spacing: 0.3px;
  }
  .order-btn:hover{
    background-color: #f33328;
    border-color: #f33328;
  }
`

export default CartPage
