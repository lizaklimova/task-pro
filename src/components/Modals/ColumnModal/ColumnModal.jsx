import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { closeModal } from 'helpers';
import ModalWrapper from 'components/Modals/ModalWrapper';
import Plus from 'components/Icons/Plus';
import {
  CardForm,
  CardModalContent,
  SubmitBtn,
} from '../CardModal/CardModal.styled';

const ColumnModal = ({ variant }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { t } = useTranslation();

  return (
    <>
      {isModalOpen && (
        <ModalWrapper width={350} onClose={() => closeModal(setIsModalOpen)}>
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
      )}
    </>
  );
};

export default ColumnModal;
