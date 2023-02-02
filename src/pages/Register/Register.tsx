import { Link } from 'react-router-dom';
import './Register.scss';
import useFormAndValidation from '../../utils/useValidation';
import React from 'react';

const Register = () => {
  const { values, handleChange, errors, isValid, handleBlur } =
    useFormAndValidation();

  const handleValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
    handleBlur(e);
  };

  return (
    <section className="register">
      <h2 className="register__title">Добро пожаловать!</h2>
      <form className="form">
        <fieldset className="fieldset">
          <label htmlFor="regEmail" className="form__label">
            Имя
          </label>
          <input
            type="text"
            id="regName"
            className="form__input"
            placeholder="Имя"
            onChange={handleValidation}
            defaultValue={values.name}
            minLength={5}
          />
          <span
            className={
              isValid ? 'form__error' : 'form__error form__error_active'
            }
          >
            {errors.regName}
          </span>
          <label htmlFor="regEmail" className="form__label">
            Email
          </label>
          <input
            type="email"
            id="regEmail"
            className="form__input"
            placeholder="Email"
            onChange={handleValidation}
            defaultValue={values.email}
          />
          <span
            className={
              isValid ? 'form__error' : 'form__error form__error_active'
            }
          >
            {errors.regEmail}
          </span>
          <label htmlFor="regPassword" className="form__label">
            Пароль
          </label>
          <input
            type="password"
            id="regPassword"
            className="form__input form__input_type_auth"
            placeholder="Пароль"
            onChange={handleValidation}
            defaultValue={values.password}
            minLength={10}
          />
          <span
            className={
              isValid ? 'form__error' : 'form__error form__error_active'
            }
          >
            {errors.regPassword}
          </span>
        </fieldset>
        <button className="form__button">Зарегестрироваться</button>
      </form>
      <p className="register__caption">
        Уже зарегестрированы?
        <Link to="/sign-in">{' Войти'}</Link>
      </p>
    </section>
  );
};

export default Register;
