import './App.scss';
import Main from './pages/Main/Main';
import { Routes, Route, useLocation } from 'react-router-dom';
import Films from './pages/Films/Films';
import Footer from './components/Main/Footer/Footer';
import NotFound from './pages/NotFound/NotFound';
import Profile from './pages/Profile/Profile';
import Header from './components/Films/Header/Header';
import Login from './pages/Login/Login';

function App() {
  const { pathname } = useLocation();
  console.log(typeof pathname);
  return (
    <div
      className={
        pathname === ('/sign-in' || 'sign-up') ? 'App_type_forms' : 'App'
      }
    >
      {pathname !== ('/' || '/sign-in' || '/sign-up') && <Header />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/films/*" element={<Films />} />
        <Route path="*" element={<NotFound />} />
        <Route path={'profile'} element={<Profile />} />
        <Route path={'/sign-in'} element={<Login />} />
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
