import "./Footer.scss";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <footer className="footer">
      <div
        style={
          pathname !== "/" ? { paddingBottom: "56px" } : { paddingBottom: "" }
        }
        className="footer__inner"
      >
        <p className="footer__description">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        {pathname === "/" && (
          <div className="footer__wrapper">
            <p className="footer__copyright">© 2020</p>
            <div className="footer__links">
              <a
                href="https://practicum.yandex.ru/"
                target="_blank"
                rel="noreferrer"
                className="footer__link"
              >
                Яндекс.Практикум
              </a>
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
        )}
      </div>
    </footer>
  );
};

export default Footer;
