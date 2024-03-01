import { useState } from 'react';
import NeedHelpModal from '../../Modals/NeedHelpModal/NeedHelpModal';
import { openModal } from 'helpers';

const NeedHelp = () => {
  const [shownModal, setShownModal] = useState(false);

  return (
    <>
      <button type="button" onClick={() => openModal(setShownModal)}>
        Need help?
      </button>
      {shownModal && <NeedHelpModal showModal={setShownModal} />}
    </>
  );
};

export default NeedHelp;
