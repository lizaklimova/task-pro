import { useState } from 'react';
import Sidebar from 'components/Sidebar';
import SidebarMenu from 'components/Sidebar/SidebarMenu';
import Header from 'components/Header';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <Header openMenu={openMenu} />

      <Sidebar />
      <SidebarMenu isMenuOpen={isMenuOpen} closeMenu={closeMenu} />

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default SharedLayout;
