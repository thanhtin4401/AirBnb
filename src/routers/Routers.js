import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RequestAuth from '../components/App/requestAuth';
import RequestPage from '../components/App/requestPage';
import Authlayout from '../layout/Authlayout';
import Mainlayout from '../layout/Mainlayout';
import ManagerLayout from '../layout/ManagerLayout';
import BookRoomPage from '../pages/BookRoomPage.js/BookRoomPage';
import HomePage from '../pages/HomePage/HomePage';
import Login from '../pages/Login/Login';
import ManagerHome from '../pages/Manager/ManagerHome';
import NoteFoundPage from '../pages/NotFoundPage/NoteFoundPage';

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route path="/" element={<HomePage />}></Route>
        </Route>
        <Route
          path="/BookRoom"
          element={
            <RequestAuth>
              <Mainlayout />
            </RequestAuth>
          }
        >
          <Route path="/BookRoom" element={<BookRoomPage />}></Route>
        </Route>
        <Route
          path="/"
          element={
            <RequestPage>
              <Authlayout />
            </RequestPage>
          }
        >
          <Route path="/Login" element={<Login />}></Route>
        </Route>
        <Route path="/Manager" element={<ManagerLayout />}>
          <Route path="ManagerHome" element={<ManagerHome />}></Route>
        </Route>
        <Route path="/*" element={<NoteFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
