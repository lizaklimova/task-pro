import { useTranslation } from 'react-i18next';
import ModalWrapper from 'components/Modals/ModalWrapper';
import Plus from 'components/Icons/Plus';
import {
  CardForm,
  CardModalContent,
  SubmitBtn,
} from '../CardModal/CardModal.styled';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { TOASTER_CONFIG } from 'constants';
import { addColumn, editColumn } from '../../../redux/board/boardOperations';
import { useEffect, useRef } from 'react';

const ColumnModal = ({ variant, closeModal, columnId, columnName }) => {
  const { boardId } = useParams();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const titleRef = useRef(null);

  useEffect(() => {
    titleRef.current.focus();
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    const { value: title } = e.target.elements.title;

    if (title.trim() === '') {
      toast(t('columns.modals.toast.error'), TOASTER_CONFIG);
      return;
    }

    const newColumn = {
      board: boardId,
      title,
    };

    variant === 'add'
      ? dispatch(addColumn(newColumn))
      : dispatch(editColumn({ editedColumn: newColumn, id: columnId }));

    return closeModal();
  };

  return (
    <ModalWrapper width={350} onClose={closeModal}>
      <CardModalContent>
        <p>
          {variant === 'add'
            ? t('columns.modals.addTitle')
            : t('columns.modals.editTitle')}
        </p>

        <CardForm onSubmit={handleSubmit}>
          <input
            ref={titleRef}
            type="text"
            name="title"
            placeholder={
              variant === 'add' ? t('columns.modals.input') : columnName
            }
            defaultValue={variant === 'add' ? '' : columnName}
          />

          <SubmitBtn type="submit">
            <span>
              <Plus width={14} height={14} />
            </span>
            {variant === 'add'
              ? t('columns.modals.addTitle')
              : t('columns.modals.editTitle')}
          </SubmitBtn>
        </CardForm>
      </CardModalContent>
    </ModalWrapper>
  );
};

export default ColumnModal;
