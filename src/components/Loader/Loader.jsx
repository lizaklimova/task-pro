import { LoaderContainer } from './Loader.styled';
import { RotatingLines } from 'react-loader-spinner';

const Loader = () => {
  return (
    <LoaderContainer>
      <RotatingLines
        width="104"
        strokeColor="var(--loader-color)"
        visible={true}
      />
    </LoaderContainer>
  );
};

export default Loader;
