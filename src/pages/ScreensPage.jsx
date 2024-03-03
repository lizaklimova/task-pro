import { MainContainer } from 'components/App/App.styled';
import Dashboard from 'components/Dashboard';
import BoardHeader from 'components/Dashboard/BoardHeader';
// import { useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom';

const ScreensPage = () => {
  //when Denis creates it:
  // const { boardId } = useParams();
  // const dispatch = useDispatch();
  // const board = useSelector(selectBoard);
  // const error = useSelector(selectError);

  // useEffect(() => {
  //   dispatch(fetchBoard(boardId));
  // }, [dispatch]);

  const board = {
    name: 'Not empty',
    columns: [
      {
        title: 'TO DO',
        cards: [
          {
            title: 'Calculate KAM teams plan',
          },
          {
            title: 'Calculate KAM clients plan',
          },
          {
            title: 'Calculate LR teams plan',
          },
          {
            title: 'Prepare file for LR clients calculation',
          },
          {
            title: 'Prepare file for LR clients calculation',
          },
          {
            title: 'Prepare file for LR clients calculation',
          },
          {
            title: 'Prepare file for LR clients calculation',
          },
        ],
      },
      {
        title: 'Important',
        cards: [
          {
            title: 'Eat something',
          },
        ],
      },
      {
        title: 'Bla',
        cards: [
          {
            title: 'Eat something',
          },
        ],
      },
      {
        title: 'Bla',
        cards: [
          {
            title: 'Eat something',
          },
        ],
      },
    ],
  };

  // const board = {
  //   name: 'Empty',
  //   columns: [],
  // };

  return (
    <MainContainer>
      <BoardHeader title={board.name} />
      <Dashboard board={board} />
    </MainContainer>
  );
};

export default ScreensPage;
