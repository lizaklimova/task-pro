import Burger from 'components/Icons/Burger';
import ThemeSelect from 'components/ThemeSelect/ThemeSelect';
import Profile from 'components/Profile/Profile';
import { TempForLanguages } from 'components/TempForLanguages/TempForLanguages';
import { HeaderSection, BurgerBtn, HeaderUserWrap } from './Header.styled';

const Header = ({ openMenu }) => {
  return (
    <HeaderSection>
      <BurgerBtn type="button" onClick={openMenu}>
        <Burger width={24} height={24} fillColor={'#161616'} />
      </BurgerBtn>

      <HeaderUserWrap>
        <TempForLanguages />
        <ThemeSelect />
        <Profile />
      </HeaderUserWrap>
    </HeaderSection>
  );
};

export default Header;
