import Close from '..//icons/Close';
import {} from './NeedHelpModal.css';
import { useEffect } from 'react';

const NeedHelpModal = ({ setShowModal }) => {
  useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.code === 'Escape') {
        setShowModal(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [setShowModal]);

  const handleSubmit = evt => {
    if (evt.target === evt.currentTarget) {
      setShowModal(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="help-form">
        <Close
          className="close-icon"
          width={18}
          height={18}
          fillColor="#fff"
          strokeColor="#fff"
          onClick={() => setShowModal(false)}
        />
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
          <input
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
    </>
  );
};

export default NeedHelpModal;
