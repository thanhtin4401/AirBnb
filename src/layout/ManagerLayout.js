import React from 'react';
import { Outlet } from 'react-router-dom';
<<<<<<< HEAD

function ManagerLayout() {
  return (
    <div>
=======
import Sidebar from '../layout/Sidebar/Sidebar';

function ManagerLayout() {
  return (
    <div
      style={{
        padding: '50px 0px 0px 370px',
      }}
    >
      <Sidebar />
>>>>>>> d8781471cab2e6d8b2bd9aea73a1e822b6d93683
      <Outlet />
    </div>
  );
}

export default ManagerLayout;
