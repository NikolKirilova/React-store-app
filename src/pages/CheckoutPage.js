import React from "react";
import styled from "styled-components";
import {  FormStepTwo,CartPreview } from "../components";
// extra imports
 
 
const CheckoutPage = () => {
  // const { cart } = useCartContext();
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('whole form json');
  // };
  return (
    <main>
      {/* <PageHero title="checkout" /> */}
      <Wrapper className="page">
        {/* {cart.length <1? <div className='empty'>
        <h2>your cart is empty</h2>
        <Link to='/products' className='btn'>
          fill it </Link>
      </div>:<FormStepOne/>} */}
     
        <div className="checkout-page">
          <div className="column-one">
         
          <FormStepTwo/>
          </div>
          <div className="column-two">
             <CartPreview/>
          </div>
        </div>
   
        
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.div`
  // display: flex;
  // align-items: center;
  // justify-content: center;
  .empty {
    text-align: center;
  }
  .checkout-page {
    display: flex;
  }
  .column-one{
    flex:0 0 60%;
  }
  .column-two{
    flex:0 0 40%;
    background-color:#f7f7f7;
  }
`;
export default CheckoutPage;
