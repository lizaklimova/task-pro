import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import plantImg from 'assets/images/sidebar/plant.png';
import Lightning from 'components/Icons/Lightning';
import LogOut from 'components/Icons/LogOut';
import BoardModal from 'components/Modals/BoardModal';
import NeedHelp from 'components/Sidebar/NeedHelp';
import Plus from 'components/Icons/Plus';
import AddedBoard from '../AddedBoard';
import {
  AddBtn,
  Container,
  Content,
  CreateBox,
  CreateText,
  BoardBox,
  BoardContainer,
  Footer,
  HelpContainer,
  HelpSpan,
  HelpText,
  LightningBox,
  Logo,
  LogoutContainer,
  LogoutText,
  MyBoard,
} from './SidebarContent.styled';

const SidebarContent = () => {
  const [isAddBoardModalShown, setIsAddBoardModalShown] = useState(false);
  const [isEditBoardModalShown, setIsEditBoardModalShown] = useState(false);

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
          <AddBtn type="button" onClick={() => setIsAddBoardModalShown(true)}>
            <Plus
              width={20}
              height={20}
              strokeColor={'var(--sidebar-plus-icon)'}
            />
          </AddBtn>
        </CreateBox>

        <BoardContainer>
          <BoardBox>
            <AddedBoard openEditModal={() => setIsEditBoardModalShown(true)} />
          </BoardBox>
          <BoardBox>
            <AddedBoard openEditModal={() => setIsEditBoardModalShown(true)} />
          </BoardBox>
          <BoardBox>
            <AddedBoard openEditModal={() => setIsEditBoardModalShown(true)} />
          </BoardBox>
          <BoardBox>
            <AddedBoard openEditModal={() => setIsEditBoardModalShown(true)} />
          </BoardBox>
          <BoardBox>
            <AddedBoard openEditModal={() => setIsEditBoardModalShown(true)} />
          </BoardBox>
          <BoardBox>
            <AddedBoard openEditModal={() => setIsEditBoardModalShown(true)} />
          </BoardBox>
          <BoardBox>
            <AddedBoard openEditModal={() => setIsEditBoardModalShown(true)} />
          </BoardBox>
          <BoardBox>
            <AddedBoard openEditModal={() => setIsEditBoardModalShown(true)} />
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

      {isAddBoardModalShown && (
        <BoardModal
          variant="add"
          closeModal={() => setIsAddBoardModalShown(false)}
        />
      )}
      {isEditBoardModalShown && (
        <BoardModal
          variant="edit"
          closeModal={() => setIsEditBoardModalShown(false)}
        />
      )}
    </Container>
  );
};

export default SidebarContent;
