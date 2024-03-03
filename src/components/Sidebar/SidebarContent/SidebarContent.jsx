import { useTranslation } from 'react-i18next';
import {
  BoardBox,
  BoardBoxInfo,
  BoardContainer,
  ChangeBox,
  Container,
  Content,
  CreateBox,
  CreateText,
  Footer,
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
import plantImg from 'assets/images/sidebar/plant.png';
import Lightning from 'components/Icons/Lightning';
import FourCircles from 'components/Icons/FourCircles';
import LogOut from 'components/Icons/LogOut';
import { BoardCreateModal } from 'components/Modals/BoardsModals/BoardCreateModal';
import NeedHelp from 'components/Sidebar/NeedHelp';
import { DeleteModal } from 'components/Modals/DeleteModal/DeleteModal';
import { BoardEditModal } from 'components/Modals/BoardsModals/BoardEditModal';

const SidebarContent = () => {
  const { t } = useTranslation();
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

        <MyBoard>{t('sidebar.boards')}</MyBoard>
        <CreateBox>
          <CreateText>{t('sidebar.create')}</CreateText>
          <BoardCreateModal />
        </CreateBox>
        <BoardContainer>
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
                <BoardEditModal />
                <DeleteModal />
              </ChangeBox>
            </BoardBoxInfo>
          </BoardBox>

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
                <BoardEditModal />
                <DeleteModal />
              </ChangeBox>
            </BoardBoxInfo>
          </BoardBox>
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
                <BoardEditModal />
                <DeleteModal />
              </ChangeBox>
            </BoardBoxInfo>
          </BoardBox>
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
                <BoardEditModal />
                <DeleteModal />
              </ChangeBox>
            </BoardBoxInfo>
          </BoardBox>
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
                <BoardEditModal />
                <DeleteModal />
              </ChangeBox>
            </BoardBoxInfo>
          </BoardBox>
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
                <BoardEditModal />
                <DeleteModal />
              </ChangeBox>
            </BoardBoxInfo>
          </BoardBox>
        </BoardContainer>
      </Content>
      <Footer>
        <HelpContainer>
          <img src={plantImg} alt="plant" />
          <HelpText>
            {t('sidebar.helpText1')}&nbsp;
            <HelpSpan>TaskPro</HelpSpan>
            {t('sidebar.helpText2')}
          </HelpText>

          <NeedHelp />
        </HelpContainer>

        <LogoutContainer>
          <LogOut
            width={32}
            height={32}
            strokeColor={'var(--sidebar-logout)'}
          />
          <LogoutText>{t('sidebar.logoutButton')}</LogoutText>
        </LogoutContainer>
      </Footer>
    </Container>
  );
};

export default SidebarContent;
