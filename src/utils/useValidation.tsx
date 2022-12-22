import React, { useState, useCallback } from "react";

type Values = {
  email?: string;
  name?: string;
  password?: string;
  id?: any;
};

type Errors = {
  regName: string;
  regEmail: string;
  regPassword: string;
};

export function useFormAndValidation() {
  const [values, setValues] = useState<Values>({
    email: "",
    name: "",
    password: "",
  });
  const [errors, setErrors] = useState<Errors>({
    regName: "",
    regPassword: "",
    regEmail: "",
  });
  const [isValid, setIsValid] = useState<boolean>(true);

  const handleChange = (e: { target: { id: string; value: string } }) => {
    const { id, value } = e.target;
    setValues({ ...values, [id]: value });
  };

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = e.target;
    setErrors({ ...errors, [id]: e.target.validationMessage });
    setIsValid((e.target as HTMLElement).closest("form")!.checkValidity());
  };

  const resetForm = useCallback(
    (
      newValues: Values = {
        email: "",
        name: "",
        password: "",
      },
      newErrors: Errors = { regName: "", regPassword: "", regEmail: "" },
      newIsValid = false
    ) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    setValues,
    setIsValid,
    handleBlur,
  };
}

export default useFormAndValidation;
