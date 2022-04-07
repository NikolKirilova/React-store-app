import React, { useState } from "react";
import { omit } from "lodash";

const useForm = () => {
  //Form values
  const [values, setValues] = useState({});
  //Errors
  const [errors, setErrors] = useState({});

  const validate = (event, name, value) => {
    //a function to validate each input values

    switch (name) {
      case "username":
        if (value.length <= 3) {
          setErrors({
            ...errors,
            username: "Username at least have 3 letters",
          });
        } else {
          let newObj = omit(errors, "username");
          setErrors(newObj);
        }
        break;
      case "postal":
        if (value.length <= 4) {
          setErrors({
            ...errors,
            postal: "Postal code at least have 4 letters",
          });
        } else {
          let newObj = omit(errors, "postal");
          setErrors(newObj);
        }
        break;
        default:
            break;
    }
  };

  //A method to handle form inputs
  const handleChange = (event) => {
    event.preventDefault();

    let name = event.target.name;
    let val = event.target.value;

    //set values in state
    setValues({
      ...values,
      [name]: val,
    });
  }

  const handleSubmit = (event) => {
      if(event) event.preventDefault();

      if(Object.keys(errors).length === 0 && Object.keys(values).length !== 0){
          callback();
      }else{
          alert("There is an Error")
      }
  }
  return {
    values,
    errors,
    handleChange,
    handleSubmit
  };
};

export default useForm;
