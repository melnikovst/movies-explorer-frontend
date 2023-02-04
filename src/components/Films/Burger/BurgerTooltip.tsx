import './BurgerTooltip.scss';
import { useResize } from '../../../utils/hooks/useResize';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { NavLink } from 'react-router-dom';
import { setIsAsideOpen } from '../../../redux/tooltipSlice';
import { useState } from 'react';

interface Arr {
  desc: string;
  path: string;
}

const arr: Arr[] = [
  { desc: 'Главная', path: '/' },
  { desc: 'Фильмы', path: '/films' },
  { desc: 'Сохранённые фильмы', path: '/films/saved' },
];

const BurgerTooltip = () => {
  const { isAsideOpen } = useSelector((state: RootState) => state.tooltipSlice);
  const dispatch = useDispatch();
  const { isScreenLg } = useResize();
  const [isActive, setIsActive] = useState<number>(1);
  const handleMove = (i: number): void => {
    dispatch(setIsAsideOpen(false));
    setIsActive(i);
  };

  return (
    <aside
      style={isScreenLg ? { display: 'none' } : {}}
      className={`aside ${isAsideOpen ? 'aside_active' : ''}`}
    >
      <div className="aside__container">
        <nav className="aside__wrapper">
          {arr.map((text, i) => (
            <NavLink
              className={`aside__link ${
                i === isActive ? 'aside__link_active' : ''
              }`}
              to={text.path}
              onClick={() => handleMove(i)}
              key={i}
            >
              {text.desc}
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default BurgerTooltip;
