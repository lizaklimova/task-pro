import { useTranslation } from 'react-i18next';
import { Container, Title, ConfirmButton } from './DeleteModal.styled';

export const DeleteModalContent = onConfirmClick => {
  const { t } = useTranslation();

  return (
    <Container>
      <Title>{t('deleteModal.title')}</Title>

      <ConfirmButton type="button" onClick={() => onConfirmClick}>
        {t('deleteModal.confirm')}
      </ConfirmButton>
    </Container>
  );
};
