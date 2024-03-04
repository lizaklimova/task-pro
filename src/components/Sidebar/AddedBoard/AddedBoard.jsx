import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import FourCircles from 'components/Icons/FourCircles';
import Pencil from 'components/Icons/Pencil';
import Trash from 'components/Icons/Trash';
import {
  BoardBox,
  BoardBoxInfo,
  BoardContainer,
  ChangeBox,
  ChangeIcons,
  NameBox,
} from './AddedBoard.styled';
import { DeleteModal } from 'components/Modals/DeleteModal/DeleteModal';

const AddedBoard = ({ openEditModal }) => {
  const [isDeleteModalShown, setIsDeleteModalShown] = useState(false);
  //   const dispatch = useDispatch();

  const handleBoardDelete = ({ target }) => {
    if ((target.id = 'board-delete')) {
      //видаляємо дошку
    }
  };

  return (
    <BoardContainer>
      <BoardBox>
        <BoardBoxInfo>
          <NameBox>
            <FourCircles
              width={16}
              height={16}
              strokeColor={'var(--sidebar-icon-color)'}
            />
            <p>Project office</p>
          </NameBox>
          <ChangeBox>
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
      </BoardBox>

      {isDeleteModalShown && (
        <DeleteModal
          onClose={() => setIsDeleteModalShown(false)}
          handleBoardDelete={handleBoardDelete}
        />
      )}
    </BoardContainer>
  );
};

export default AddedBoard;
