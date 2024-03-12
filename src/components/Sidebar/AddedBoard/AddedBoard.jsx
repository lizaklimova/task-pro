import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteBoard } from '../../../redux/board/boardOperations';
import { ICONS_ARRAY } from 'constants';
import sprite from 'assets/images/icons/icons-sprite.svg';
import Pencil from 'components/Icons/Pencil';
import Trash from 'components/Icons/Trash';
import {
  BoardBoxInfo,
  ChangeBox,
  ChangeIcons,
  NameBox,
} from './AddedBoard.styled';
import DeleteModal from 'components/Modals/DeleteModal';

const AddedBoard = ({ allBoards, board, openEditModal }) => {
  const boardIcon = ICONS_ARRAY[board.icon_id];
  const [isDeleteModalShown, setIsDeleteModalShown] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBoardDelete = () => {
    dispatch(deleteBoard(board._id)).then(action => {
      if (action.type === 'boards/deleteBoard/fulfilled') navigate('/');
    });

    setIsDeleteModalShown(false);
  };

  return (
    <>
      <BoardBoxInfo>
        <NameBox>
          <svg stroke={'var(--sidebar-icon-color)'} width={16} height={16}>
            <use href={`${sprite}#${boardIcon.name}`}></use>
          </svg>

          <p>{board.title}</p>
        </NameBox>
        <ChangeBox id="change-container">
          <ChangeIcons
            type="button"
            aria-label="Edit board"
            onClick={openEditModal}
          >
            <Pencil
              width={16}
              height={16}
              strokeColor={'var(--sidebar-change-color'}
            />
          </ChangeIcons>
          <ChangeIcons
            type="button"
            aria-label="Delete board"
            onClick={() => setIsDeleteModalShown(true)}
          >
            <Trash
              width={16}
              height={16}
              strokeColor={'var(--sidebar-change-color'}
            />
          </ChangeIcons>
        </ChangeBox>
      </BoardBoxInfo>

      {isDeleteModalShown && (
        <DeleteModal
          onClose={() => setIsDeleteModalShown(false)}
          onConfirm={handleBoardDelete}
        />
      )}
    </>
  );
};

export default AddedBoard;
