import React from "react";
import {  useRef } from "react";
// import { useHistory } from "react-router-dom";
import styled from "styled-components";
 

const FirstTab = (props) => {
   
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  // const authCtx = useContext(AuthContext);
  // const id = localStorage.getItem("localId");

  // const [isLogin, setIsLogin] = useState(true);

   const onBlurHandler = (emailInputRef) => {
    // var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    if(!emailInputRef.current.value.includes('@')){   
      alert(`Enter valid email!`);
    }
    if (emailInputRef.current.value === "") {
       alert(`Your name field is empty!`);
     }  
   }
  

  

  const submitHandler = (event) => {
    event.preventDefault();
    let enteredEmail = emailInputRef.current.value;
    let enteredPassword = passwordInputRef.current.value;
    // const userId = id;

    const userData = {
      email: enteredEmail,
      password: enteredPassword,
    };

    props.onRegisterUser(userData);
   
    emailInputRef.current.value = "";
    passwordInputRef.current.value = "";

     
  };

  return (
    <Wrapper> 
    <form onSubmit={submitHandler}>      
      <div className="control">
        <label htmlFor="email">Your Email</label>
        <input type="email" id="email" required ref={emailInputRef} onBlur={onBlurHandler.bind(this, emailInputRef)} />
      </div>
      <div className="control">
        <label htmlFor="password">Your Password</label>
        <input type="password" id="password" required ref={passwordInputRef}/>
      </div>
      <div className="actions">
        {/* {!isLoading && (
              <button>Continue </button>
            )}
            {isLoading && <p>Sending request ...</p>} */}
        <button
        //   type="button"
        //   className="toggle"
        //   onClick={switchAuthModeHandler}
        >
          {/* {isLogin ? "Create new account" : "Login with existing account"} */}
          Continue
        </button>
      </div>
    </form>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .auth {
    margin: 3rem auto;
    // width: 95%;
    // max-width: 25rem;
    border-radius: 6px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    padding: 1rem;
    text-align: center;
    color: #212529;
    
  }

  .auth h1 {
    text-align: left;
    letter-spacing: 0.1px;
  }
  .personal-info {
    width: 380px;
  }

  .personal-info-tabs {
    display: flex;
    justify-content: space-around;
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

  .actions {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .actions button {
    cursor: pointer;
    font: inherit;
    color: white;
    background-color: #f5554c;
    border-color: #f5554c;
    border-radius: 4px;
    padding: 0.5rem 2.5rem;
  }

  .actions button:hover {
    background-color: #873abb;
    border-color: #873abb;
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
  button::disabled {
    background-color: #999 !important;
    border-color: #999 !important;
  }
  button.button-disabled {
    background-color: #999;
    border-color: #999;
  }
  .button-normal {
    background-color: #9f5ccc;
    border: 1px solid #9f5ccc;
  }
`;
export default FirstTab;
