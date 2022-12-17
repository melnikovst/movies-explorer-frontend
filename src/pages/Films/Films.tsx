import Header from "../../components/Films/Header/Header";
import "./Films.scss";
import SearchForm from "../../components/Films/Form/Form";
import Grid from "../../components/Films/Grid/Grid";

const Films = () => {
  return (
    <div>
      <Header />
      <SearchForm />
      <Grid />
    </div>
  );
};

export default Films;
