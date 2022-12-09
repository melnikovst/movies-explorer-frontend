import { Dispatch, FC, SetStateAction } from 'react';
import './TechsButton.scss';

const TechsButton: FC<{
  description: string;
  title: string;
  classes: string;
  onHandleClick: () => void;
  open: Dispatch<SetStateAction<number | null>>;
}> = ({ description, title, classes, onHandleClick, open }) => {
  console.log(open);

  return (
    <div onClick={onHandleClick} className={classes}>
      <button className="techs__btn">{title}</button>
      <div
        onClick={(e) => {
          e.stopPropagation();
          open(null);
        }}
        className="techs__btn techs__back"
      >
        {description}
      </div>
    </div>
  );
};

export default TechsButton;
