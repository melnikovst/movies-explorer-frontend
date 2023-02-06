import './Form.scss';
import useFormAndValidation from '../../../utils/hooks/useValidation';
import cn from '../../../utils/cn';

const SearchForm = () => {
  const { isValid, errors, values, handleChange, handleBlur } =
    useFormAndValidation();

  const handleValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
    handleBlur(e);
  };

  return (
    <section className="search">
      <div className="search__inner">
        <form className="search__form">
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
