import { LegacyRef, useState } from 'react';
/* import SectionTitle from '../SectionTitle/SectionTitle'; */
import './Techs.scss';
import TechsButton from './TechsButton/TechsButton';
import git from './git.png';
import react from './react.png';
import ts from './typescript-2.svg';
import sass from './sass.png';
import html from './HTML.png';
import express from './express.jpeg';
import mongo from './mongodb.png';

const btns: { title: string; desc: string; img: string }[] = [
  {
    title: 'HTML',
    desc: 'HTML — стандартизированный язык гипертекстовой разметки документов для просмотра веб-страниц в браузере.',
    img: html,
  },
  {
    title: 'SCSS',
    desc: 'Scss является наиболее развитым и стабильным расширением CSS профессионального уровня.',
    img: sass,
  },
  {
    title: 'TS',
    desc: 'TypeScript — это язык программирования со строгой типизацией, в котором исправлены многие недостатки JavaScript.',
    img: ts,
  },
  {
    title: 'React',
    desc: 'React — это JavaScript-библиотека для создания пользовательских интерфейсов.',
    img: react,
  },
  {
    title: 'Git',
    desc: 'Git — это развитая система контроля версий с активной поддержкой и открытым исходным кодом, которую используют тысячи разработчиков из разных точек мира.',
    img: git,
  },
  {
    title: 'Express.js',
    desc: 'Express представляет собой популярный веб-фреймворк, написанный на JavaScript и работающий внутри среды исполнения node.js.',
    img: express,
  },
  {
    title: 'mongoDB',
    desc: 'MongoDB — документоориентированная система управления базами данных, не требующая описания схемы таблиц. Считается одним из классических примеров NoSQL-систем',
    img: mongo,
  },
];

const Techs: React.FC<{
  navigateToStack: LegacyRef<HTMLElement> | undefined;
}> = ({ navigateToStack }) => {
  const [open, setOpen] = useState<number | null>(null);
  const handleClick = (index: number) => {
    setOpen(index);
  };

  return (
    <section ref={navigateToStack} className="techs">
      <div className="techs__inner">
        {/* <SectionTitle className="title" title="Технологии" /> */}
        <div className="techs__content-wrapper">
          <h2 className="techs__title">7 технологий</h2>
          <p className="techs__subtitle">
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
          <ul className="techs__btns">
            {btns.map((text, i) => (
              <TechsButton
                open={setOpen}
                classes={open === i ? 'hovered hovered_clicked' : 'hovered'}
                imgClasses={open === i ? 'img img_active' : 'img'}
                onHandleClick={() => {
                  handleClick(i);
                }}
                key={i}
                description={text.desc}
                title={text.title}
                img={text.img}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Techs;
