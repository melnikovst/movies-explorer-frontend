import SearchForm from '../../components/Films/Form/Form';
import Grid from '../../components/Films/Grid/Grid';
import { Route, Routes } from 'react-router-dom';
import Saved from '../Saved/Saved';

const Films = () => {
  return (
    <>
      <SearchForm />
      <Routes>
        <Route path="*" element={<Grid />} />
        <Route path={'saved'} element={<Saved />} />
      </Routes>
    </>
  );
};

export default Films;
