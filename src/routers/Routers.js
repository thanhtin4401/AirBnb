import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RequestAuth from '../components/App/requestAuth';
import RequestPage from '../components/App/requestPage';
import Authlayout from '../layout/Authlayout';
import Mainlayout from '../layout/Mainlayout';
import DetailRoomPage from '../pages/DetailRoomPage/DetailRoomPage';

import HomePage from '../pages/HomePage/HomePage';
import Login from '../pages/Login/Login';
import NoteFoundPage from '../pages/NotFoundPage/NoteFoundPage';
import Register from '../pages/RegisterPage/Register';

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/Detail-Room" element={<DetailRoomPage />}></Route>
        </Route>
        <Route
          path="/"
          element={
            <RequestAuth>
              <Mainlayout />
            </RequestAuth>
          }
        >
          {/* <Route path="/Detail-Room" element={<DetailRoomPage />}></Route> */}
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
          <Route path="/Register" element={<Register />}></Route>
        </Route>
        <Route path="/*" element={<NoteFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
