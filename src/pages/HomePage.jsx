import { MainContainer } from 'components/App/App.styled';
import CardModal from 'components/Modals/CardModal';

const HomePage = () => {
  return (
    <MainContainer>
      <CardModal variant="add" />
    </MainContainer>
  );
};

export default HomePage;
