import { useAuth } from 'hooks';
import Loader from 'components/Loader';
import Welcome from 'components/Welcome';

const WelcomePage = () => {
  const { isLoading } = useAuth();
  return isLoading ? <Loader strokeColor="#53cf17" /> : <Welcome />;
};

export default WelcomePage;
