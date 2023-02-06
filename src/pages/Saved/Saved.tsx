import './Saved.scss';
import Card from '../../components/Films/Card/Card';

const Saved = () => {
  return (
    <div className="saved">
      <div className="saved__inner">
        <ul className="saved__container">
          {[...Array(3)].map((_, i) => (
            <Card key={i} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Saved;
