import { Link } from 'react-router-dom';
import Burger from 'components/Icons/Burger';
import ThemeSelect from 'components/ThemeSelect/ThemeSelect';
import Profile from 'components/Profile/Profile';
import { TempForLanguages } from 'components/TempForLanguages/TempForLanguages';
import { HeaderSection, BurgerBtn } from './Header.styled';

const Header = ({ openMenu }) => {
  return (
    <HeaderSection>
      <BurgerBtn type="button" onClick={openMenu}>
        <Burger width={24} height={24} fillColor={'#161616'} />
      </BurgerBtn>
      <ul style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
        <li>
          <Link to="/">Welcome</Link>
        </li>
        <li>
          <Link to="/auth">Auth</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
      </ul>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <TempForLanguages />
        <ThemeSelect />
        <Profile />
      </div>
    </HeaderSection>
  );
};

export default Header;
