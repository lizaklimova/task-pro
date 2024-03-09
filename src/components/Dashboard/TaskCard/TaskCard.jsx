import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { deleteCard } from '../../../redux/cards/cardsOperations';
import { moveCard } from '../../../redux/board/boardOperations';
import {
  formatDate,
  makeValidDate,
  handleTextOverflow,
  determineDeadline,
  determineLabelColor,
  changePriorityLang,
} from 'helpers';
import Status from 'components/Icons/Status';
import Pencil from 'components/Icons/Pencil';
import Trash from 'components/Icons/Trash';
import Bell from 'components/Icons/Bell';
import DeleteModal from 'components/Modals/DeleteModal';
import MovePopUp from '../MovePopUp';
import {
  CardItem,
  CardTitle,
  CardDescr,
  InfoWrap,
  Priority,
  BtnsList,
  DeadlineModal,
  CardActionButton,
} from './TaskCard.styled';

const TaskCard = ({
  allColumns,
  columnId,
  card,
  openCardModal,
  setActiveCard,
}) => {
  const [showFullText, setShowFullText] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleClick = () => {
    setShowFullText(!showFullText);
  };

  const deleteOneCard = cardId => {
    dispatch(deleteCard({ cardId, columnId }));
  };

  const moveCardToAnotherColumn = newColumn => {
    dispatch(moveCard({ cardId: card._id, newColumn, oldColumn: columnId }));
  };

  return (
    <>
      <CardItem $label={determineLabelColor(card.priority)}>
        <CardTitle>{card.title}</CardTitle>
        <CardDescr onClick={handleClick}>
          {showFullText
            ? card.description
            : handleTextOverflow(card.description)}
        </CardDescr>
        <hr />

        <div>
          <InfoWrap>
            <div>
              <h5>{t('cards.priority')}</h5>
              <Priority $label={determineLabelColor(card.priority)}>
                {i18next.language === 'en'
                  ? card.priority
                  : changePriorityLang(card.priority)}
              </Priority>
            </div>

            <div>
              <h5>{t('cards.deadline')}</h5>
              <span>{formatDate(makeValidDate(card.deadline))}</span>
            </div>
          </InfoWrap>

          <BtnsList>
            {determineDeadline(card.deadline) && (
              <li>
                <CardActionButton
                  id="deadline-bell"
                  type="button"
                  aria-label="Deadline is today"
                  onClick={e => (e.target.style.animation = 'none')}
                >
                  <Bell
                    width={16}
                    height={16}
                    strokeColor={'var(--icon-stroke-color)'}
                  />
                </CardActionButton>

                <DeadlineModal id="deadline-modal">
                  <p>{t('cards.deadlineToday')}</p>
                </DeadlineModal>
              </li>
            )}
            {allColumns.length >= 2 && (
              <li>
                <CardActionButton
                  id="move-card"
                  type="button"
                  aria-label="Move card"
                >
                  <Status
                    width={16}
                    height={16}
                    strokeColor={'var(--icon-stroke-color)'}
                  />
                </CardActionButton>
                <MovePopUp
                  allColumns={allColumns}
                  columnId={columnId}
                  moveCard={moveCardToAnotherColumn}
                />
              </li>
            )}
            <li>
              <CardActionButton
                type="button"
                aria-label="Edit card"
                onClick={() => {
                  openCardModal();
                  setActiveCard(card);
                }}
              >
                <Pencil
                  width={16}
                  height={16}
                  strokeColor={'var(--icon-stroke-color)'}
                />
              </CardActionButton>
            </li>
            <li>
              <CardActionButton
                type="button"
                aria-label="Delete card"
                onClick={() => setIsDeleteModalOpen(true)}
              >
                <Trash
                  width={16}
                  height={16}
                  strokeColor={'var(--icon-stroke-color)'}
                />
              </CardActionButton>
            </li>
          </BtnsList>
        </div>
      </CardItem>

      {isDeleteModalOpen && (
        <DeleteModal
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={() => deleteOneCard(card._id)}
        />
      )}
    </>
  );
};

export default TaskCard;
