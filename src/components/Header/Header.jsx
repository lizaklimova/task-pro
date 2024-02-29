import { HeaderSection, BurgerBtn } from './Header.styled';
import Burger from 'components/icons/Burger';

const Header = ({ openMenu }) => {
  return (
    <HeaderSection>
      <BurgerBtn type="button" onClick={openMenu}>
        <Burger width={24} height={24} />
      </BurgerBtn>
    </HeaderSection>
  );
};

export default Header;
