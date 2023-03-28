import { FC } from 'react';
import './TechsButton.scss';

interface ITButton {
  title: string;
  classes: string;
  onHandleClick: () => void;
  img: string;
  imgClasses: string;
  setIsTechOpen: (i: null) => void;
}

const TechsButton: FC<ITButton> = ({
  title,
  classes,
  onHandleClick,
  img,
  imgClasses,
  setIsTechOpen
}) => {

  return (
    <li onClick={onHandleClick} className={classes}>
      <img
        onClick={(e) => {
          e.stopPropagation();
          setIsTechOpen(null);
        }}
        className={imgClasses}
        src={img}
        alt={title}
      />
      <button className="techs__btn">{title}</button>
    </li>
  );
};

export default TechsButton;
