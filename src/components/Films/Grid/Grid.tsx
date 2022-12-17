import "./Grid.scss";
import Card from "../Card/Card";

const Grid = () => {
  return (
    <section className="grid">
      <div className="grid__inner">
        <div className="grid__container">
          {[...Array(16)].map((_, i) => (
            <Card key={i} />
          ))}
        </div>
        <button className="grid__button">Ещё</button>
      </div>
    </section>
  );
};

export default Grid;
