import { useState } from 'react';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
import { IconsList } from './IconsList';
// import { BacksIconsList } from './BacksIconsList';

export const BoardModal = () => {
  const [shownModal, setShownModal] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setShownModal(true)}>
        Open Modal Board Base
      </button>
      {shownModal && (
        <ModalWrapper width="400px" onClose={() => setShownModal(false)}>
          <h3 style={{ color: 'white' }}>New board</h3>
          <input type="text" placeholder="Title" />
          <p style={{ color: 'white' }}>Icons</p>
          <IconsList />
          <p style={{ color: 'white' }}>Background</p>
          {/* <BacksIconsList /> */}
        </ModalWrapper>
      )}
    </>
  );
};
