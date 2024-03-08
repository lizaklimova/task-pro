import ModalWrapper from 'components/Modals/ModalWrapper/ModalWrapper';
import { useTranslation } from 'react-i18next';
import {
  Button,
  Form,
  Input,
  Label,
  Title,
} from '../BoardModal/BoardModal.styled';

const SearchBoardModal = ({ onClose, handleSubmit }) => {
  const { t } = useTranslation();

  return (
    <ModalWrapper width={300} onClose={() => onClose()}>
      <Form onSubmit={handleSubmit}>
        <Title>{t('boards.modals.searchBoard')}</Title>
        <Label>
          <Input
            type="text"
            name="search"
            placeholder={t('boards.modals.searchInput')}
            autoComplete="off"
            maxLength={25}
          />
        </Label>

        <Button type="submit">{t('boards.modals.search')}</Button>
      </Form>
    </ModalWrapper>
  );
};

export default SearchBoardModal;
