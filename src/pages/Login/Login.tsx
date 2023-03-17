import { Link, useNavigate } from 'react-router-dom';
import '../Register/Register.scss';
import useFormAndValidation from '../../utils/hooks/useValidation';
import React from 'react';
import cn from '../../utils/cn';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { login, setIsLogged } from '../../redux/formSlice';

const Login = () => {
  const obj = {
    name: '',
    email: '',
    password: '',
  };
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { values, handleChange, errors, isValid, handleBlur } =
    useFormAndValidation(obj);
  console.log(values);

  const handleValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
    handleBlur(e);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      dispatch(login({ email: values.email, password: values.password }));
      dispatch(setIsLogged(true));
      navigate('/films');
    } catch (error) {
      console.log('аззааз');
    }
  };

  return (
    <section className="register">
      <h2 className="register__title">Рады видеть!</h2>
      <form onSubmit={onSubmit} className="form" noValidate>
        <fieldset className="fieldset">
          <label htmlFor="email" className="form__label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form__input"
            placeholder="Email"
            onChange={(e) => handleChange(e)}
            defaultValue={values.email}
          />
          <span className={cn('form__error', { form__error_active: !isValid })}>
            {errors.regEmail}
          </span>
          <label htmlFor="password" className="form__label">
            Пароль
          </label>
          <input
            type="password"
            id="password"
            className="form__input form__input_type_auth"
            placeholder="Пароль"
            defaultValue={values.password}
            onBlur={handleValidation}
            minLength={5}
          />
          <span className={cn('form__error', { form__error_active: !isValid })}>
            Что-то пошло не так...
          </span>
        </fieldset>
        <button disabled={!isValid} className="form__button">
          Войти
        </button>
      </form>
      <p className="register__caption">
        Уже зарегестрированы?
        <Link to="/sign-up">{' Регистрация'}</Link>
      </p>
    </section>
  );
};

export default Login;
