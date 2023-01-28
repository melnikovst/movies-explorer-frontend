import './Grid.scss';
import Card from '../Card/Card';
import { useState } from 'react';

const Grid = () => {
  const cardArray = [...Array(16)].map((_, i) => <Card key={i} />);
  const [load, setLoad] = useState(cardArray);

  const loadMore = () => {
    setLoad((state) => [
      ...state,
      ...[...Array(4)].map((_) => <Card key={Math.random()} />),
    ]);
  };

  return (
    <section className="grid">
      <div className="grid__inner">
        <div className="grid__container">{load}</div>
        <button onClick={loadMore} className="grid__button">
          Ещё
        </button>
      </div>
    </section>
  );
};

export default Grid;
