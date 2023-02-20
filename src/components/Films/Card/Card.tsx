import './Card.scss';
import { FC, useState } from 'react';
import cn from '../../../utils/cn';

const Card: FC<{ item: TFilm }> = ({ item }) => {
  const [liked, setLiked] = useState<boolean>(false);

  return (
    <li className="card">
      <img
        src={`https://api.nomoreparties.co${item.image.url}`}
        alt="Card preview"
        className="card__image"
      />
      <div className="card__wrapper">
        <p className="card__description">{item.nameRU}</p>
        <button
          onClick={() => setLiked(!liked)}
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
