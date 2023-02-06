import './Card.scss';
import image from './card.png';
import { useState } from 'react';
import cn from '../../../utils/cn';

const Card = () => {
  const [liked, setLiked] = useState<boolean>(false);

  return (
    <div className="card">
      <img src={image} alt="" className="card__image" />
      <div className="card__wrapper">
        <p className="card__description">33 слова о дизайне</p>
        <div
          onClick={() => setLiked(!liked)}
          className={cn('card__like', { card__like_active: liked })}
        />
      </div>
      <p className="card__duration">1ч42м</p>
    </div>
  );
};

export default Card;
