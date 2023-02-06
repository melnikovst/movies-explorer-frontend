import './App.scss';
import Main from './pages/Main/Main';
import { Routes, Route, useLocation } from 'react-router-dom';
import Films from './pages/Films/Films';
import Footer from './components/Main/Footer/Footer';
import NotFound from './pages/NotFound/NotFound';
import Profile from './pages/Profile/Profile';
import Header from './components/Films/Header/Header';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import cn from './utils/cn';
import Saved from './pages/Saved/Saved';
import Grid from './components/Films/Grid/Grid';

function App() {
  const { pathname } = useLocation();
  const { isAsideOpen } = useSelector((state: RootState) => state.tooltipSlice);

  const isForm = pathname === '/sign-in' || pathname === '/sign-up';

  return (
    <div
      className={cn('App', { App_type_forms: isForm, App_scroll: isAsideOpen })}
    >
      {pathname !== ('/' || '/sign-in' || '/sign-up') && <Header />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/films" element={<Films />}>
          <Route path="saved" element={<Saved />}></Route>
          <Route path="" element={<Grid />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="profile" element={<Profile />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/sign-in" element={<Login />} />
      </Routes>
      {pathname === '/' ||
      pathname === '/films' ||
      pathname === '/films/saved' ? (
        <Footer />
      ) : null}
    </div>
  );
}

export default App;
