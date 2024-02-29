import { useState } from 'react';
import ModalWrapper from './ModalWrapper/ModalWrapper';

const ShownModal = () => {
  const [shownModal, setShownModal] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setShownModal(true)}>
        Open Modal
      </button>
      {shownModal && (
        <ModalWrapper width="400px" onClose={() => setShownModal(false)}>
          <p style={{ color: 'white' }}>Children Info</p>
        </ModalWrapper>
      )}
    </>
  );
};

export default ShownModal;
