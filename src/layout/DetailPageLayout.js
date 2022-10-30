import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import HeaderHomePage from '../components/HeaderHomePage/HeaderHomePage';
function DetailPageLayout() {
  return (
    <div>
      <div className="mb:hidden sm:hidden md:block">
        <Header />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default DetailPageLayout;
