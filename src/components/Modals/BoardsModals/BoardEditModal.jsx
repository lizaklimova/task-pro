import { useState } from 'react';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
import Pencil from 'components/Icons/Pencil';
import { ChangeIcons } from 'components/Sidebar/SidebarContent/SidebarContent.styled';

export const BoardEditModal = () => {
  const [shownModal, setShownModal] = useState(false);

  return (
    <>
      <ChangeIcons type="button" onClick={() => setShownModal(true)}>
        <Pencil
          width={16}
          height={16}
          strokeColor={'var(--sidebar-change-color'}
        />
      </ChangeIcons>
      {shownModal && (
        <ModalWrapper width="400px" onClose={() => setShownModal(false)}>
          <p style={{ color: 'white' }}>Children Info</p>
        </ModalWrapper>
      )}
    </>
  );
};
