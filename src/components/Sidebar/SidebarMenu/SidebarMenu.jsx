import { useEffect } from 'react';
import SidebarContent from '../SidebarContent';
import { AsideBackdrop, AsideMenu } from './SidebarMenu.styled';

const SidebarMenu = ({ isMenuOpen, closeMenu }) => {
  useEffect(() => {
    const onEscClose = event => {
      if (event.code === 'Escape') {
        closeMenu();
        // document.body.style.overflow = '';
      }
    };

    window.addEventListener('keydown', onEscClose);

    return window.removeEventListener('keydown', onEscClose);
  }, [closeMenu]);

  const onBackdropClose = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      closeMenu();
      // document.body.style.overflow = '';
    }
  };

  return (
    <>
      {isMenuOpen && <AsideBackdrop onClick={onBackdropClose} />}
      <AsideMenu className={isMenuOpen ? 'is-open' : ''}>
        <SidebarContent />
      </AsideMenu>
    </>
  );
};

export default SidebarMenu;
