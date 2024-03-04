import { useState } from 'react';
import ModalWrapper from 'components/Modals/ModalWrapper/ModalWrapper';
import developers from './developers_info.json';
import DevList from './DevList';

const DevModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <>
      {isModalOpen && (
        <ModalWrapper width={335} onClose={() => setIsModalOpen(false)}>
          <DevList developers={developers.developers} />
        </ModalWrapper>
      )}
    </>
  );
};

export default DevModal;
