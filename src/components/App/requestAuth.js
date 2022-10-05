import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { localStorageService } from '../../services/localStorageService';

function RequestAuth({ children }) {
  const auth = useSelector((state) => state.auth.isLoggedIn);
  console.log(auth);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(auth);
    console.log('hello');
    if (!auth) {
      // <Navigate to="/Login" />;
      navigate('/Login');
    }
  }, [navigate]);
  return <>{children}</>;
}

export default RequestAuth;
