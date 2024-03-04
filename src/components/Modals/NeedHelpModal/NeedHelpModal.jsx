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
/*import axios from 'axios';*/

const NeedHelpModal = ({ showModal }) => {
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const { t } = useTranslation();

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log(email, text);

    if (email.trim() === '' || text.trim() === '') {
      toast.error(t('sidebar.helpModal.toast.error'), {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      return;
    }

    toast.success(t('sidebar.helpModal.toast.success'), {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
    setTimeout(() => {
      showModal(false);
    }, 4000);
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
        <ToastContainer />
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
