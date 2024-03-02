import { MainContainer } from 'components/App/App.styled';
import BeforeStart from 'components/Dashboard/BeforeStart';
import CardModal from 'components/Modals/CardModal';
// import { useSelector } from 'react-redux';

const HomePage = () => {
  //when created boardSlice:
  // const currentBoard = useSelector(selectCurrentBoard);
  //temp:
  const currentBoard = null;

  return (
    <MainContainer>
      {!currentBoard && <BeforeStart />}
      <CardModal variant="add" />
    </MainContainer>
  );
};

export default HomePage;
