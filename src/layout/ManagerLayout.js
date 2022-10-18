import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../layout/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

function ManagerLayout() {
  return (
    <div
      style={{
        padding: '50px 0px 0px 370px',
      }}
    >
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default ManagerLayout;
