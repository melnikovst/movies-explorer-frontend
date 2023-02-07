import React, { MutableRefObject } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import './Student.scss';
import vitalik from './vitalik.png';
import arrow from './strelka.svg';

const array = [
  'Статичный сайт',
  'Адаптивный сайт',
  'Одностраничное приложение',
];

const Student: React.FC<{
  navigateToStudent: MutableRefObject<HTMLElement | null>;
}> = ({ navigateToStudent }) => {
  return (
    <section ref={navigateToStudent} className="student">
      <div className="student__inner">
        <SectionTitle className="title" title="Студент" />
        <div className="student__wrapper">
          <div className="student__text-wrapper">
            <p className="student__title">Виталий</p>
            <p className="student__subtitle">Фронтенд разработчик, 30 лет</p>
            <p className="student__description">
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У
              меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
              бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
              Контур». После того, как прошёл курс по веб-разработке, начал
              заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
          </div>
          <img src={vitalik} alt="Student" className="student__image" />
        </div>
        <ul className="student__project">
          Портфолио
          {array.map((item, index) => (
            <li key={index}>
              <a
                href="https://github.com/melnikovst/how-to-learn"
                className="student__link"
                target="_blank"
                rel="noreferrer"
              >
                <SectionTitle className="student__text" title={item} />
                <img src={arrow} alt="Arrow icon" className="student__img" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Student;
