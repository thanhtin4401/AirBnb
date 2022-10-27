import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../redux/auth/authSlice';
import { localStorageService } from '../../services/localStorageService';
import { userService } from '../../services/userService';
import './ProfilePageMobile';
import { useTranslation } from 'react-i18next';
function ProfilePageMobile() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isUser, setisUser] = useState();
  const [userAPI, setUserAPI] = useState();
  const [user, setuser] = useState(localStorageService.get('USER'));
  useEffect(() => {
    if (user) {
      setisUser(user);
    }
  }, []);
  useEffect(() => {
    setisUser(user);
  }, [user]);
  useEffect(() => {
    userService
      .getUser(user?.user.id)
      .then((res) => {
        setUserAPI(res.data.content);
      })
      .catch((err) => {
        message.error(err.response.data);
      });
  }, []);
  const handleNavigateToProfilePerson = () => {
    navigate('/profile-person');
  };
  const dispatch = useDispatch();
  const Logout = () => {
    setTimeout(() => {
      localStorageService.remove('USER');
      localStorageService.remove('accessToken');
      dispatch(logoutUser(null));
      navigate('/');
    }, 1000);
  };

  return (
    <>
      {isUser ? (
        <>
          <div className="container w-full mx-auto pb-6 pt-[7rem]">
            <div className="mb-6">
              <img
                className="rounded-[5rem] w-[45px] h-[45px]"
                src={`${
                  userAPI?.avatar
                    ? userAPI?.avatar
                    : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
                }`}
                alt=""
              />
              <h1 className="text-[1rem] font-[600]">{userAPI?.name}</h1>
              <button
                onClick={handleNavigateToProfilePerson}
                className="text-[0.8rem underline font-[400]]"
              >
                Show profile
              </button>
            </div>
            <ul className="border-b-[1px] border-[gray] pb-3">
              <li
                onClick={handleNavigateToProfilePerson}
                className="flex justify-between items-center py-4"
              >
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  <span className="text-[1rem]">Personal info</span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </li>
              <li className="flex justify-between items-center py-4">
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  <span className="text-[1rem]">Personal info</span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </li>
            </ul>
            <h1 className="text-[1rem] font-[600] mt-4 mb-4">Hosting</h1>
            <ul className="border-b-[1px] border-[gray] pb-3">
              <li className="flex justify-between items-center py-4">
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"
                    />
                  </svg>

                  <span className="text-[1rem]">Host a home</span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </li>
              <li className="flex justify-between items-center py-4">
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
                    />
                  </svg>

                  <span className="text-[1rem]">Host an experience</span>
                </div>
              </li>
            </ul>
            <h1 className="text-[1rem] font-[600] mt-4 mb-4">Referrals & credits</h1>
            <ul className="border-b-[1px] border-[gray] pb-3">
              <li className="flex justify-between items-center py-4">
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3.75v16.5M2.25 12h19.5M6.375 17.25a4.875 4.875 0 004.875-4.875V12m6.375 5.25a4.875 4.875 0 01-4.875-4.875V12m-9 8.25h16.5a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v13.5a1.5 1.5 0 001.5 1.5zm12.621-9.44c-1.409 1.41-4.242 1.061-4.242 1.061s-.349-2.833 1.06-4.242a2.25 2.25 0 013.182 3.182zM10.773 7.63c1.409 1.409 1.06 4.242 1.06 4.242S9 12.22 7.592 10.811a2.25 2.25 0 113.182-3.182z"
                    />
                  </svg>

                  <span className="text-[1rem]">Refer a Host</span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </li>
            </ul>
            <h1 className="text-[1rem] font-[600] mt-4 mb-4">Support</h1>
            <ul className="border-b-[1px] border-[gray] pb-3">
              <li className="flex justify-between items-center py-4">
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    strokeWidth="1.2"
                    stroke="currentColor"
                    className="w-[24px] h-[24px] mr-2"
                    viewBox="0 0 35 35"
                  >
                    <title />
                    <g id="Airbnb">
                      <path d="M30.83,25.06c-.12-.29-.24-.6-.36-.87L29.92,23l0,0c-1.66-3.6-3.44-7.25-5.31-10.86l-.07-.14c-.2-.36-.39-.74-.58-1.13a6.67,6.67,0,0,0-.87-1.32A3.86,3.86,0,0,0,20,8,4,4,0,0,0,17,9.44a8.33,8.33,0,0,0-.87,1.32c-.19.39-.38.77-.57,1.13l-.07.15c-1.85,3.6-3.66,7.25-5.31,10.85l0,.05-.55,1.23c-.12.26-.24.55-.36.86a5.44,5.44,0,0,0-.29,2.6,5.13,5.13,0,0,0,3.12,4A5.05,5.05,0,0,0,14,32a4.32,4.32,0,0,0,.62-.05A6.37,6.37,0,0,0,17,31.14a12.58,12.58,0,0,0,3-2.5,12.75,12.75,0,0,0,3,2.5,6.37,6.37,0,0,0,2.41.81A4.32,4.32,0,0,0,26,32a5,5,0,0,0,1.95-.38,5.1,5.1,0,0,0,3.12-4A4.49,4.49,0,0,0,30.83,25.06ZM20,26.31a11.88,11.88,0,0,1-2.43-4.47,3.94,3.94,0,0,1-.07-1.47,2.3,2.3,0,0,1,.39-1A2.52,2.52,0,0,1,20,18.31a2.45,2.45,0,0,1,2.11,1.05,2.3,2.3,0,0,1,.39,1,3.92,3.92,0,0,1-.07,1.47A12.26,12.26,0,0,1,20,26.31Zm9.59,1.13a3.58,3.58,0,0,1-2.19,2.81,3.68,3.68,0,0,1-1.83.24,4.83,4.83,0,0,1-1.82-.63A11,11,0,0,1,21,27.53a13.56,13.56,0,0,0,2.91-5.31,6.28,6.28,0,0,0,.12-2,4,4,0,0,0-.65-1.63A4.07,4.07,0,0,0,20,16.84a4.12,4.12,0,0,0-3.39,1.71A4,4,0,0,0,16,20.18a5.13,5.13,0,0,0,.12,2A14,14,0,0,0,19,27.56a10.72,10.72,0,0,1-2.74,2.33,4.64,4.64,0,0,1-1.82.62,3.83,3.83,0,0,1-1.83-.24,3.57,3.57,0,0,1-2.19-2.81,4,4,0,0,1,.22-1.87,8.27,8.27,0,0,1,.31-.77c.17-.39.36-.8.56-1.2l0-.05C13.18,20,15,16.34,16.8,12.78l.08-.14c.19-.36.38-.75.57-1.11a5.81,5.81,0,0,1,.68-1.06,2.53,2.53,0,0,1,3.84,0,5.76,5.76,0,0,1,.67,1.06l.58,1.11.07.14c1.83,3.58,3.6,7.23,5.26,10.81v0c.19.38.36.81.55,1.2s.24.53.32.77A4.16,4.16,0,0,1,29.59,27.44Z" />
                    </g>
                  </svg>
                  <span className="text-[1rem]">How Airbnb works</span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </li>
              <li className="flex justify-between items-center py-4">
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                    />
                  </svg>

                  <span className="text-[1rem]">Get help</span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </li>
              <li className="flex justify-between items-center py-4">
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>

                  <span className="text-[1rem]">Contact neighborhood Support</span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </li>
            </ul>
            <div className="flex items-center my-5">
              <div className="language flex items-center mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>

                <button href="#" className="text-[0.8] hover:underline font-[600]">
                  English(EN)
                </button>
              </div>
              <div className="USD flex items-center mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 mr-2"
                >
                  <path
                    // strokeLinecap="round"
                    // strokeLinejoin="round"
                    d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <button href="#" className="text-[0.8rem] font-[600] hover:underline">
                  USD
                </button>
              </div>
            </div>
            <button
              onClick={Logout}
              className="border w-full border-black rounded-[0.5rem] flex justify-center py-2 font-[500] text-[1rem] "
            >
              {' '}
              Log out
            </button>
            <div className="py-6 flex justify-center">
              <div className="flex">
                <p className="font-[500] text-[0.8rem] underline ">Help & supprt</p>.
                <p className="font-[500] text-[0.8rem] underline ">Help & supprt</p>.
                <p className="font-[500] text-[0.8rem] underline ">Help & supprt</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="container mx-auto h-screen pt-[7rem]">
            <h1 className="text-[1.8rem] mb-4 font-[600]">Profile</h1>
            <p className="text-[1rem] w-full pb-4 border-b-[1px] border-[gray] font-[400]"></p>
            <div className="flex flex-col items-center justify-center mt-4 text-center">
              <h1 className="mb-2 font-[600] text-[1rem]">You have no unread messages</h1>
              <p className="font-[300] text-[1rem] opacity-70 mb-2">
                When you book a trip or experience <br /> messages from your host will show up here{' '}
              </p>
              <button
                onClick={() => {
                  navigate('/login');
                }}
                className="font-[400] text-[1rem] py-[8px] border-[1px] border-black rounded-lg px-[24px]"
              >
                Login
              </button>
            </div>
            <div className="flex items-center my-5">
              <div className="language flex items-center mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>

                <button href="#" className="text-[0.8] hover:underline font-[600]">
                  English(EN)
                </button>
              </div>
              <div className="USD flex items-center mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 mr-2"
                >
                  <path
                    // strokeLinecap="round"
                    // strokeLinejoin="round"
                    d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <button href="#" className="text-[0.8rem] font-[600] hover:underline">
                  USD
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ProfilePageMobile;
