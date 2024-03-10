import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';
import {
  addColumn,
  editColumn,
} from '../../../redux/columns/columnsOperations';
import { TOASTER_CONFIG } from 'constants';
import { validateInputMaxLength } from 'helpers';
import ModalWrapper from 'components/Modals/ModalWrapper';
import Plus from 'components/Icons/Plus';
import {
  CardForm,
  CardModalContent,
  ErrorLabel,
  SubmitBtn,
} from '../CardModal/CardModal.styled';

const ColumnModal = ({ variant, closeModal, columnId, columnName }) => {
  const [errorMsgShown, setErrorMsgShown] = useState(false);
  const [errorClassName, setErrorClassName] = useState('');

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
          <ErrorLabel>
            <input
              className={errorClassName}
              ref={titleRef}
              type="text"
              name="title"
              placeholder={
                variant === 'add' ? t('columns.modals.input') : columnName
              }
              defaultValue={variant === 'add' ? '' : columnName}
              maxLength={25}
              onChange={e =>
                validateInputMaxLength(e, setErrorMsgShown, setErrorClassName)
              }
            />
            {errorMsgShown && <p>{t('toast.maxTitle')}</p>}
          </ErrorLabel>

          <SubmitBtn type="submit" $variant="column">
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
