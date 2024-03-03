import { useTranslation } from 'react-i18next';
import { Container, Title } from './DeleteModal.styled';

export const DeleteModalContent = onConfirmClick => {
  const { t } = useTranslation();

  return (
    <Container>
      <Title>{t('deleteModal.title')}</Title>

      <button type="button" onClick={onConfirmClick}>
        {t('deleteModal.confirm')}
      </button>
    </Container>
  );
};
