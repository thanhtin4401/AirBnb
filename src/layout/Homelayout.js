import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import FooterMobile from '../components/Footer/FooterMobile';
import FooterSticky from '../components/Footer/FooterSticky';
import HeaderHomePage from '../components/HeaderHomePage/HeaderHomePage';

function Mainlayout() {
  return (
    <div>
      <HeaderHomePage />
      <Outlet />
      <Footer />
      <FooterSticky />
      
      <FooterMobile />
    </div>
  );
}

export default Mainlayout;
