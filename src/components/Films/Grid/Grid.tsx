import './Grid.scss';
import Card from '../Card/Card';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectFilms } from '../../../redux/filmsSlice';
import { useResize } from '../../../utils/hooks/useResize';

const Grid = () => {
  const { width } = useResize();
  const { films } = useSelector(selectFilms);
  const [load, setLoad] = useState<TFilm[]>([]);

  const handleColumns = useCallback((): number => {
    if (width < 1290) {
      return 12;
    }
    return 16;
  }, [width]);

  useEffect(() => {
    handleColumns();
  }, [width, handleColumns]);

  const columns = handleColumns();

  const getCardsCount = (): number => {
    if (width < 1290) {
      return 3;
    }
    if (width < 1008) {
      return 2;
    } else return 4;
  };

  const count = getCardsCount();

  useEffect(() => {
    setLoad(films.slice(0, columns));
  }, [films, columns]);

  const loadMore = () => {
    setLoad((state: TFilm[]) => [
      ...state,
      ...[...films.slice(state.length, state.length + count)],
    ]);
  };

  return (
    <section className="grid">
      <div className="grid__inner">
        <ul
          className="grid__container"
          style={load.length === 100 ? { paddingBottom: '159px' } : {}}
        >
          {load.map((item, i) => (
            <Card item={item} key={i} />
          ))}
        </ul>
        <button
          onClick={loadMore}
          style={
            load.length === 100 ? { display: 'none' } : { display: 'block' }
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
