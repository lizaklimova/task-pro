import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, BurgerBtn } from './SharedLayout.styled';
import Burger from 'components/icons/Burger';

const SharedLayout = ({ openMenu }) => {
  return (
    <Header>
      <BurgerBtn type="button" onClick={openMenu}>
        <Burger width={24} height={24} />
      </BurgerBtn>
      <Suspense fallback="Loading">
        <Outlet />
      </Suspense>
    </Header>
  );
};

export default SharedLayout;
