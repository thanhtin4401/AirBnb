import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RequestAuth from '../components/App/requestAuth';
import RequestPage from '../components/App/requestPage';
import Authlayout from '../layout/Authlayout';
import Mainlayout from '../layout/Mainlayout';
<<<<<<< HEAD
import ManagerLayout from '../layout/ManagerLayout';
import BookRoomPage from '../pages/BookRoomPage.js/BookRoomPage';
=======
import Homelayout from '../layout/Homelayout';
import DetailRoomPage from '../pages/DetailRoomPage/DetailRoomPage';

>>>>>>> d8781471cab2e6d8b2bd9aea73a1e822b6d93683
import HomePage from '../pages/HomePage/HomePage';
import Login from '../pages/Login/Login';
import ManagerHome from '../pages/Manager/ManagerHome';
import NoteFoundPage from '../pages/NotFoundPage/NoteFoundPage';
import SearchPage from '../pages/SearchPage/SearchPage';
import Register from '../pages/RegisterPage/Register';
import ManagerLayout from '../layout/ManagerLayout';
import ManagerPage from '../pages/ManagerPage/ManagerPage';
import 'boxicons/css/boxicons.min.css';
import ProfilePageMobile from '../pages/ProfilePage/ProfilePageMobile';
import HotelManager from '../pages/HotelManager/HotelManager';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import MessagePage from '../pages/MessagePage/MessagePage';
import DetailPageLayout from '../layout/DetailPageLayout';
import InfoTripPage from '../pages/InfoTripPage/InfoTripPage';
import Wishlists from '../pages/WishlistsPage/WishlistsPage';
import UserManager from '../pages/UserManager/UserManager';
import RoomManager from '../pages/RoomManager/RoomManager';
import LocationManager from '../pages/LocationManager/LocationManager';
import UserAddForm from '../pages/UserManager/UserAdd/UserAddForm';

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homelayout />}>
          <Route path="/" element={<HomePage />}></Route>
        </Route>
        <Route path="/" element={<Mainlayout />}>
          <Route path="/Profile-Person" element={<ProfilePage />}></Route>
          <Route path="/Profile" element={<ProfilePageMobile />}></Route>
          <Route path="/Message" element={<MessagePage />}></Route>
          <Route path="/Trip" element={<InfoTripPage />}></Route>
          <Route path="/Wishlist" element={<Wishlists />}></Route>
        </Route>
        <Route path="/Detail-Room" element={<DetailPageLayout />}>
          <Route path="/Detail-Room/:roomId" element={<DetailRoomPage />}></Route>
        </Route>

        <Route path="/Manager" element={<ManagerLayout />}>
          <Route path="/Manager/Home" element={<ManagerPage />} />
          <Route path="/Manager/User" element={<UserManager />} />
          <Route path="/Manager/Room" element={<RoomManager />} />
          <Route path="/Manager/Location" element={<LocationManager />} />
          <Route path="/Manager/AddUser" element={<UserAddForm />} />
        </Route>
        <Route path="/Manager" element={<ManagerLayout />}>
          <Route path="/Manager/Home" element={<ManagerPage />} />
          <Route path="/Manager/User" element={<UserManager />} />
          <Route path="/Manager/Room" element={<RoomManager />} />
          <Route path="/Manager/Location" element={<LocationManager />} />
          <Route path="/Manager/AddUser" element={<UserAddForm />} />
          <Route path="/Manager/hotel" element={<HotelManager />} />
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
        <Route path="/" element={<Mainlayout />}>
          <Route path="/SearchPage/:id" element={<SearchPage />}></Route>
        </Route>
        <Route path="/Manager" element={<ManagerLayout />}>
          <Route path="ManagerHome" element={<ManagerHome />}></Route>
        </Route>
        <Route path="/*" element={<NoteFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
