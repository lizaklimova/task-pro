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
        <ModalWrapper width={350} onClose={() => setShownModal(false)}>
          <p>Children Info</p>
        </ModalWrapper>
      )}
    </>
  );
};

export default ShownModal;
