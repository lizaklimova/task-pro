import React, { useState } from 'react';
import ModalWrapper from 'components/Modals/ModalWrapper';
import {
  Modalform,
  ModalTitle,
  Emailinput,
  Commenttextarea,
  ButtonSend,
} from './NeedHelpModal.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';

const NeedHelpModal = ({ showModal }) => {
  const [query, setQuery] = useState('');
  const { t } = useTranslation();

  const handleSubmit = evt => {
    evt.preventDefault();

    if (query.trim() === '') {
      toast.error('Please enter data to submit');
      return;
    }

    toast.success('Form submit is successfully!');

    setTimeout(() => {
      showModal(false);
    }, 4000);
  };

  const handleChange = evt => {
    setQuery(evt.target.value);
  };

  return (
    <>
      <ModalWrapper width={400} onClose={() => showModal(false)}>
        <ToastContainer />
        <Modalform onSubmit={handleSubmit} className="help-form">
          <ModalTitle>{t('sidebar.helpModal.title')}</ModalTitle>
          <Emailinput
            type="email"
            name="email"
            placeholder={t('sidebar.helpModal.email')}
          />
          <Commenttextarea
            type="text"
            name="comment"
            placeholder={t('sidebar.helpModal.comment')}
            value={query}
            onChange={handleChange}
          />
          <ButtonSend type="submit">{t('sidebar.helpModal.button')}</ButtonSend>
        </Modalform>
      </ModalWrapper>
    </>
  );
};

export default NeedHelpModal;
