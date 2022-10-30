import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import FooterMobile from '../components/Footer/FooterMobile';
import FooterSticky from '../components/Footer/FooterSticky';
import Header from '../components/Header/Header';
import HeaderHomePage from '../components/HeaderHomePage/HeaderHomePage';

function Mainlayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <FooterSticky />
      <FooterMobile />
    </div>
  );
}

export default Mainlayout;
