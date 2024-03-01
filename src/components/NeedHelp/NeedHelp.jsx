import { useState } from 'react';
import NeedHelpModal from '../NeedHelpModal/NeedHelpModal';

const NeedHelp = () => {
  const [shownModal, setShownModal] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setShownModal(true)}>
        Need help?
      </button>
      {shownModal && <NeedHelpModal setShowModal={setShownModal} />}
    </>
  );
};

export default NeedHelp;
