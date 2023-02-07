import "./NotFound.scss";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="notfound">
      <h1 className="notfound__error">404</h1>
      <p className="notfound__description">Страница не найдена</p>
      <button onClick={() => navigate(-1)} className="notfound__btn">
        Назад
      </button>
    </div>
  );
};

export default NotFound;
