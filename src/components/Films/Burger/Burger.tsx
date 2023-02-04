import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux/es/exports';
import { useLocation } from 'react-router-dom';
import { RootState } from '../../../redux/store';
import { setIsAsideOpen } from '../../../redux/tooltipSlice';
import './Burger.scss';

const Burger = () => {
  const { pathname } = useLocation();

  const { isAsideOpen } = useSelector((state: RootState) => state.tooltipSlice);
  const dispatch = useDispatch();
  return (
    <div
      className={`burger ${
        pathname === '/films' || pathname === '/films/saved'
          ? ''
          : 'burger_hidden'
      }`}
      onClick={() => dispatch(setIsAsideOpen(!isAsideOpen))}
    >
      <span
        className={`burger__line burger__line_num_one ${
          isAsideOpen ? 'burger__line_num_one_active' : ''
        }`}
      />
      <span
        className={`burger__line burger__line_num_two ${
          isAsideOpen ? 'burger__line_num_two_active' : ''
        }`}
      />
      <span
        className={`burger__line burger__line_num_three ${
          isAsideOpen ? 'burger__line_num_three_active' : ''
        }`}
      />
    </div>
  );
};

export default Burger;
