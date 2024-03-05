import { useTranslation } from 'react-i18next';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
import { Container, Title, ConfirmButton } from './DeleteModal.styled';

const DeleteModal = ({ onClose, onConfirm }) => {
  const { t } = useTranslation();

  return (
    <ModalWrapper width={335} onClose={onClose}>
      <Container>
        <Title>{t('deleteModal.title')}</Title>

        <ConfirmButton type="button" onClick={onConfirm}>
          {t('deleteModal.confirm')}
        </ConfirmButton>
      </Container>
    </ModalWrapper>
  );
};

export default DeleteModal;
