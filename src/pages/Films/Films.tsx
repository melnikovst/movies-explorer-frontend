import SearchForm from '../../components/Films/Form/Form';
import { Outlet } from 'react-router-dom';

const Films = () => {
  return (
    <>
      <SearchForm />
      <Outlet />
    </>
  );
};

export default Films;
