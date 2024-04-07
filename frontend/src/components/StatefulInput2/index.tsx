import React, { useEffect, useRef } from "react";
import { Input2 } from "../Input2";
import { useUserContext } from "contexts/UserContext";

export const StatefulInput2 = ({
  fieldName,
  updateState,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);


  const handleChange = (e) => {
    updateState(fieldName)(e.target.value);
  };

  return <Input2 ref={inputRef} onChange={handleChange} {...props} />;
};