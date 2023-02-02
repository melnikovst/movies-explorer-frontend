import { Dispatch, FC, SetStateAction } from 'react';
import './TechsButton.scss';

interface ITButton {
  title: string;
  classes: string;
  onHandleClick: () => void;
  setOpen: Dispatch<SetStateAction<number | null>>;
  img: string;
  imgClasses: string;
  open: number | null;
}

const TechsButton: FC<ITButton> = ({
  title,
  classes,
  onHandleClick,
  open,
  img,
  imgClasses,
  setOpen,
}) => {
  console.log(open);

  return (
    <li onClick={onHandleClick} className={classes}>
      <img
        onClick={(e) => {
          e.stopPropagation();
          setOpen(null);
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
