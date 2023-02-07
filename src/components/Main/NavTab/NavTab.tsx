import React, { MutableRefObject } from 'react';
import './NavTab.scss';

interface INavTab {
  navigateToStudent: React.MutableRefObject<HTMLElement | null>;
  navigateToStack: React.MutableRefObject<HTMLElement | null>;
  navigateToProject: React.MutableRefObject<HTMLElement | null>;
}

const NavTab: React.FC<INavTab> = ({
  navigateToProject,
  navigateToStack,
  navigateToStudent,
}) => {
  const navigateHandler = (ref: MutableRefObject<HTMLElement | null>) => {
    ref!.current!.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="nav">
      <div className="nav__wrapper">
        <button
          className="nav__btn"
          onClick={() => navigateHandler(navigateToProject)}
        >
          О проекте
        </button>
        <button
          className="nav__btn"
          onClick={() => navigateHandler(navigateToStudent)}
        >
          Студент
        </button>
        <button
          className="nav__btn"
          onClick={() => navigateHandler(navigateToStack)}
        >
          Технологии
        </button>
      </div>
    </div>
  );
};

export default NavTab;
