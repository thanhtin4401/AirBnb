import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login/Login';
import NoteFoundPage from '../pages/NotFoundPage/NoteFoundPage';

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<NoteFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
