import "./Saved.scss";
import Card from "../../components/Films/Card/Card";

const Saved = () => {
  return (
    <div className="saved">
      <div className="saved__inner">
        <div className="saved__container">
          {[...Array(3)].map((_, i) => (
            <Card key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Saved;
