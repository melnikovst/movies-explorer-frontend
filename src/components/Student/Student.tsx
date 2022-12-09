import SectionTitle from '../SectionTitle/SectionTitle';
import './Student.scss';

const Student: React.FC = () => {
  return (
    <section className="student">
      <div className="student__inner">
        <SectionTitle title="Студент" />
      </div>
    </section>
  );
};

export default Student;
