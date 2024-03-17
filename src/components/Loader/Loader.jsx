import { LoaderContainer } from './Loader.styled';
import { RotatingLines } from 'react-loader-spinner';

const Loader = ({ strokeColor = 'var(--loader-color)' }) => {
  return (
    <LoaderContainer>
      <RotatingLines width="104" strokeColor={strokeColor} visible={true} />
    </LoaderContainer>
  );
};

export default Loader;
