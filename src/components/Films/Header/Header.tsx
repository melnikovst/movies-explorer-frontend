import './Header.scss';

import { Link } from 'react-router-dom';
import whiteLogo from './whiteLogo.png';
import AccKey from './AccKey.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <Link to={'/'}>
          <img src={whiteLogo} alt="" className="header__logo" />
        </Link>
        <div className="header__nav-wrapper">
          <ul className="header__nav">
            <li>
              <a href="" className="header__link">
                Фильмы
              </a>
            </li>
            <li>
              <a href="" className="header__link">
                Сохранённые фильмы
              </a>
            </li>
          </ul>
          <div className="header__account">
            <p className="header__img-description">Аккаунт</p>
            <div className="header__logo-container">
              <img src={AccKey} alt="" className="header__img" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
