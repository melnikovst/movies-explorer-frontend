import './Grid.scss';
import Card from '../Card/Card';
import { memo, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  concatMore,
  selectFilms,
  setFiltered,
  setFilteredArray,
  setIsFirst,
  setLoad,
  setValue,
} from '../../../redux/filmsSlice';
import { useResize } from '../../../utils/hooks/useResize';
import { getSaved } from '../../../redux/savedFilmsSlice';
import { AppDispatch } from '../../../redux/store';

const Grid = memo(() => {
  const { width } = useResize();
  const { films, load, value, filteredArray, isFirstRequest } =
    useSelector(selectFilms);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getSaved());
  }, []);

  const getCardsCount = useCallback((): number => {
    if (width < 1290 && width > 1008) {
      return 12;
    }
    if (width < 1007 && width > 630) {
      return 8;
    }
    if (width < 629) {
      return 5;
    } else return 16;
  }, [width]);

  const cardsCount = getCardsCount();

  const handleMore = (): number => {
    if (width < 1290 && width >= 1008) {
      return 3;
    }
    if (width < 1008) {
      return 2;
    } else return 4;
  };

  const columns = handleMore();

  useEffect(() => {
    if (localStorage.getItem('films') && !localStorage.getItem('filtered')) {
      dispatch(setIsFirst(true));
      dispatch(setFilteredArray(value));
    }
    if (localStorage.getItem('filtered')) {
      dispatch(setIsFirst(true));
      dispatch(
        setFiltered(JSON.parse(localStorage.getItem('filtered') as string))
      );
      dispatch(
        setValue(JSON.parse(localStorage.getItem('requestText') as string))
      );
    }
  }, [films]);

  useEffect(() => {
    if (filteredArray.length) {
      dispatch(setLoad(filteredArray.slice(0, cardsCount)));
      localStorage.setItem('filtered', JSON.stringify(filteredArray));
    }
  }, [filteredArray]);

  return (
    <section className="grid">
      <div className="grid__inner">
        <ul
          className="grid__container"
          style={
            load.length === filteredArray.length ||
            !isFirstRequest ||
            load.length === 0 ||
            !filteredArray.length
              ? { paddingBottom: '159px' }
              : {}
          }
        >
          {!filteredArray.length
            ? 'Введите запрос для поиска'
            : load.map((item, i) => <Card item={item} key={i} />)}
        </ul>
        <button
          onClick={() => dispatch(concatMore(columns))}
          style={
            load.length === filteredArray.length ||
            !isFirstRequest ||
            load.length === 0 ||
            !filteredArray.length
              ? { display: 'none' }
              : { display: 'block' }
          }
          className="grid__button"
        >
          Ещё
        </button>
      </div>
    </section>
  );
});

export default Grid;
