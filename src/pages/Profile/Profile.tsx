import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Profile.scss';
import { useDispatch } from 'react-redux';
import { setIsAsideOpen } from '../../redux/tooltipSlice';
import useFormAndValidation from '../../utils/hooks/useValidation';
import cn from '../../utils/cn';

const Profile = () => {
  const obj = {
    name: '',
    email: '',
  };

  const dispatch = useDispatch();
  const { values, handleChange, handleBlur, errors, isValid } =
    useFormAndValidation(obj);
  useEffect(() => {
    dispatch(setIsAsideOpen(false));
  }, [dispatch]);

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
      <Link to="/" className="profile__btn">
        Выйти из аккаунта
      </Link>
    </section>
  );
};

export default Profile;
