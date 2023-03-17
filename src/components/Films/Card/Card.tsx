import './Card.scss';
import { FC, useState } from 'react';
import cn from '../../../utils/cn';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { useLocation } from 'react-router-dom';
import { postSaved, deleteSaved } from '../../../redux/savedFilmsSlice';

const Card: FC<{ item: any }> = ({ item }) => {
  const [liked, setLiked] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const { pathname } = useLocation();

  const saveCard = () => {
    const card = {
      movieId: item.id,
      country: item.country,
      director: item.director,
      nameRU: item.nameRU,
      nameEN: item.nameEN,
      description: item.description,
      image: `https://api.nomoreparties.co${item.image.url}`,
      duration: item.duration,
      trailerLink: item.trailerLink,
      thumbnail: `https://api.nomoreparties.co/beatfilm-movies${item.image.formats.thumbnail.url}`,
      year: item.year,
    };
    setLiked(!liked);
    dispatch(postSaved(card));
  };

  const handledeleteCard = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    console.log(item);
    dispatch(deleteSaved(item));
  };

  return (
    <li className="card" onClick={handledeleteCard}>
      <img
        src={
          pathname === '/films/saved'
            ? item.image
            : `https://api.nomoreparties.co${item.image.url}`
        }
        alt="Card preview"
        className="card__image"
      />
      <div className="card__wrapper">
        <p className="card__description">{item.nameRU}</p>
        <button
          onClick={saveCard}
          className={cn('card__like', { card__like_active: liked })}
        />
      </div>
      <p className="card__duration">
        {Math.floor(item.duration / 60) > 0
          ? `${Math.floor(item.duration / 60)}ч`
          : null}
        {item.duration % 60}м
      </p>
    </li>
  );
};

export default Card;
