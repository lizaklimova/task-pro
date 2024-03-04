import { useTranslation } from 'react-i18next';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
import { Container, Title, ConfirmButton } from './DeleteModal.styled';

const DeleteModal = ({ onClose, handleBoardDelete }) => {
  const { t } = useTranslation();

  return (
    <ModalWrapper width={335} onClose={onClose}>
      <Container>
        <Title>{t('deleteModal.title')}</Title>

        <ConfirmButton
          id="board-delete"
          type="button"
          onClick={handleBoardDelete}
        >
          {t('deleteModal.confirm')}
        </ConfirmButton>
      </Container>
    </ModalWrapper>
  );
};

export default DeleteModal;
