import { HeaderSection, BurgerBtn } from './Header.styled';
import Burger from 'components/icons/Burger';
import ThemeSelect from 'components/ThemeSelect/ThemeSelect';
import Profile from 'components/Profile/Profile';
import {TempForLanguages} from 'components/TempForLanguages/TempForLanguages';

const Header = ({ openMenu }) => {
  return (
    <HeaderSection>
      <BurgerBtn type="button" onClick={openMenu}>
        <Burger width={24} height={24} fill={'#161616'} />
      </BurgerBtn>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <TempForLanguages/>
        <ThemeSelect />
        <Profile />
      </div>
    </HeaderSection>
  );
};

export default Header;
