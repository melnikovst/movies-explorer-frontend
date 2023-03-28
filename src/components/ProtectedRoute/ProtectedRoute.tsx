import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectForm } from '../../redux/formSlice';

interface RouteProps {
  Component: React.FC;
}

const ProtectedRoute: React.FC<RouteProps> = ({ Component, ...props }) => {
  const { isLogged } = useSelector(selectForm);
  return isLogged ? <Component {...props} /> : <Navigate to="/" />;
};

export default ProtectedRoute;
