import { useAuth } from 'hooks';
import Loader from 'components/Loader';
import Welcome from 'components/Welcome';

const WelcomePage = () => {
  const { isLoading } = useAuth();
  return isLoading ? (
    <Watch
      visible={true}
      height="100"
      width="100"
      radius="48"
      color="#ffffff"
      ariaLabel="watch-loading"
      wrapperStyle={{
        zIndex: '5',
      }}
    />
  ) : (
    <Welcome />
  );
};

export default WelcomePage;
