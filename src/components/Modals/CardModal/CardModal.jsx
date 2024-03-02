import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { closeModal } from 'helpers';
import { LABEL_ARR } from 'constants';
import ModalWrapper from 'components/Modals/ModalWrapper';
import Calendar from 'components/Calendar';
import Plus from 'components/Icons/Plus';
import {
  CardModalContent,
  CardForm,
  LabelRadioList,
  RadioBtn,
  LabelRadioLabel,
  CalendarContainer,
  SubmitBtn,
} from './CardModal.styled';

const CardModal = ({ variant }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [labelColor, setLabelColor] = useState('blue');
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const { t } = useTranslation();
  const datePickerRef = useRef(null);

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
    <>
      {isModalOpen && (
        <ModalWrapper width={350} onClose={() => closeModal(setIsModalOpen)}>
          <CardModalContent>
            <p>
              {variant === 'add'
                ? t('cards.modals.addTitle')
                : t('cards.modals.editTitle')}
            </p>

            <CardForm>
              <input
                type="text"
                name="title"
                placeholder={t('cards.modals.title')}
                defaultValue={variant === 'add' ? '' : ''}
              />
              <textarea
                name="description"
                placeholder={t('cards.modals.description')}
                defaultValue={variant === 'add' ? '' : ''}
              ></textarea>

              <label>
                {t('cards.modals.label')}

                <LabelRadioList>
                  {LABEL_ARR.map(({ id, color }) => {
                    return (
                      <li key={id}>
                        <RadioBtn
                          $color={color}
                          id="label"
                          type="radio"
                          name="label"
                          value={color}
                          checked={labelColor === color}
                          onChange={e => setLabelColor(e.target.value)}
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
      )}
    </>
  );
};

export default CardModal;
