import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { logOut } from '../../../redux/auth/authOperations';
import { selectBoards } from '../../../redux/board/boardSelectors';
import plantImg from 'assets/images/sidebar/plant.png';
import Lightning from 'components/Icons/Lightning';
import LogOut from 'components/Icons/LogOut';
import BoardModal from 'components/Modals/BoardModal/BoardModal';
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
import SwiperDevModal from 'components/Modals/DevModal/SwiperDevModal';
import SearchBoardModal from 'components/Modals/SearchBoardModal/SearchBoardModal';
import Search from 'components/Icons/Search';
import { FilterButton } from 'components/Dashboard/BoardHeader/BoardHeader.styled';

const SidebarContent = () => {
  const [isAddBoardModalShown, setIsAddBoardModalShown] = useState(false);
  const [isEditBoardModalShown, setIsEditBoardModalShown] = useState(false);
  const [isDevModalOpen, setIsDevModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [searchValue, setSearchValue] = useState('');

  const allBoards = useSelector(selectBoards);

  const allBoardsTitles = allBoards.map(board => board.title);

  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSearchClick = () => {
    setIsSearchModalOpen(true);
  };

  const handleSearchChange = event => {
    setSearchValue(event.target.value.trim().toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(allBoards);
    const filteredBoards = allBoardsTitles.filter(title =>
      title.trim().toLowerCase().includes(searchValue)
    );
    console.log('Filtered boards:', filteredBoards);
    setIsSearchModalOpen(false);
  };

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

        <FilterButton type="button" onClick={handleSearchClick}>
          <Search width={16} height={16} />
        </FilterButton>

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
          {allBoards?.map(board => (
            <BoardLink key={board._id} to={`/home/${board._id}`}>
              <AddedBoard
                allBoards={allBoards}
                board={board}
                openEditModal={() => setIsEditBoardModalShown(true)}
              />
            </BoardLink>
          ))}
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

      {isSearchModalOpen && (
        <SearchBoardModal
          onClose={() => setIsSearchModalOpen(false)}
          searchValue={searchValue}
          handleSubmit={handleSubmit}
          handleSearchChange={handleSearchChange}
        />
      )}

      {windowWidth < 768 ? (
        <SwiperDevModal
          isOpen={isDevModalOpen}
          onClose={() => setIsDevModalOpen(false)}
        />
      ) : (
        <DevModal
          isOpen={isDevModalOpen}
          onClose={() => setIsDevModalOpen(false)}
        />
      )}
    </Container>
  );
};

export default SidebarContent;
