import logo from '../../images/header-main-logo.png';
import styles from './Promo.module.scss';
import { NavLink } from 'react-router-dom';
import { FC } from 'react';
import { TProjectRef } from '../../@types/propsTypes/props';

const {
  header,
  header__wrapper,
  logotype,
  header__navContainer,
  header__navButton,
  header__navButtonActive,
} = styles;

const Promo: FC<TProjectRef> = ({ navigateToProject }) => {
  return (
    <header ref={navigateToProject} className={header}>
      <div className={header__wrapper}>
        <img src={logo} alt="" className={logotype} />
        <nav>
          <ul className={header__navContainer}>
            <li>
              <NavLink className={header__navButton} to={'/'}>
                Регистрация
              </NavLink>
            </li>
            <li>
              <NavLink
                className={`${header__navButton} ${header__navButtonActive}`}
                to={'/'}
              >
                Войти
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <h1 className={styles.header__title}>
        Учебный проект студента факультета Веб-разработки.
      </h1>
    </header>
  );
};

export default Promo;
