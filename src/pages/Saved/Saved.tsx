import './Saved.scss';
import Card from '../../components/Films/Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { getSaved, selectSaved } from '../../redux/savedFilmsSlice';
import { useEffect } from 'react';
import { AppDispatch } from '../../redux/store';

const Saved = () => {
  const { savedFilms, isChanged } = useSelector(selectSaved);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getSaved());
  }, [isChanged]);

  return (
    <div className="saved">
      <div className="saved__inner">
        <ul className="saved__container">
          {savedFilms.map((item: TFilm, i: number) => (
            <Card key={i} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Saved;
