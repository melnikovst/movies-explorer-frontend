import './App.scss';
import Main from './pages/Main/Main';
import { Routes, Route } from 'react-router-dom';
import Films from './pages/Films/Films';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/films' element={<Films />} />
      </Routes>
    </div>
  );
}

export default App;
