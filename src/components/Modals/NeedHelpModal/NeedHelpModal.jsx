import ModalWrapper from 'components/Modals/ModalWrapper';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useAuth } from 'hooks';
import { TOASTER_CONFIG } from 'constants';
import {
  Modalform,
  ModalTitle,
  Emailinput,
  Commenttextarea,
  ButtonSend,
} from './NeedHelpModal.styled';

const NeedHelpModal = ({ showModal }) => {
  const { t } = useTranslation();
  const { userEmail } = useAuth();

  const handleSubmit = e => {
    e.preventDefault();

    const { email, comment } = e.target.elements;

    if (email.value.trim() === '' || comment.value.trim() === '') {
      toast(t('sidebar.helpModal.toast.error'), TOASTER_CONFIG);
      return;
    }

    toast(t('sidebar.helpModal.toast.success'), TOASTER_CONFIG);
    showModal(false);
  };

  return (
    <>
      <ModalWrapper width={400} onClose={() => showModal(false)}>
        <Modalform onSubmit={handleSubmit} className="help-form">
          <ModalTitle>{t('sidebar.helpModal.title')}</ModalTitle>
          <Emailinput
            type="email"
            name="email"
            autoComplete="off"
            placeholder={t('sidebar.helpModal.email')}
            defaultValue={userEmail}
          />
          <Commenttextarea
            type="text"
            name="comment"
            placeholder={t('sidebar.helpModal.comment')}
          />
          <ButtonSend type="submit">{t('sidebar.helpModal.button')}</ButtonSend>
        </Modalform>
      </ModalWrapper>
    </>
  );
};

export default NeedHelpModal;
