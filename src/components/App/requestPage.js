import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { localStorageService } from '../../services/localStorageService';

function RequestPage() {
  const auth = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();
  useEffect(() => {
    if (auth) {
      navigate('/Home');
    }
  }, [auth]);
  return <Outlet />;
}

export default RequestPage;
