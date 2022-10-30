import React from 'react';
import { Outlet } from 'react-router-dom';

function ManagerLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default ManagerLayout;
