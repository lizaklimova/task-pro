import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import ModalWrapper from 'components/Modals/ModalWrapper';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { TOASTER_CONFIG } from 'constants';
import { support } from '../../../redux/support/support';

import {
  Modalform,
  ModalTitle,
  Emailinput,
  Commenttextarea,
  ButtonSend,
} from './NeedHelpModal.styled';

const NeedHelpModal = ({ showModal }) => {
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleSubmit = async evt => {
    evt.preventDefault();

    if (email.trim() === '' || text.trim() === '') {
      toast(t('sidebar.helpModal.toast.error'), TOASTER_CONFIG);
      return;
    }

    if (text.trim().length < 5) {
      toast(t('sidebar.helpModal.toast.long'), TOASTER_CONFIG);
      return;
    }

    try {
      dispatch(support({ email, text }));
      toast(t('sidebar.helpModal.toast.success'), TOASTER_CONFIG);
      showModal(false);
    } catch (error) {
      toast('Failed to send email', TOASTER_CONFIG);
    }
  };

  const handleEmailChange = evt => {
    setEmail(evt.target.value);
  };

  const handleTextChange = evt => {
    setText(evt.target.value);
  };

  return (
    <>
      <ModalWrapper width={400} onClose={() => showModal(false)}>
        <Modalform onSubmit={handleSubmit} className="help-form">
          <ModalTitle>{t('sidebar.helpModal.title')}</ModalTitle>
          <Emailinput
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            placeholder={t('sidebar.helpModal.email')}
          />
          <Commenttextarea
            type="text"
            name="comment"
            value={text}
            onChange={handleTextChange}
            placeholder={t('sidebar.helpModal.comment')}
          />
          <ButtonSend type="submit">{t('sidebar.helpModal.button')}</ButtonSend>
        </Modalform>
      </ModalWrapper>
    </>
  );
};

export default NeedHelpModal;
