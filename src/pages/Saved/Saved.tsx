import './Saved.scss';
import Card from '../../components/Films/Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { getSaved, selectSaved } from '../../redux/savedFilmsSlice';
import { useEffect } from 'react';
import { AppDispatch } from '../../redux/store';
import { selectFilms } from '../../redux/filmsSlice';

const Saved = () => {
  const { savedFilms, isChanged } = useSelector(selectSaved);
  const dispatch = useDispatch<AppDispatch>();
  const { isChecked } = useSelector(selectFilms);

  useEffect(() => {
    dispatch(getSaved());
  }, [isChanged]);

  const shortArray = savedFilms.filter((i) => i.duration <= 40);

  return (
    <div className="saved">
      <div className="saved__inner">
        <ul className="saved__container">
          {!savedFilms.length && <p>У вас нет сохранённых фильмов</p>}
          {isChecked ? (
            shortArray.length ? (
              shortArray.map((item: TFilm, i: number) => (
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
