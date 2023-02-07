import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { setIsTechOpen } from '../../../../redux/tooltipSlice';
import './TechsButton.scss';

interface ITButton {
  title: string;
  classes: string;
  onHandleClick: () => void;
  img: string;
  imgClasses: string;
}

const TechsButton: FC<ITButton> = ({
  title,
  classes,
  onHandleClick,
  img,
  imgClasses,
}) => {
  const dispatch = useDispatch();
  return (
    <li onClick={onHandleClick} className={classes}>
      <img
        onClick={(e) => {
          e.stopPropagation();
          dispatch(setIsTechOpen(null));
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
