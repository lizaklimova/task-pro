import { LoaderContainer, StyledRotatingLines } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderContainer>
      <StyledRotatingLines width={96} visible={true} />
    </LoaderContainer>
  );
};

export default Loader;
