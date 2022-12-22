import "./Header.scss";

import { Link, useLocation } from "react-router-dom";
import logo from "../../Main/Promo/images/header-main-logo.png";
import AccKey from "./AccKey.png";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header
      className={
        pathname === ("/sign-in" || "sign-up") ? "header_type_forms" : "header"
      }
    >
      <div className="header__inner">
        <Link to={"/"}>
          <img src={logo} alt="" className="header__logo" />
        </Link>
        {pathname !== "/sign-in" && (
          <div className="header__nav-wrapper">
            <ul className="header__nav">
              <li>
                <Link to={"/sign-in"} className="header__link">
                  Фильмы
                </Link>
              </li>
              <li>
                <Link to={"/films/saved"} className="header__link">
                  Сохранённые фильмы
                </Link>
              </li>
            </ul>
            <Link to={"/profile"} className="header__account">
              <p className="header__img-description">Аккаунт</p>
              <div className="header__logo-container">
                <img src={AccKey} alt="" className="header__img" />
              </div>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
