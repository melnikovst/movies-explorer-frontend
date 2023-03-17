import './App.scss';
import Main from './pages/Main/Main';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Films from './pages/Films/Films';
import Footer from './components/Main/Footer/Footer';
import NotFound from './pages/NotFound/NotFound';
import Profile from './pages/Profile/Profile';
import Header from './components/Films/Header/Header';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './redux/store';
import cn from './utils/cn';
import Saved from './pages/Saved/Saved';
import Grid from './components/Films/Grid/Grid';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import { useEffect } from 'react';
import { getProfile, selectForm } from './redux/formSlice';
import { useWhyDidYouUpdate } from 'ahooks';

function App() {
  const { pathname } = useLocation();
  const { isAsideOpen } = useSelector((state: RootState) => state.tooltipSlice);
  const dispatch = useDispatch<AppDispatch>();
  const { profileData, isLogged } = useSelector(selectForm);
  const navigate = useNavigate();
  console.log(isLogged);
  useWhyDidYouUpdate('App', {isAsideOpen})
  useEffect(() => {
    try {
      dispatch(getProfile());
      console.log(profileData);
      navigate('/films');
    } catch (error) {
      navigate('/');
    }
  }, [isLogged]);
  console.log('render');
  
  const isForm = pathname === '/sign-in' || pathname === '/sign-up';

  return (
    <div
      className={cn('App', { App_type_forms: isForm, App_scroll: isAsideOpen })}
    >
      {pathname !== ('/' || '/sign-in' || '/sign-up') && <Header />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/films" element={<ProtectedRoute Component={Films} />}>
          <Route path="saved" element={<Saved />}></Route>
          <Route path="" element={<Grid />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route
          path="profile"
          element={<ProtectedRoute Component={Profile} />}
        />
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
