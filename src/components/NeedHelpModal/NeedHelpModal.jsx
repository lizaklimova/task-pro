import Close from '..//icons/Close';
import {} from './NeedHelpModal.css';
import { useEffect } from 'react';

const NeedHelpModal = ({ onClose }) => {
  useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  const handleSubmit = evt => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      <div className="modal-overlay">
        <div className="modal-help">
          <form onSubmit={handleSubmit} className="help-form">
            <button type="button" className="close-button" onClick={onClose}>
              <Close
                width={18}
                height={18}
                fillColor="#fff"
                strokeColor="#fff"
              />
            </button>
            <h2 className="form-title-lh">Need Help</h2>
            <div>
              <input
                type="email"
                name="email"
                className="input-email"
                placeholder="Email address"
              />
            </div>
            <div className="row-form">
              <textarea
                type="text"
                name="comment"
                className="comment"
                placeholder="Comment"
              />
            </div>
            <button type="submit" className="btn-send-lg">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NeedHelpModal;
