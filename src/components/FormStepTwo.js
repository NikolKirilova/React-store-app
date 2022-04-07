import React from "react";
import axios from "axios";
import { useState, useRef } from "react";
// import { useHistory } from "react-router-dom";
import styled from "styled-components";
// import AuthContext from "../context/auth_context";
 

const FormStepTwo = () => {
  // const history = useHistory();
  
  const nameInputRef = useRef();
  const addressInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();
  const phoneInputRef = useRef();
  const paymentInputRef = useRef();


  // const authCtx = useContext(AuthContext);
  // const id = localStorage.getItem("localId");
  const userEmail = localStorage.getItem("email");
  console.log(userEmail)

   

  // const [isLogin, setIsLogin] = useState(true);
  // const [currentName, setCurrentName] = useState();

  const [isLoading, setIsLoading] = useState(false);
  console.log(isLoading);
  const submitHandler = (event) => {
    event.preventDefault();
    const name = nameInputRef.current.value;
    const address = addressInputRef.current.value;
    const postalCode = postalCodeInputRef.current.value;
    const city = cityInputRef.current.value;
    const phone = phoneInputRef.current.value;
    const payment = paymentInputRef.current.value;
    // const userId = id;

    const addressData = {
      name: name,
      address: address,
      postal_code: postalCode,
      city: city,
      phone: phone,
      payment:payment,
    };

    //add validation

    setIsLoading(true);
    axios('http://127.0.0.1:8000/api/order',{
      method: "post",
      // url: "https://restapi-new.herokuapp.com/api/order",
      
      data: {addressData},
      headers: {
        "Content-Type": "application/json",
      },
    }).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <Wrapper className="">
      <section className="auth">
        <div className="personal-info">
          <div className="personal-info-tabs">
            <h4 className="new-customer-title">Order information</h4>
            <div>
              <form onSubmit={submitHandler}>
              <div className="control">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    ref={nameInputRef}
                  
                  />
                </div> 
                <div className="control">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    id="address"
                    required
                    ref={addressInputRef}
                  />
                </div>
                <div className="control">
                  <label htmlFor="postal-code">Postal Code</label>
                  <input
                    type="text"
                    id="postal-code"
                    required
                    ref={postalCodeInputRef}
                  />
                </div>
                <div className="control">
                  <label htmlFor="city">City</label>
                  <input type="text" id="city" required ref={cityInputRef} />
                </div>
                <div className="control">
                  <label htmlFor="phone">Phone</label>
                  <input type="text" id="phone" required ref={phoneInputRef} />
                </div>
                <div className="control-checkbox">
                  <input
                    type="checkbox"
                    defaultChecked={true}
                    value="Track and Trace Europe"
                    className="checkbox-input"
                  />
                  <label htmlFor="transport">Track and Trace Europe</label>
                </div>
                <div className="control-checkbox">
                  <input 
                  type="checkbox" 
                  id="payment"
                   required
                    // ref={paymentInputRef} 
                    defaultChecked={true}
                    className="checkbox-input"/>
                  <label htmlFor="payment">Payment with Bank transfer</label>
                </div>
                {/* <div className="new-customer-title">
                  Pay with PayPal
                  <PayPalButtons style={{ layout: "horizontal" }} />
                 
                </div> */}
                <div className="actions">
                  {/* {!isLoading && (
              <button>Continue </button>
            )}
            {isLoading && <p>Sending request ...</p>} */}
                  <button
                  //   type="button"
                    className="order-btn"
                  //   onClick={switchAuthModeHandler}
                  >
                  Order with an obligation to pay
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .auth {
    margin: 3rem auto;
  display:flex;
  justify-content:flex-end;
    border-radius: 6px;
    // box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    padding: 1rem;
    text-align: center;
    color: #212529;
  }
  .tab {
    color: #666;
    background: #000;
  }
 

  .auth h1 {
    text-align: left;
    letter-spacing: 0.1px;
  }
  .personal-info {
    width: 380px;
    margin-right:70px;
  }
.personal-info-tabs h4{
  margin-bottom:2rem;
}
 

  .control {
    margin-bottom: 0.5rem;
    display: flex;
  }

  .control label {
    flex: 0 0 35%;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .control input {
    font: inherit;
    background-color: #f7f7f7;
    color: #38015c;
    border-radius: 20px;
    border: none;
    width: 100%;
    text-align: left;
    padding: 0.25rem;
  }
  .control input:focus {
    color: #495057;
    background-color: #fff;
    border-color: #404040;
    box-shadow: 0 0 0 0.2rem rgb(0 0 0 /25%);
  }
  .control input:focus-visible {
    border: none;
  }
  .control-checkbox{
    border: 1px solid #333;
    border-radius: 4px;
    padding: 9px 20px;
    text-align: left;
    font-size: 14px;
    margin-top: 24px;
    margin-left: 46px;
  }
  .checkbox-input{
    margin-right:10px;
  }

  .actions {
    margin-top: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  

  .actions .toggle {
    margin-top: 1rem;
    background-color: transparent;
    color: #9f5ccc;
    border: none;
    padding: 0.15rem 1.5rem;
  }

  .actions .toggle:hover {
    background-color: transparent;
    color: #ae82cc;
  }
  .order-btn{
    cursor: pointer;
    font-size: 13px;
    color: white;
    background-color: #f5554c;
    text-transform: uppercase;
    border:1px solid #f5554c;
    border-radius: 19px;
    padding: 0.7rem 2.7rem;
    font-weight: 550;
    letter-spacing: 0.3px;
  }
  .order-btn:hover{
    background-color: #f33328;
    border-color: #f33328;
  }
`;
export default FormStepTwo;
