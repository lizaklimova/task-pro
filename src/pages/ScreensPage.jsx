import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getOneBoard } from '../redux/board/boardOperations';
import { selectBoards, selectOneBoard } from '../redux/board/boardSelectors';
import { MainContainer } from 'components/App/App.styled';
import Dashboard from 'components/Dashboard';
import BoardHeader from 'components/Dashboard/BoardHeader';
import { useAuth } from 'hooks';

const ScreensPage = () => {
  const { boardId } = useParams();
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  const board = useSelector(selectOneBoard);

  const allBoards = useSelector(selectBoards);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isRefreshing) navigate(`/home/${allBoards.at(-1)._id}`);
  }, [navigate, allBoards]);

  // const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getOneBoard(boardId));
  }, [dispatch, boardId]);

  return (
    <MainContainer>
      <BoardHeader title={board.title} boardId={boardId} />
      <Dashboard board={board} />
    </MainContainer>
  );
};

export default ScreensPage;
