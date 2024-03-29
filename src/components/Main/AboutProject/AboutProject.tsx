import SectionTitle from '../SectionTitle/SectionTitle';
import './AboutProject.scss';
import React, { MutableRefObject } from 'react';

const AboutProject: React.FC<{
  navigateToProject: MutableRefObject<HTMLElement | null>;
}> = ({ navigateToProject }) => {
  return (
    <section ref={navigateToProject} className="about">
      <div className="about__inner">
        <SectionTitle className="title" title="О проекте" />
        <div className="about__wrapper">
          <div className="about__textColumn">
            <h3 className="about__subtitle">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="about__description">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className="about__textColumn">
            <h3 className="about__subtitle">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="about__description">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="about__timeWrapper">
          <div className="about__twoColumns">
            <div className="about__leftContainer">
              <p className="about__blackSide">1 неделя</p>
              <p className="about__text">Back-end</p>
            </div>
            <div className="about__rightContainer">
              <p className="about__whiteSide">4 недели</p>
              <p className="about__text">Front-end</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
