/* import ShownModal from 'components/Modals/ShownModal'; */
// import Lightning from 'components/icons/Lightning';
import { LightningBox, Logo } from './SidebarContent.styled';
import Lightning from 'components/Icons/Lightning';
import { BoardCreateModal } from 'components/Modals/BoardsModals/BoardCreateModal';
import NeedHelp from 'components/Sidebar/NeedHelp/NeedHelp';

const SidebarContent = () => {
  return (
    <>
      <Logo>
        <LightningBox>
          <Lightning
            width={12}
            height={16}
            fillColor={'white'}
            strokeColor={'white'}
          />
        </LightningBox>

        <p>Task Pro</p>
      </Logo>
      <BoardCreateModal />
      <NeedHelp />
    </>
  );
};

export default SidebarContent;
