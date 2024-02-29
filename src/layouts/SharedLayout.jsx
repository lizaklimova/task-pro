import { useState } from 'react';
import Sidebar from 'components/Sidebar';
import SidebarMenu from 'components/Sidebar/SidebarMenu';
import Header from 'components/Header';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
    // document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    // document.body.style.overflow = '';
  };

  return (
    <>
      <Header openMenu={openMenu} />
      {window.innerWidth >= 1440 ? (
        <Sidebar />
      ) : (
        <SidebarMenu isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
      )}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default SharedLayout;
