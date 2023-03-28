import { useEffect } from 'react';
import './Profile.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setIsAsideOpen } from '../../redux/tooltipSlice';
import useFormAndValidation from '../../utils/hooks/useValidation';
import cn from '../../utils/cn';
import { AppDispatch } from '../../redux/store';
import { selectForm } from '../../redux/formSlice';
import { setIsFirst } from '../../redux/filmsSlice';
import { signout } from '../../redux/thunks/formThunks';

const Profile = () => {
  const { pname, pemail } = useSelector(selectForm);
  const obj = {
    name: pname,
    email: pemail,
  };

  console.log(pname);

  const dispatch = useDispatch<AppDispatch>();
  const { values, handleChange, handleBlur, errors, isValid } =
    useFormAndValidation(obj);
  useEffect(() => {
    dispatch(setIsAsideOpen(false));
  }, [dispatch]);

  const handleExit = async () => {
    dispatch(setIsFirst(true));
    await dispatch(signout());
    localStorage.clear();
    sessionStorage.clear();
    window.location.reload();
    console.log('успешно вышли');
  };

  const onUpdate = async (name: string, email?: string) => {
    const res = await fetch('http://localhost:3001/users/me', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ name, email }),
    });
    console.log(res);
    if (res.ok) {
      const data = res.json();
      return data;
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  };

  const handleUpdate = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    onUpdate(values.name, values.email);
  };

  const handleValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
    handleBlur(e);
  };
  console.log(isValid);

  return (
    <section className="profile">
      <div>
        <h1 className="profile__title">Привет, {values.name}!</h1>
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
            {errors.name}
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
            {errors.email}
          </span>
          <button className="form__btn" onClick={handleUpdate}>
            Редактировать
          </button>
        </form>
      </div>
      <button className="profile__btn" onClick={handleExit}>
        Выйти из аккаунта
      </button>
    </section>
  );
};

export default Profile;
