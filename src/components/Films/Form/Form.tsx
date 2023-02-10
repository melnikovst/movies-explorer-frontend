import './Form.scss';
import useFormAndValidation from '../../../utils/hooks/useValidation';
import cn from '../../../utils/cn';
import { fetchFilms, selectFilms } from '../../../redux/filmsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { FormEvent } from 'react';

const SearchForm = () => {
  const { isValid, errors, values, handleChange, handleBlur } =
    useFormAndValidation();

  const handleValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
    handleBlur(e);
  };

  const dispatch = useDispatch<AppDispatch>();

  const fetchData = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(fetchFilms());
  };

  const { films } = useSelector(selectFilms);
  console.log(films);
  return (
    <section className="search">
      <div className="search__inner">
        <form onSubmit={fetchData} className="search__form">
          <div className="search__image" />
          <input
            type="text"
            placeholder="Фильм"
            className="search__input"
            id="regName"
            required
            defaultValue={values.name}
            onChange={handleValidation}
          />
          <span
            className={cn('search__error', { search__error_active: !isValid })}
          >
            {errors.regName}
          </span>
          <button className="search__btn" />
          <div className="search__wrapper">
            <label className="toggler-wrapper">
              <input type="checkbox" />
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
