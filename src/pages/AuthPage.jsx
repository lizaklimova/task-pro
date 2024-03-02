import LoginForm from 'components/Auth/LoginForm';
import RegisterForm from 'components/Auth/RegisterForm';

const AuthPage = () => {
  return (
    <>
      <h1>AuthPage</h1>
      <RegisterForm />
      <LoginForm />
    </>
  );
};

export default AuthPage;
