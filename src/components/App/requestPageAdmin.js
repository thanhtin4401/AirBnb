import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { localStorageService } from '../../services/localStorageService';

function RequestPageAdmin() {
  const auth = localStorageService.get('USER');

  const navigate = useNavigate();

  useEffect(() => {
    if (!auth || auth.user.role != 'ADMIN') {
      navigate('/');
    }
  }, [auth]);
  useEffect(() => {
    if (!auth || auth.user.role != 'ADMIN') {
      navigate('/');
    }
  }, []);
  return <Outlet />;
}

export default RequestPageAdmin;
