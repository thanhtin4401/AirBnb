import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { localStorageService } from '../../services/localStorageService';

function RequestAuth({ children }) {
  const auth = useSelector((state) => state.auth.isLoggedIn);

  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.isLoggedIn) navigate('/login');
  }, [auth.isLoggedIn, navigate]);
  return <>{children}</>;
}

export default RequestAuth;
