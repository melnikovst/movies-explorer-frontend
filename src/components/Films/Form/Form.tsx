import "./Form.scss";

const SearchForm = () => {
  return (
    <section className="search">
      <div className="search__inner">
        <form className="search__form">
          <div className="search__image" />
          <input type="text" placeholder="Фильм" className="search__input" />
          <button className="search__btn" />
          <label className="toggler-wrapper">
            <input type="checkbox" />
            <div className="toggler-slider">
              <div className="toggler-knob"></div>
            </div>
          </label>
          <p className="search__text">Короткометражки</p>
        </form>
      </div>
    </section>
  );
};

export default SearchForm;
