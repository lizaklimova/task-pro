import { MainContainer } from 'components/App/App.styled';
import BeforeStart from 'components/Dashboard/BeforeStart';
// import { useSelector } from 'react-redux';

const HomePage = () => {
  //when created boardSlice:
  // const currentBoard = useSelector(selectCurrentBoard);
  //temp:
  const currentBoard = null;

  return <MainContainer>{!currentBoard && <BeforeStart />}</MainContainer>;
};

export default HomePage;
