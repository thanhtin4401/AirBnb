import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { localStorageService } from '../../services/localStorageService';

function ProtectedRoute() {
  const user = localStorageService.get('USER');
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}

export default ProtectedRoute;
