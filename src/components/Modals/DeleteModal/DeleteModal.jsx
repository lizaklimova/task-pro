import { useState } from 'react';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
import Trash from 'components/Icons/Trash';
import { ChangeIcons } from 'components/Sidebar/SidebarContent/SidebarContent.styled';
import { DeleteModalContent } from './DeleteModalContent';

export const DeleteModal = () => {
  const [shownModal, setShownModal] = useState(false);

  return (
    <>
      <ChangeIcons type="button" onClick={() => setShownModal(true)}>
        <Trash
          width={16}
          height={16}
          strokeColor={'var(--sidebar-change-color'}
        />
      </ChangeIcons>
      {shownModal && (
        <ModalWrapper width={335} onClose={() => setShownModal(false)}>
          <DeleteModalContent />
        </ModalWrapper>
      )}
    </>
  );
};
