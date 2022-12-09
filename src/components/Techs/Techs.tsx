import { LegacyRef, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import './Techs.scss';
import TechsButton from './TechsButton/TechsButton';

const btns: { title: string; desc: string }[] = [
  {
    title: 'HTML',
    desc: 'HTML — стандартизированный язык гипертекстовой разметки документов для просмотра веб-страниц в браузере.',
  },
  {
    title: 'SCSS',
    desc: 'Scss является наиболее развитым и стабильным расширением CSS профессионального уровня.',
  },
  {
    title: 'TS',
    desc: 'TypeScript — это язык программирования со строгой типизацией, в котором исправлены многие недостатки JavaScript.',
  },
  {
    title: 'React',
    desc: 'React — это JavaScript-библиотека для создания пользовательских интерфейсов.',
  },
  {
    title: 'Git',
    desc: 'Git — это развитая система контроля версий с активной поддержкой и открытым исходным кодом, которую используют тысячи разработчиков из разных точек мира.',
  },
  {
    title: 'Express.js',
    desc: 'Express представляет собой популярный веб-фреймворк, написанный на JavaScript и работающий внутри среды исполнения node.js.',
  },
  {
    title: 'mongoDB',
    desc: 'MongoDB — документоориентированная система управления базами данных, не требующая описания схемы таблиц. Считается одним из классических примеров NoSQL-систем',
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
        <SectionTitle title="Технологии" />
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
                onHandleClick={() => {
                  handleClick(i);
                }}
                key={i}
                description={text.desc}
                title={text.title}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Techs;
