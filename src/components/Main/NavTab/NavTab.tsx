import React, { MutableRefObject } from 'react';
import { TNavTab } from '../../../@types/props';
import './NavTab.scss';

const NavTab: React.FC<TNavTab> = ({
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
