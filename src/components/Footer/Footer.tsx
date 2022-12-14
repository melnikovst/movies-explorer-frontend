const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__description">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
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
      </div>
    </footer>
  );
};

export default Footer;
