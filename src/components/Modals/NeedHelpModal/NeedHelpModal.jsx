import React, { useState } from 'react';
import ModalWrapper from 'components/Modals/ModalWrapper';
import { closeModal } from 'helpers';
import {
  Modalform,
  ModalTitle,
  Emailinput,
  Commenttextarea,
  ButtonSend,
} from './NeedHelpModal.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NeedHelpModal = ({ showModal }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();

    if (query.trim() === '') {
      toast.error('Please enter data to submit');
      return;
    }

    toast.success('Form submit is successfully!');

    setTimeout(() => {
      closeModal(showModal);
    }, 4000);
  };

  const handleChange = evt => {
    setQuery(evt.target.value);
  };

  return (
    <>
      <ModalWrapper width={400} onClose={() => closeModal(showModal)}>
        <ToastContainer />
        <Modalform onSubmit={handleSubmit} className="help-form">
          <ModalTitle>Need Help</ModalTitle>
          <Emailinput type="email" name="email" placeholder="Email address" />
          <Commenttextarea
            type="text"
            name="comment"
            placeholder="Comment"
            value={query}
            onChange={handleChange}
          />
          <ButtonSend type="submit">Send</ButtonSend>
        </Modalform>
      </ModalWrapper>
    </>
  );
};

export default NeedHelpModal;
