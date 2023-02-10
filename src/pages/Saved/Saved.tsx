import './Saved.scss';
import Card from '../../components/Films/Card/Card';
import { useSelector } from 'react-redux';
import { selectFilms } from '../../redux/filmsSlice';

const Saved = () => {
  const { films } = useSelector(selectFilms);

  return (
    <div className="saved">
      <div className="saved__inner">
        <ul className="saved__container">
          {films.slice(0, 3).map((item: TFilm, i: number) => (
            <Card key={i} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Saved;
