import React, { useEffect } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { localStorageService } from '../../services/localStorageService';

function RequestAuth({ children }) {
  const auth = localStorageService.get('USER');
  const navigate = useNavigate();
  console.log(auth);
  useEffect(() => {
    if (!auth) {
      // <Navigate to="/Login" />;
      navigate('/Login');
    }
  }, [navigate]);
  return <>{children}</>;
}

export default RequestAuth;
