import React from "react";
import axios from "axios";
import { useState, useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import AuthContext from "../context/auth_context";
import { FormStepOne,FormStepTwo,FormStepThree,FormStepFour } from "../components";

const AuthForm = () => {
  const history = useHistory();
   

 const authCtx = useContext(AuthContext);
     
  const [isLoading, setIsLoading] = useState(false);
  const [isActive, setIsActive] = useState("tab1");

  const [value, setValue] = useState(false);

 const handleChange=(newValue)=>{
   setValue(newValue);
 }
   
  const toggleHandler1 = () => {
      setIsActive("tab1")
  }   
  const toggleHandler2 = () => {
    setIsActive("tab2")
}  
const toggleHandler3 = () => {
  setIsActive("tab3")
}  
const toggleHandler4 = () => {
  setIsActive("tab4")
}  


const succeedStepOneHandler=(userData)=>{

  fetch(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAi1TLxgD9IkUz6kypN0VRbDGqalCWdPLM",
    {
      method: "POST",
      body: JSON.stringify({
        ...userData,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => {
      // setIsLoading(false);
      if (res.ok) {
        return res.json();
      } else {
        return res.json().then((data) => {
          //show an error modal
          // console.log(data);
          let errorMessage = "Authentication failed!";
          if (data && data.error && data.error.message) {
            errorMessage = data.error.message;
          }
          // alert(errorMessage);
          throw new Error(errorMessage);
        });
      }
    })
    .then((data) => {
      console.log(data);
      console.log(data.localId);
      console.log(data.idToken);

      const expirationTime = new Date(
        new Date().getTime() + +data.expiresIn * 1000
      );
      authCtx.login(
        data.idToken,
        expirationTime.toISOString(),
        data.email,
        data.localId
      );

      // history.replace('/');
    })
    .catch((err) => {
      alert(err.message);
    });
    setIsActive("tab2");

}
    const succeedLoginHandler=(userInfo)=>{
      console.log(userInfo)
      fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAi1TLxgD9IkUz6kypN0VRbDGqalCWdPLM',
        {
          method: "POST",
          body: JSON.stringify({
            ...userInfo,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
          // setIsLoading(false);
          if (res.ok) {
            return res.json();
          } else {
            return res.json().then((data) => {
              //show an error modal
              // console.log(data);
              let errorMessage = "Authentication failed!";
              if (data && data.error && data.error.message) {
                errorMessage = data.error.message;
              }
              // alert(errorMessage);
              throw new Error(errorMessage);
            });
          }
        })
        .then((data) => {
          console.log(data);
          console.log(data.localId);
          console.log(data.idToken);
    
          const expirationTime = new Date(
            new Date().getTime() + +data.expiresIn * 1000
          );
          authCtx.login(
            data.idToken,
            expirationTime.toISOString(),
            data.email,
            data.localId
          );
    
          // history.replace('/');
        })
        .catch((err) => {
          alert(err.message);
        });
        setIsActive("tab3");
    }

   const addAddressHandler=(addressData)=>{
      const userId= authCtx.data.localId;
    const newAddressData={...addressData,
        user_id:userId 
         }
       axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/users",
      data: {
        ...newAddressData
      },
    }).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
    }

   

  return (
    <Wrapper className="page">
      <section className="auth-forms">
        <div className="header-box" onClick={toggleHandler1}>
        <h4>1. Personal Information</h4>
          </div>
          {isActive === "tab1" && <FormStepOne onSuccess={succeedStepOneHandler}/>}          
         <div className="header-box" onClick={toggleHandler2}>
           <h4>2.Addresses</h4>
          </div>
          {isActive === "tab2" && <FormStepTwo onLoggin={succeedLoginHandler}/>} 
         <div className="header-box" onClick={toggleHandler3}>
         <h4>3. Shipping Method</h4>
          </div>
          {isActive === "tab3" && <FormStepThree onAddAddress={addAddressHandler}/>} 
         <div className="header-box" onClick={toggleHandler4}>
         <h4>4. Payment</h4>
          </div>
          {isActive === "tab4" && <FormStepFour/>} 
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .auth-forms {
    margin: 3rem auto;
   width:100%;
  }
  .header-box{
    padding-top: 14px;
    border-top: 1px solid #f7f7f7;
  }

  
`;
export default AuthForm;
