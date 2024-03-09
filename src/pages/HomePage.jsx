import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectBoards } from '../redux/board/boardSelectors';
import { getAllBoards } from '../redux/board/boardOperations';
import { MainContainer } from 'components/App/App.styled';
import BeforeStart from 'components/Dashboard/BeforeStart';
import { selectIsLoading } from '../redux/theme/themeSelector';
import Loader from 'components/Loader';

const HomePage = () => {
  const allBoards = useSelector(selectBoards);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBoards());
  }, [dispatch]);

  const isLoading = useSelector(selectIsLoading);

  return isLoading ? (
    <Loader />
  ) : (
    <MainContainer>
      {allBoards.length > 0 ? (
        <Navigate to={`/home/board/${allBoards[0]._id}`} />
      ) : (
        <BeforeStart />
      )}
    </MainContainer>
  );
};

export default HomePage;
