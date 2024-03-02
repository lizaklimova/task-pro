import { useState } from 'react';
import NeedHelpModal from '../../Modals/NeedHelpModal/NeedHelpModal';
import { openModal } from 'helpers';
import Help from 'components/Icons/Help';
import { HelpBtn } from '../SidebarContent/SidebarContent.styled';

const NeedHelp = () => {
  const [shownModal, setShownModal] = useState(false);

  return (
    <>
      <HelpBtn type="button" onClick={() => openModal(setShownModal)}>
        <Help
          width={20}
          height={20}
          strokeColor={'var(--sidebar-icon-color)'}
        />
        Need help?
      </HelpBtn>
      {shownModal && <NeedHelpModal showModal={setShownModal} />}
    </>
  );
};

export default NeedHelp;
