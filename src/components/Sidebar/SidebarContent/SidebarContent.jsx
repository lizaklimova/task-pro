import ShownModal from 'components/Modals/ShownModal';
// import Lightning from 'components/icons/Lightning';
import { LightningBox, Logo } from './SidebarContent.styled';
import Lightning from 'components/icons/Lightning';

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
      <ShownModal />
    </>
  );
};

export default SidebarContent;
