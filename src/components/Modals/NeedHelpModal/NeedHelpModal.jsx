import {} from './NeedHelpModal.css';
import ModalWrapper from 'components/Modals/ModalWrapper';
import { closeModal } from 'helpers';

const NeedHelpModal = ({ showModal }) => {
  const handleSubmit = evt => {
    if (evt.target === evt.currentTarget) {
      closeModal(showModal);
    }
  };

  return (
    <ModalWrapper width={400} onClose={() => closeModal(showModal)}>
      <h2 className="form-title-lh">Need Help</h2>
      <form onSubmit={handleSubmit} className="help-form">
        <input
          type="email"
          name="email"
          className="input-email"
          placeholder="Email address"
        />

        <textarea
          type="text"
          name="comment"
          className="comment"
          placeholder="Comment"
        />

        <button type="submit" className="btn-send-lg">
          Send
        </button>
      </form>
    </ModalWrapper>
  );
};

export default NeedHelpModal;
