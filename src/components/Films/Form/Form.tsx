import "./Form.scss";

const SearchForm = () => {
  return (
    <section className="search">
      <div className="search__inner">
        <form className="form">
          <input type="text" placeholder="Фильм" className="form__input" />
          <button className="form__btn" />
          <input type="checkbox" className="form__checkbox" />
          <p className="form__text">Короткометражки</p>
        </form>
      </div>
    </section>
  );
};

export default SearchForm;
