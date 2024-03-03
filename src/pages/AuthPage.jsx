import LoginForm from 'components/Auth/LoginForm';
import RegisterForm from 'components/Auth/RegisterForm';
import { useParams } from 'react-router-dom';

const AuthPage = () => {
  const { id } = useParams();

  return <>{id === 'register' ? <RegisterForm /> : <LoginForm />}</>;
};

export default AuthPage;
