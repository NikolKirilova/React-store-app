import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../../context/cart_context' 
import { formatPrice } from '../../utils/helpers'
 

const CartTotalsPreview = () => {
  const {total_amount, shipping_fee} = useCartContext();
  return <Wrapper> 
    <div>
      <article>
        <h5>subtotal : <span>{formatPrice(total_amount)}</span></h5>
        <p>shipping fee : <span>Free</span></p>
        <hr />
        <h4>
          Total :{' '}
          <span>{formatPrice(total_amount + shipping_fee)}</span>
        </h4>
      </article>
 
    
    </div>
  </Wrapper>
}

const Wrapper = styled.section`
  margin-top: 1.2rem;
  display: flex;
  justify-content: center;
 
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 0.75rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-start;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
 
 
`

export default CartTotalsPreview;
