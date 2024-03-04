import { useState } from 'react';
import NeedHelpModal from '../../Modals/NeedHelpModal/NeedHelpModal';
import Help from 'components/Icons/Help';
import { HelpBtn } from '../SidebarContent/SidebarContent.styled';
import { useTranslation } from 'react-i18next';

const NeedHelp = () => {
  const [shownModal, setShownModal] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <HelpBtn type="button" onClick={() => setShownModal(true)}>
        <Help
          width={20}
          height={20}
          strokeColor={'var(--sidebar-icon-color)'}
        />
        {t('sidebar.helpModal.title')}
      </HelpBtn>
      {shownModal && <NeedHelpModal showModal={setShownModal} />}
    </>
  );
};

export default NeedHelp;
