import { useTranslation } from 'react-i18next';
import ModalWrapper from 'components/Modals/ModalWrapper';
import Plus from 'components/Icons/Plus';
import {
  CardForm,
  CardModalContent,
  SubmitBtn,
} from '../CardModal/CardModal.styled';

const ColumnModal = ({ variant, closeModal }) => {
  const { t } = useTranslation();

  return (
    <ModalWrapper width={350} onClose={closeModal}>
      <CardModalContent>
        <p>
          {variant === 'add'
            ? t('columns.modals.addTitle')
            : t('columns.modals.editTitle')}
        </p>

        <CardForm>
          <input
            type="text"
            name="title"
            placeholder={t('columns.modals.input')}
            defaultValue={variant === 'add' ? '' : ''}
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
