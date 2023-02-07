import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux/es/exports';
import { useLocation } from 'react-router-dom';
import { RootState } from '../../../redux/store';
import { setIsAsideOpen } from '../../../redux/tooltipSlice';
import cn from '../../../utils/cn';
import { useResize } from '../../../utils/hooks/useResize';
import './Burger.scss';

const Burger = () => {
  const { pathname } = useLocation();

  const { isAsideOpen } = useSelector((state: RootState) => state.tooltipSlice);
  const dispatch = useDispatch();
  const { width } = useResize();

  useEffect(() => {
    if (width < 900) dispatch(setIsAsideOpen(false));
  }, [dispatch, width]);

  const hasBurger =
    pathname === '/films' ||
    pathname === '/films/saved' ||
    pathname === '/profile';

  return (
    <div
      className={cn('burger', {
        burger_hidden: !hasBurger,
        burger_opened: isAsideOpen,
      })}
      onClick={() => dispatch(setIsAsideOpen(!isAsideOpen))}
    >
      <span
        className={cn('burger__line burger__line_num_one', {
          burger__line_num_one_active: isAsideOpen,
        })}
      />
      <span
        className={cn('burger__line burger__line_num_two', {
          burger__line_num_two_active: isAsideOpen,
        })}
      />
      <span
        className={cn('burger__line burger__line_num_three', {
          burger__line_num_three_active: isAsideOpen,
        })}
      />
    </div>
  );
};

export default Burger;
