import React, { useState } from "react";

const useValidation = (props) => {
  const [stateB, setState] = useState({ email: "", password: "" });

  const handleOnChange = (event) => {
    event.preventDefault();

    let name = event.target.name;
    let value = event.target.value;
    props.validator(name, value);
    setState({
      ...stateB,
      [name]: value,
    });
  };

  return {
    stateB,
    handleOnChange,
  };
};

export default useValidation;
