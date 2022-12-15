import { Dispatch, FC, SetStateAction } from 'react';
import './TechsButton.scss';

const TechsButton: FC<{
  description: string;
  title: string;
  classes: string;
  onHandleClick: () => void;
  open: Dispatch<SetStateAction<number | null>>;
  img: string;
  imgClasses: string;
}> = ({
  description,
  title,
  classes,
  onHandleClick,
  open,
  img,
  imgClasses,
}) => {
  return (
    <li onClick={onHandleClick} className={classes}>
      <img
        onClick={(e) => {
          e.stopPropagation();
          open(null);
        }}
        className={imgClasses}
        src={img}
        alt={title}
      />
      <button className="techs__btn">{title}</button>
      <p
        onClick={(e) => {
          e.stopPropagation();
          open(null);
        }}
        className="techs__btn techs__back"
      >
        {description}
      </p>
    </li>
  );
};

export default TechsButton;
