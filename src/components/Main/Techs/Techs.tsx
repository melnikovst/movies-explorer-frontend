import React, { LegacyRef, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import './Techs.scss';
import TechsButton from './TechsButton/TechsButton';
import git from './git.png';
import react from './react.png';
import ts from './typescript-2.svg';
import sass from './sass.png';
import html from './HTML.png';
import express from './express.jpeg';
import mongo from './mongodb.png';
import cn from '../../../utils/cn';

const btns: { title: string; img: string }[] = [
  {
    title: 'HTML',
    img: html,
  },
  {
    title: 'SCSS',
    img: sass,
  },
  {
    title: 'TS',
    img: ts,
  },
  {
    title: 'React',
    img: react,
  },
  {
    title: 'Git',
    img: git,
  },
  {
    title: 'Express.js',
    img: express,
  },
  {
    title: 'mongoDB',
    img: mongo,
  },
];

const Techs: React.FC<{
  navigateToStack: LegacyRef<HTMLElement>;
}> = ({ navigateToStack }) => {
  const [isTechOpen, setIsTechOpen] = useState<number | null>(null);
  const handleClick = (index: number): void => {
    setIsTechOpen(index);
  };

  return (
    <section ref={navigateToStack} className="techs">
      <div className="techs__inner">
        <SectionTitle className="title" title="Технологии" />
        <div className="techs__content-wrapper">
          <h2 className="techs__title">7 технологий</h2>
          <p className="techs__subtitle">
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
          <ul className="techs__btns">
            {btns.map((text, i) => (
              <TechsButton
                classes={cn('hovered', { hovered_clicked: isTechOpen === i })}
                imgClasses={cn('img', { img_active: isTechOpen === i })}
                onHandleClick={() => {
                  handleClick(i);
                }}
                setIsTechOpen={setIsTechOpen}
                key={i}
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
