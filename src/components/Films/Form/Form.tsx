import './Form.scss';
import cn from '../../../utils/cn';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchFilms,
  selectFilms,
  setFilms,
  setIsFirst,
  setValue,
  setIsChecked,
} from '../../../redux/filmsSlice';
import { AppDispatch } from '../../../redux/store';
import { useLocation } from 'react-router-dom';

const SearchForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { value, isChecked, isFirstRequest } = useSelector(selectFilms);
  const { pathname } = useLocation();

  const getData = async () => {
    const data = JSON.parse(localStorage.getItem('films') as string);
    if (!data) {
      try {
        dispatch(setIsFirst(true));
        const { payload } = await dispatch(fetchFilms());
        localStorage.setItem('films', JSON.stringify(payload));
        localStorage.setItem('requestText', JSON.stringify(value));
        return payload;
      } catch (error) {}
    }
    if (data) {
      const filtered = data.filter((item: TFilm) =>
        item.nameRU.includes(value)
      );
      localStorage.setItem('filtered', JSON.stringify(filtered));
      localStorage.setItem('requestText', JSON.stringify(value));
      return data;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = await getData();
    dispatch(setFilms(data));
  };

  const handleCheckbox = () => {
    if (!isFirstRequest) return;
    dispatch(setIsChecked(!isChecked));
    localStorage.setItem('checkbox', JSON.stringify(!isChecked));
  };

  console.log(pathname);

  return (
    <section className="search">
      <div className="search__inner">
        <form onSubmit={handleSubmit} className="search__form">
          <div className="search__image" />
          <input
            type="text"
            placeholder="Фильм"
            className="search__input"
            id="name"
            required
            value={value || ''}
            onChange={(e) => dispatch(setValue(e.target.value))}
          />
          <span
            className={cn('search__error', {
              search__error_active: '' /* !isValid */,
            })}
          >
            {/* {errors.regName} */}
          </span>
          <button
            type="submit"
            className="search__btn"
            disabled={pathname === '/films/saved'}
          />
          <div className="search__wrapper">
            <label className="toggler-wrapper">
              <input
                type="checkbox"
                onChange={handleCheckbox}
                checked={isChecked}
                disabled={!isFirstRequest}
              />
              <div className="toggler-slider">
                <div className="toggler-knob"></div>
              </div>
            </label>
            <p className="search__text">Короткометражки</p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SearchForm;
