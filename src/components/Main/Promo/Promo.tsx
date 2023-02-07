import logo from './images/header-main-logo.png';
import './Promo.scss';
import { NavLink } from 'react-router-dom';
import { FC } from 'react';

const Promo: FC = () => {
  return (
    <header className="promo">
      <div className="promo__inner">
        <div className="promo__wrapper">
          <img src={logo} alt="" className="logotype" />
          <nav>
            <ul className="promo__navContainer">
              <li>
                <NavLink className="promo__navButton" to={'/'}>
                  Регистрация
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="promo__navButton promo__navButtonActive"
                  to={'/films'}
                >
                  Войти
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
      </div>
    </header>
  );
};

export default Promo;
