import './App.scss';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './redux/store';
import { lazy, Suspense, useEffect } from 'react';
import { selectForm } from './redux/formSlice';
import { getProfile } from './redux/thunks/formThunks';
import BigLoader from './components/Loaders/BigLoader';
import Footer from './components/Main/Footer/Footer';
import Header from './components/Films/Header/Header';
import Main from './pages/Main/Main';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

import cn from './utils/cn';

const Films = lazy(() => import('./pages/Films/Films'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));
const Profile = lazy(() => import('./pages/Profile/Profile'));
const Register = lazy(() => import('./pages/Register/Register'));
const Login = lazy(() => import('./pages/Login/Login'));
const Saved = lazy(() => import('./pages/Saved/Saved'));
const Grid = lazy(() => import('./components/Films/Grid/Grid'));

function App() {
  const { pathname } = useLocation();
  const { isAsideOpen } = useSelector((state: RootState) => state.tooltipSlice);
  const dispatch = useDispatch<AppDispatch>();
  const { isLogged, isLoading } = useSelector(selectForm);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      dispatch(getProfile());
      navigate('/films');
    } catch (error) {
      navigate('/');
    }
  }, [isLogged, dispatch]);

  const isForm = pathname === '/sign-in' || pathname === '/sign-up';

  return (
    <div
      className={cn('App', { App_type_forms: isForm, App_scroll: isAsideOpen })}
    >
      {pathname !== ('/' || '/sign-in' || '/sign-up') && !isLoading ? (
        <Header />
      ) : null}
      {isLoading ? (
        <BigLoader />
      ) : (
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/films"
            element={
              <Suspense fallback={<p>Грузится...</p>}>
                <ProtectedRoute Component={Films} />
              </Suspense>
            }
          >
            <Route
              path="saved"
              element={
                <Suspense fallback={<p>Грузится...</p>}>
                  <Saved />
                </Suspense>
              }
            />
            <Route
              path=""
              element={
                <Suspense fallback={<p>Грузится...</p>}>
                  <Grid />
                </Suspense>
              }
            />
          </Route>
          <Route
            path="*"
            element={
              <Suspense fallback={<p>Грузится...</p>}>
                <NotFound />
              </Suspense>
            }
          />
          <Route
            path="profile"
            element={
              <Suspense fallback={<p>Грузится...</p>}>
                <ProtectedRoute Component={Profile} />{' '}
              </Suspense>
            }
          />
          <Route
            path="/sign-up"
            element={
              <Suspense fallback={<p>Грузится...</p>}>
                <Register />
              </Suspense>
            }
          />
          <Route
            path="/sign-in"
            element={
              <Suspense fallback={<p>Грузится...</p>}>
                <Login />
              </Suspense>
            }
          />
        </Routes>
      )}
      {(pathname === '/' ||
        pathname === '/films' ||
        pathname === '/films/saved') &&
      !isLoading ? (
        <Footer />
      ) : null}
    </div>
  );
}

export default App;
