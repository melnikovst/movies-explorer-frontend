import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Profile.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setIsAsideOpen } from '../../redux/tooltipSlice';
import useFormAndValidation from '../../utils/hooks/useValidation';
import cn from '../../utils/cn';
import { AppDispatch } from '../../redux/store';
import { selectForm, signout } from '../../redux/formSlice';
import { setIsFirst } from '../../redux/filmsSlice';

const Profile = () => {
  const { pname, pemail } = useSelector(selectForm);
  const obj = {
    name: pname,
    email: pemail,
  };

  const dispatch = useDispatch();
  const dispatcher = useDispatch<AppDispatch>();
  const { values, handleChange, handleBlur, errors, isValid } =
    useFormAndValidation(obj);
  useEffect(() => {
    dispatch(setIsAsideOpen(false));
  }, [dispatch]);

  const handleExit = async () => {
    dispatch(setIsFirst(true));
    dispatcher(signout());
    console.log('успешно вышли');
  };

  const handleValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
    handleBlur(e);
  };

  return (
    <section className="profile">
      <div>
        <h1 className="profile__title">Привет, Виталий!</h1>
        <form className="form">
          <fieldset className="fieldset">
            <label className="form__label" htmlFor="name">
              Имя
            </label>
            <input
              type="text"
              id="name"
              placeholder="Имя"
              className="form__name form__input"
              onChange={handleValidation}
              value={values.name}
              minLength={5}
            />
          </fieldset>
          <span className={cn('form__error', { form__error_active: !isValid })}>
            {errors.regName}
          </span>
          <fieldset className="fieldset">
            <label className="form__label" htmlFor="name">
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="Email"
              className="form__name form__input"
              onChange={handleValidation}
              value={values.email}
            />
          </fieldset>
          <span className={cn('form__error', { form__error_active: !isValid })}>
            {errors.regEmail}
          </span>
          <Link to="/sign-up" className="form__btn">
            Редактировать
          </Link>
        </form>
      </div>
      <button className="profile__btn" onClick={handleExit}>
        Выйти из аккаунта
      </button>
    </section>
  );
};

export default Profile;
