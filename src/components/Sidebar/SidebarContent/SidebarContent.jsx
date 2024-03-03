import { margin } from '@mui/system';
import {
  AddBtn,
  BoardBox,
  BoardBoxInfo,
  BoardContainer,
  ChangeBox,
  ChangeIcons,
  Container,
  Content,
  CreateBox,
  CreateText,
  Footer,
  HelpBtn,
  HelpContainer,
  HelpSpan,
  HelpText,
  LightningBox,
  Logo,
  LogoutContainer,
  LogoutText,
  MyBoard,
  NameBox,
} from './SidebarContent.styled';
import Lightning from 'components/Icons/Lightning';
import Plus from 'components/Icons/Plus';
import { BoardCreateModal } from 'components/Modals/BoardsModals/BoardCreateModal';
import NeedHelp from 'components/Sidebar/NeedHelp/NeedHelp';
import Pencil from 'components/Icons/Pencil';
import Trash from 'components/Icons/Trash';
import FourCircles from 'components/Icons/FourCircles';
import Denis from '../../../assets/images/Denis.png';
import Help from 'components/Icons/Help';
import LogOut from 'components/Icons/LogOut';

const SidebarContent = () => {
  return (
    <Container>
      <Content>
        <Logo>
          <LightningBox>
            <Lightning
              width={12}
              height={18}
              fillColor={'var(--sidebar-lightning-fill)'}
            />
          </LightningBox>

          <p>Task Pro</p>
        </Logo>

        <MyBoard>My boards</MyBoard>
        <CreateBox>
          <CreateText>Create a new board</CreateText>
          <BoardCreateModal />
        </CreateBox>
        <BoardContainer id="boards">
          <BoardBox>
            <BoardBoxInfo>
              <NameBox>
                <FourCircles
                  width={16}
                  height={16}
                  strokeColor={'var(--sidebar-icon-color)'}
                />
                <p>Project office</p>
              </NameBox>
              <ChangeBox>
                <ChangeIcons type="button">
                  <Pencil
                    width={16}
                    height={16}
                    strokeColor={'var(--sidebar-change-color'}
                  />
                </ChangeIcons>
                <ChangeIcons type="button">
                  <Trash
                    width={16}
                    height={16}
                    strokeColor={'var(--sidebar-change-color'}
                  />
                </ChangeIcons>
              </ChangeBox>
            </BoardBoxInfo>
          </BoardBox>
        </BoardContainer>
      </Content>
      <Footer>
        <HelpContainer>
          <img src={Denis} alt="" />
          <HelpText>
            If you need help with <br />
            <HelpSpan>TaskPro</HelpSpan>, check out our support resources or
            reach out to our customer support team.
          </HelpText>

          <NeedHelp />
        </HelpContainer>

        <LogoutContainer>
          <LogOut
            width={32}
            height={32}
            strokeColor={'var(--sidebar-logout)'}
          />
          <LogoutText>Log out</LogoutText>
        </LogoutContainer>
      </Footer>
    </Container>
  );
};

export default SidebarContent;
