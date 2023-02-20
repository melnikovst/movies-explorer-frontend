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

const SearchForm = () => {
  const obj = {
    email: '',
  };

  const dispatch = useDispatch<AppDispatch>();
  const dispatcher = useDispatch();
  const { value, isChecked } = useSelector(selectFilms);

  const getData = async () => {
    const data = JSON.parse(localStorage.getItem('films') as string);
    if (!data) {
      try {
        dispatcher(setIsFirst(true));
        const { payload } = await dispatch(fetchFilms());
        console.log(payload);
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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = await getData();
    dispatcher(setFilms(data));
  };

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
          <button type="submit" className="search__btn" />
          <div className="search__wrapper">
            <label className="toggler-wrapper">
              <input
                type="checkbox"
                onChange={() => {
                  dispatcher(setIsChecked());
                }}
                checked={isChecked}
              />
              <div className="toggler-slider">
                <div className="toggler-knob"></div>
              </div>
            </label>
            <p
              onClick={() => {
                localStorage.clear();
                dispatcher(setIsFirst(false));
              }}
              className="search__text"
            >
              Короткометражки
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SearchForm;
