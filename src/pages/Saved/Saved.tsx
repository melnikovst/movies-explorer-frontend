import './Saved.scss';
import Card from '../../components/Films/Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { selectSaved } from '../../redux/savedFilmsSlice';
import { useEffect } from 'react';
import { AppDispatch } from '../../redux/store';
import { selectFilms } from '../../redux/filmsSlice';
import { getSaved } from '../../redux/thunks/savedFilmsThunks';

const Saved = () => {
  const { savedFilms, isChanged, filteredFilms } = useSelector(selectSaved);
  const dispatch = useDispatch<AppDispatch>();
  const { isChecked } = useSelector(selectFilms);

  useEffect(() => {
    dispatch(getSaved());
  }, [isChanged, dispatch]);

  return (
    <div className="saved">
      <div className="saved__inner">
        <ul className="saved__container">
          {!savedFilms.length && <p>У вас нет сохранённых фильмов</p>}
          {isChecked ? (
            filteredFilms.length ? (
              filteredFilms.map((item: TFilm, i: number) => (
                <Card key={i} item={item} />
              ))
            ) : (
              <p>Короткометражных фильмов нет :(</p>
            )
          ) : (
            savedFilms.map((item: TFilm, i: number) => (
              <Card key={i} item={item} />
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Saved;
