import "./Footer.scss";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <footer className="footer">
      <div
        style={pathname !== "/" ? { paddingBottom: "56px" } : {}}
        className="footer__inner"
      >
        <p className="footer__description">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className="footer__wrapper">
          <p className="footer__copyright">© 2020</p>
          <div className="footer__links">
            <Link
              to={"/login"}
              // target="_blank"
              rel="noreferrer"
              className="footer__link"
            >
              Яндекс.Практикум
            </Link>
            <a
              href="https://github.com/melnikovst"
              target="_blank"
              rel="noreferrer"
              className="footer__link"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
