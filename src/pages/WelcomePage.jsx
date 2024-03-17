import { useAuth } from 'hooks';
import Welcome from 'components/Welcome';
import { LoaderContainer } from 'components/Loader/Loader.styled';

const WelcomePage = () => {
  const { isLoading } = useAuth();
  return isLoading ? (
    <LoaderContainer>
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
    </LoaderContainer>
  ) : (
    <Welcome />
  );
};

export default WelcomePage;
