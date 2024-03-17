import { useAuth } from 'hooks';
import Loader from 'components/Loader';
import Welcome from 'components/Welcome';

const WelcomePage = () => {
  const { isLoading } = useAuth();
  return isLoading ? <Loader /> : <Welcome />;
};

export default WelcomePage;
