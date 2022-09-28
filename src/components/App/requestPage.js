import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { localStorageService } from '../../services/localStorageService';

function RequestPage() {
  const auth = localStorageService.get('USER');
  const navigate = useNavigate();
  useEffect(() => {
    if (auth) {
      navigate('/Home');
    }
  }, [auth]);
  return <Outlet />;
}

export default RequestPage;
