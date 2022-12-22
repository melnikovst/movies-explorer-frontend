import { Link } from "react-router-dom";
import "./Profile.scss";
const Profile = () => {
  return (
    <section className="profile">
      <h1 className="profile__title">Привет, Виталий!</h1>
      <form className="form">
        <fieldset className="form__input-container">
          <label className="form__label" htmlFor="name">
            Имя
          </label>
          <input
            type="text"
            id="name"
            placeholder="Имя"
            className="form__name form__input"
          />
        </fieldset>
        <fieldset className="form__input-container">
          <label className="form__label" htmlFor="name">
            Email
          </label>
          <input
            type="text"
            id="email"
            placeholder="Email"
            className="form__name form__input"
          />
        </fieldset>
        <button className="form__btn">Редактировать</button>
      </form>
      <Link to="/" className="profile__btn">
        Выйти из аккаунта
      </Link>
    </section>
  );
};

export default Profile;
