import React, { useState } from 'react';
import ModalWrapper from 'components/Modals/ModalWrapper';
import { closeModal } from 'helpers';
import {
  Modalform,
  ModalTitle,
  Emailinput,
  Commenttextarea,
  ButtonSend,
  ModalMessage,
  ModalMessageSucces,
} from './NeedHelpModal.styled';

const NeedHelpModal = ({ showModal }) => {
  const [query, setQuery] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();

    if (query.trim() === '') {
      setErrorMessage('Please enter data to submit');
      setTimeout(() => {
        setErrorMessage('');
      }, 4000); // Таймінг 4 сек
      return;
    }

    setSuccessMessage('Form submitted successfull!');
    setTimeout(() => {
      setSuccessMessage('');
      closeModal(showModal);
    }, 4000);
  };

  const handleChange = evt => {
    setQuery(evt.target.value);
  };

  return (
    <ModalWrapper width={400} onClose={() => closeModal(showModal)}>
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
      {errorMessage && <ModalMessage>{errorMessage}</ModalMessage>}
      {successMessage && (
        <ModalMessageSucces>{successMessage}</ModalMessageSucces>
      )}
    </ModalWrapper>
  );
};

export default NeedHelpModal;
