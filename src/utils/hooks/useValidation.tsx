import React, { useState, useCallback } from 'react';

type Values = {
  email?: string;
  name?: string;
  password?: string;
  id?: string;
};

type Errors<T> = {
  [key: string]: T;
};

export function useFormAndValidation(object: Values) {
  const [values, setValues] = useState<Values>(object);
  const [errors, setErrors] = useState<Errors<string | undefined>>({});
  const [isValid, setIsValid] = useState<boolean>(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setValues({ ...values, [id]: value });
    setErrors({ ...errors, [id]: e.target.validationMessage });
    setIsValid((e.target as HTMLElement).closest('form')!.checkValidity());
  };

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = e.target;
    setErrors({ ...errors, [id]: e.target.validationMessage });
    setIsValid((e.target as HTMLElement).closest('form')!.checkValidity());
  };

  const resetForm = useCallback(
    (
      newValues: Values = {
        email: '',
        name: '',
        password: '',
      },
      newErrors = {},
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
