import React from 'react';
import { useNavigate } from 'react-router-dom';
import { localStorageService } from '../../services/localStorageService';

function BookRoomPage() {
  const navigate = useNavigate();
  if (!localStorageService.get('USER')) {
    navigate('/login');
  }
  return <div>roompaeg</div>;
}

export default BookRoomPage;
