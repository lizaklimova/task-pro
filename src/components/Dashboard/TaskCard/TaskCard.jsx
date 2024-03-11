import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { deleteCard, moveCard } from '../../../redux/cards/cardsOperations';
import {
  formatDate,
  makeValidDate,
  handleTextOverflow,
  determineDeadline,
  determineLabelColor,
  changePriorityLang,
  compareDates,
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
  Deadline,
  Priority,
  BtnsList,
  DeadlineModal,
  CardActionButton,
} from './TaskCard.styled';
import CardModal from 'components/Modals/CardModal/CardModal';

const TaskCard = ({ allColumns, columnId, card }) => {
  const [showFullText, setShowFullText] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditCardModalOpen, setIsEditCardModalOpen] = useState(false);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
    isSorting,
  } = useSortable({
    id: card._id,
    data: {
      card,
      type: 'Task',
    },
    transition: {
      duration: 300,
      easing: 'var(--dnd-transition)',
    },
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const aboveCardStyle = {
    ...style,
    opacity: isSorting ? '30%' : '100%',
  };

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

  if (isDragging) {
    return (
      <CardItem
        ref={setNodeRef}
        {...listeners}
        {...attributes}
        style={aboveCardStyle}
      />
    );
  }

  return (
    <>
      <CardItem
        ref={setNodeRef}
        {...listeners}
        {...attributes}
        style={aboveCardStyle}
        $label={determineLabelColor(card.priority)}
      >
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
              <Deadline
                $isDeadlinePassed={compareDates(new Date(card.deadline))}
              >
                {formatDate(makeValidDate(card.deadline))}
              </Deadline>
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
                  setIsEditCardModalOpen(true);
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

      {isEditCardModalOpen && (
        <CardModal
          activeCard={card}
          columnId={columnId}
          variant="edit"
          closeCardModal={() => setIsEditCardModalOpen(false)}
        />
      )}

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
