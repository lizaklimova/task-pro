import { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';
import { addCard, editCard } from '../../../redux/cards/cardsOperations';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { LABEL_ARR, TOASTER_CONFIG } from 'constants';
import { makeValidDate, validateInputMaxLength, compareDates } from 'helpers';
import ModalWrapper from 'components/Modals/ModalWrapper';
import Calendar from 'components/Calendar';
import Plus from 'components/Icons/Plus';
import {
  CardModalContent,
  CardForm,
  ErrorLabel,
  LabelRadioList,
  RadioBtn,
  LabelRadioLabel,
  CalendarContainer,
  SubmitBtn,
} from './CardModal.styled';

const CardModal = ({ columnId, variant, closeCardModal, activeCard }) => {
  const [cardPriority, setCardPriority] = useState(
    variant === 'add' ? 'without priority' : activeCard.priority
  );
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDay] = useState(
    variant === 'add' ? new Date() : activeCard.deadline
  );
  const [errorMsgShown, setErrorMsgShown] = useState(false);
  const [errorClassName, setErrorClassName] = useState('');

  const datePickerRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    titleRef.current.focus();
  }, []);

  const { boardId } = useParams();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleFormSubmit = e => {
    e.preventDefault();
    const { title, description } = e.target.elements;

    if (!title.value.trim() || !description.value.trim()) {
      return toast(t('cards.modals.toast.error'), TOASTER_CONFIG);
    }

    const dateForServer = makeValidDate(selectedDate);

    if (compareDates(dateForServer)) {
      return toast(t('cards.modals.toast.invalidDate'), TOASTER_CONFIG);
    }

    console.log(
      new Date(
        dateForServer.getFullYear(),
        dateForServer.getMonth(),
        dateForServer.getDate()
      )
    );
    const cardInfo = {
      title: title.value,
      description: description.value,
      priority: cardPriority,
      deadline: dateForServer,
      board: boardId,
      column: columnId,
    };

    if (variant === 'add') {
      dispatch(addCard(cardInfo));
      toast(t('cards.modals.toast.add.success'), TOASTER_CONFIG);
    } else {
      dispatch(editCard({ cardId: activeCard._id, editedCard: cardInfo }));
      toast(t('cards.modals.toast.edit.success'), TOASTER_CONFIG);
    }
    closeCardModal();
  };

  const openDatePicker = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(true);
    }
  };

  const closeDatePicker = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(false);
    }
  };

  return (
    <ModalWrapper width={350} onClose={closeCardModal}>
      <CardModalContent>
        <p>
          {variant === 'add'
            ? t('cards.modals.addTitle')
            : t('cards.modals.editTitle')}
        </p>

        <CardForm onSubmit={handleFormSubmit}>
          <ErrorLabel>
            <input
              className={errorClassName}
              ref={titleRef}
              type="text"
              name="title"
              placeholder={t('cards.modals.title')}
              defaultValue={variant === 'add' ? '' : activeCard.title}
              autoComplete="off"
              maxLength={25}
              onChange={e =>
                validateInputMaxLength(e, setErrorMsgShown, setErrorClassName)
              }
            />
            {errorMsgShown && <p>{t('toast.maxTitle')}</p>}
          </ErrorLabel>
          <textarea
            name="description"
            placeholder={t('cards.modals.description')}
            defaultValue={variant === 'add' ? '' : activeCard.description}
            autoComplete="off"
          ></textarea>

          <label>
            {t('cards.modals.label')}

            <LabelRadioList>
              {LABEL_ARR.map(({ id, priority, color }) => {
                return (
                  <li key={id}>
                    <RadioBtn
                      $color={color}
                      id="priority"
                      type="radio"
                      name="priority"
                      value={priority}
                      checked={priority === cardPriority}
                      onChange={e => setCardPriority(e.target.value)}
                    />
                    <LabelRadioLabel htmlFor="label" $color={color} />
                  </li>
                );
              })}
            </LabelRadioList>
          </label>

          <label>{t('cards.modals.deadline')}</label>

          <CalendarContainer>
            {isCalendarOpen ? (
              <button type="button" onClick={closeDatePicker}>
                <IoIosArrowUp />
              </button>
            ) : (
              <button type="button" onClick={openDatePicker}>
                <IoIosArrowDown />
              </button>
            )}

            <Calendar
              selectedDate={selectedDate}
              setDate={setSelectedDay}
              toggleCalendar={setIsCalendarOpen}
              ref={datePickerRef}
            />
          </CalendarContainer>

          <SubmitBtn type="submit">
            <span>
              <Plus width={14} height={14} />
            </span>
            {variant === 'add'
              ? t('cards.modals.addButton')
              : t('cards.modals.editButton')}
          </SubmitBtn>
        </CardForm>
      </CardModalContent>
    </ModalWrapper>
  );
};

export default CardModal;
