import { Link, useNavigate } from 'react-router-dom';
import './Register.scss';
import useFormAndValidation from '../../utils/hooks/useValidation';
import React from 'react';
import cn from '../../utils/cn';
import { useDispatch } from 'react-redux';
import { login, setIsLogged, register } from '../../redux/formSlice';
import { AppDispatch } from '../../redux/store';

const Register = () => {
  const obj = {
    name: '',
    email: '',
    password: '',
  };
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { values, handleChange, errors, isValid, handleBlur } =
    useFormAndValidation(obj);

  const handleValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
    handleBlur(e);
  };

  const onRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('выполнилося');
    try {
      dispatch(
        register({
          name: values.name,
          email: values.email,
          password: values.password,
        })
      );
      dispatch(login({ email: values.email, password: values.password }));
      dispatch(setIsLogged(true));
      navigate('/films');
    } catch (error) {
      console.log(error);
      navigate('/');
    }
  };

  return (
    <section className="register">
      <h2 className="register__title">Добро пожаловать!</h2>
      <form onSubmit={onRegister} className="form" noValidate>
        <fieldset className="fieldset">
          <label htmlFor="name" className="form__label">
            Имя
          </label>
          <input
            type="text"
            id="name"
            className="form__input"
            placeholder="Имя"
            onChange={handleValidation}
            value={values.name}
            minLength={5}
          />
          <span className={cn('form__error', { form__error_active: !isValid })}>
            {errors.name}
          </span>
          <label htmlFor="email" className="form__label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form__input"
            placeholder="Email"
            onChange={handleValidation}
            value={values.email}
          />
          <span className={cn('form__error', { form__error_active: !isValid })}>
            {errors.email}
          </span>
          <label htmlFor="password" className="form__label">
            Пароль
          </label>
          <input
            type="password"
            id="password"
            className="form__input form__input_type_auth"
            placeholder="Пароль"
            onChange={handleValidation}
            value={values.password}
            minLength={5}
          />
          <span className={cn('form__error', { form__error_active: !isValid })}>
            Что-то пошло не так...
          </span>
        </fieldset>
        <button disabled={!isValid} className="form__button">
          Зарегестрироваться
        </button>
      </form>
      <p className="register__caption">
        Уже зарегестрированы?
        <Link to="/sign-in">{' Войти'}</Link>
      </p>
    </section>
  );
};

export default Register;
