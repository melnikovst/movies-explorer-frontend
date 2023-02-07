import './Header.scss';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../Main/Promo/images/header-main-logo.png';
import AccKey from './AccKey.svg';
import Burger from '../Burger/Burger';
import BurgerTooltip from '../Burger/BurgerTooltip';
import cn from '../../../utils/cn';

const Header = () => {
  const { pathname } = useLocation();
  const handleHeader = (): string => {
    if (pathname === '/sign-in') return 'header_type_forms';
    if (pathname === '/sign-up') return 'header_type_forms';
    if (pathname === '/films/saved') return 'header';
    if (pathname === '/films') return 'header';
    if (pathname === '/profile') return 'header';
    return 'hide';
  };

  const isForm = pathname === '/sign-in' || pathname === '/sign-up';

  return (
    <header className={handleHeader()}>
      <div className={cn('header__inner', { header__inner_form: isForm })}>
        <Link to={'/'}>
          <img src={logo} alt="header logo" className="header__logo" />
        </Link>
        {pathname === '/sign-in' || pathname === '/sign-up' ? null : (
          <div className="header__nav-wrapper">
            <ul className="header__nav">
              <li>
                <Link
                  to={'/films'}
                  className={cn('header__link', {
                    header__link_hidden: pathname === '/films',
                  })}
                >
                  Фильмы
                </Link>
              </li>
              <li>
                <Link to={'/films/saved'} className="header__link">
                  Сохранённые фильмы
                </Link>
              </li>
            </ul>
            <Link to={'/profile'} className="header__account">
              <p className="header__img-description">Аккаунт</p>
              <div className="header__logo-container">
                <img src={AccKey} alt="Icon account" className="header__img" />
              </div>
            </Link>
          </div>
        )}
        <Burger />
        <BurgerTooltip />
      </div>
    </header>
  );
};

export default Header;
