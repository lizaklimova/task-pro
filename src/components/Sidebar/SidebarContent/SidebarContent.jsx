import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { logOut } from '../../../redux/auth/authOperations';
import { selectBoards } from '../../../redux/board/boardSelectors';
import { selectBoardSearch } from '../../../redux/search/searchSelectors';
import { boardSearch } from '../../../redux/search/searchSlice';
import plantImg from 'assets/images/sidebar/plant.png';
import Lightning from 'components/Icons/Lightning';
import LogOut from 'components/Icons/LogOut';
import BoardModal from 'components/Modals/BoardModal/BoardModal';
import NeedHelp from 'components/Sidebar/NeedHelp';
import Plus from 'components/Icons/Plus';
import AddedBoard from '../AddedBoard';
import DevModal from 'components/Modals/DevModal';
import SwiperDevModal from 'components/Modals/DevModal/SwiperDevModal';
import SearchBoardModal from 'components/Modals/SearchBoardModal';
import Search from 'components/Icons/Search';
import {
  AddBtn,
  Container,
  Content,
  CreateBox,
  CreateText,
  BoardLink,
  BoardContainer,
  SearchResultWrap,
  Footer,
  HelpContainer,
  HelpSpan,
  HelpText,
  LightningBox,
  Logo,
  LogoutBtn,
  LogoutText,
  BoardsWrap,
  MyBoard,
  SearchButton,
  DevsBtn,
} from './SidebarContent.styled';

const SidebarContent = () => {
  const [isAddBoardModalShown, setIsAddBoardModalShown] = useState(false);
  const [isEditBoardModalShown, setIsEditBoardModalShown] = useState(false);
  const [isDevModalOpen, setIsDevModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // const [searchValue, setSearchValue] = useState('');
  // const [filteredBoards, setFilteredBoards] = useState(allBoards);
  const [showSearchResult, setShowSearchResult] = useState(false);

  const dispatch = useDispatch();
  const { t } = useTranslation();
  const searchValue = useSelector(selectBoardSearch);
  const allBoards = useSelector(selectBoards);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    const { search } = event.target.elements;

    dispatch(boardSearch(search.value.trim().toLowerCase()));
    setShowSearchResult(true);
    setIsSearchModalOpen(false);
  };

  const handleLogOut = () => {
    localStorage.removeItem('app-theme');
    dispatch(logOut());
  };

  const filteredBoards = allBoards.filter(({ title }) => {
    return title && title.toLowerCase().trim().includes(searchValue);
  });

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

        <BoardsWrap>
          <MyBoard>{`${t('sidebar.boards')}: ${allBoards.length}`}</MyBoard>

          <SearchButton
            type="button"
            onClick={() => setIsSearchModalOpen(true)}
          >
            <Search width={16} height={16} />
          </SearchButton>
        </BoardsWrap>

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
          {showSearchResult && (
            <SearchResultWrap>
              <p>{`${t('sidebar.search')}: ${filteredBoards.length}`} </p>
              <button
                aria-label="show all boards"
                type="button"
                onClick={() => {
                  dispatch(boardSearch(''));
                  setShowSearchResult(false);
                }}
              >
                {t('sidebar.showAll')}
              </button>
            </SearchResultWrap>
          )}
          {filteredBoards.map(board => (
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

        <LogoutBtn type="button" aria-label="Log out" onClick={handleLogOut}>
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
          handleSubmit={handleSubmit}
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
