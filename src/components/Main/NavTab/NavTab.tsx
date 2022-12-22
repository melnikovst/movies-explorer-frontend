import React, { MutableRefObject } from "react";
import { TNavTab } from "../../../@types/props";

import styles from "./NavTab.module.scss";

const { nav, nav__wrapper, nav__btn } = styles;

const NavTab: React.FC<TNavTab> = ({
  navigateToProject,
  navigateToStack,
  navigateToStudent,
}) => {
  const navigateHandler = (ref: MutableRefObject<HTMLElement | null>) => {
    ref!.current!.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={nav}>
      <div className={nav__wrapper}>
        <button
          className={nav__btn}
          onClick={() => navigateHandler(navigateToProject)}
        >
          О проекте
        </button>
        <button
          className={nav__btn}
          onClick={() => navigateHandler(navigateToStudent)}
        >
          Студент
        </button>
        <button
          className={nav__btn}
          onClick={() => navigateHandler(navigateToStack)}
        >
          Технологии
        </button>
      </div>
    </div>
  );
};

export default NavTab;
