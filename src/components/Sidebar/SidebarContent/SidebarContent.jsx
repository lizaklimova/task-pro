/* import ShownModal from 'components/Modals/ShownModal'; */
// import Lightning from 'components/icons/Lightning';
import { LightningBox, Logo } from './SidebarContent.styled';
import Lightning from 'components/icons/Lightning';
import NeedHelp from 'components/NeedHelp/NeedHelp';

const SidebarContent = () => {
  return (
    <>
      <Logo>
        <LightningBox>
          <Lightning
            width={20}
            height={20}
            fillColor={'red'}
            strokeColor={'yellow'}
          />
        </LightningBox>

        <p>Task Pro</p>
      </Logo>
      <NeedHelp />
    </>
  );
};

export default SidebarContent;
