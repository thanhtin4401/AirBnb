import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

function Mainlayout() {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default Mainlayout;
