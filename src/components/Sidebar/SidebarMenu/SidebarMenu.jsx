import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import SidebarContent from '../SidebarContent';
import { AsideBackdrop, AsideMenu } from './SidebarMenu.styled';

const SidebarMenu = ({ isMenuOpen, closeMenu }) => {
  useEffect(() => {
    const onEscClose = event => {
      if (event.code === 'Escape') closeMenu();
    };

    window.addEventListener('keydown', onEscClose);

    return window.removeEventListener('keydown', onEscClose);
  }, [closeMenu]);

  const onBackdropClose = ({ target, currentTarget }) => {
    if (target === currentTarget) closeMenu();
  };

  return createPortal(
    <>
      {isMenuOpen && <AsideBackdrop onClick={onBackdropClose} />}
      <AsideMenu className={isMenuOpen ? 'is-open' : ''}>
        <SidebarContent />
      </AsideMenu>
    </>,
    document.getElementById('menu-root')
  );
};

export default SidebarMenu;
