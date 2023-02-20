import './Grid.scss';
import Card from '../Card/Card';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  concatMore,
  selectFilms,
  setFilteredArray,
  setIsChecked,
  setIsFirst,
  setLoad,
  setValue,
} from '../../../redux/filmsSlice';
import { useResize } from '../../../utils/hooks/useResize';

const Grid = () => {
  const { width } = useResize();
  const { films, load, value, filteredArray, isFirstRequest } =
    useSelector(selectFilms);
  const dispatch = useDispatch();

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
    if (localStorage.getItem('filtered')) {
      dispatch(setIsFirst(true));
      dispatch(
        setLoad(
          JSON.parse(localStorage.getItem('filtered')!).slice(0, cardsCount)
        )
      );
      dispatch(
        setValue(JSON.parse(localStorage.getItem('requestText') as string))
      );
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem('films')) {
      dispatch(setFilteredArray(value));
      console.log(filteredArray, 'from effect');
    }
  }, [films]);

  console.log('films', films);
  console.log('filteredArray', filteredArray);

  useEffect(() => {
    if (filteredArray.length) {
      dispatch(setLoad(filteredArray.slice(0, cardsCount)));
      console.log('ya 100', filteredArray);
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
            load.length === 0
              ? { paddingBottom: '159px' }
              : {}
          }
        >
          {!isFirstRequest && !filteredArray.length
            ? 'введите что-то для поиска'
            : load.map((item, i) => <Card item={item} key={i} />)}
        </ul>
        <button
          onClick={() => dispatch(concatMore(columns))}
          style={
            load.length === filteredArray.length ||
            !isFirstRequest ||
            load.length === 0
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
};

export default Grid;
