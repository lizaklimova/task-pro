import { MainContainer } from 'components/App/App.styled';
import DevModal from 'components/Modals/DevModal';
import AddingCardModal from 'components/TaskCard/AddingCardModal/AddingCardModal';
import BeforeStart from 'components/Dashboard/BeforeStart';
// import { useSelector } from 'react-redux';
const HomePage = () => {
  //when created boardSlice:
  // const currentBoard = useSelector(selectCurrentBoard);
  //temp:
  const currentBoard = null;
  return (
    <MainContainer>
      {!currentBoard && <BeforeStart />}
      <AddingCardModal />
      <DevModal />
    </MainContainer>
  );
};

export default HomePage;
