import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../redux/auth/authOperations';

import plantImg from 'assets/images/sidebar/plant.png';
import Lightning from 'components/Icons/Lightning';
import LogOut from 'components/Icons/LogOut';
import BoardModal from 'components/Modals/BoardModal';
import NeedHelp from 'components/Sidebar/NeedHelp';
import Plus from 'components/Icons/Plus';
import AddedBoard from '../AddedBoard';
import DevModal from 'components/Modals/DevModal';
import {
  AddBtn,
  Container,
  Content,
  CreateBox,
  CreateText,
  BoardLink,
  BoardContainer,
  Footer,
  HelpContainer,
  HelpSpan,
  HelpText,
  LightningBox,
  Logo,
  LogoutBtn,
  LogoutText,
  MyBoard,
  DevsBtn,
} from './SidebarContent.styled';

const SidebarContent = () => {
  const [isAddBoardModalShown, setIsAddBoardModalShown] = useState(false);
  const [isEditBoardModalShown, setIsEditBoardModalShown] = useState(false);
  const [isDevModalOpen, setIsDevModalOpen] = useState(false);

  const dispatch = useDispatch();
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

        <DevsBtn
          type="button"
          aria-label="Open developers modal"
          onClick={() => setIsDevModalOpen(true)}
        >
          © {t('developersModal.text')}
        </DevsBtn>

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
          <BoardLink to={`/home/${nanoid()}`}>
            <AddedBoard openEditModal={() => setIsEditBoardModalShown(true)} />
          </BoardLink>
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

        <LogoutBtn
          type="button"
          aria-label="Log out"
          onClick={() => dispatch(logOut())}
        >
          <LogOut
            width={32}
            height={32}
            strokeColor={'var(--sidebar-logout)'}
          />
          <LogoutText>{t('sidebar.logoutButton')}</LogoutText>
        </LogoutBtn>
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
      <DevModal
        isOpen={isDevModalOpen}
        onClose={() => setIsDevModalOpen(false)}
      />
    </Container>
  );
};

export default SidebarContent;
