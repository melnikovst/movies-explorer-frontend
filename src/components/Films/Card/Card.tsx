import './Card.scss';
import { FC, useState } from 'react';
import cn from '../../../utils/cn';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { useLocation } from 'react-router-dom';
import {
  postSaved,
  deleteSaved,
  selectSaved,
} from '../../../redux/savedFilmsSlice';

const Card: FC<{ item: any }> = ({ item }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { pathname } = useLocation();
  const { savedFilms } = useSelector(selectSaved);

  const matched = savedFilms.some((i) => i.nameRU === item.nameRU);
  console.log(savedFilms);
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
    dispatch(postSaved(card));
    console.log(card);
  };

  const isSaved = pathname === '/films/saved';

  return (
    <li className="card">
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
          onClick={isSaved ? () => dispatch(deleteSaved(item)) : saveCard}
          className={cn('card__btn', {
            card__like_active: matched,
            card__delete: isSaved,
            card__like: !isSaved,
          })}
          disabled={pathname === '/films' ? matched : false}
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
