import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../../redux/auth/authSlice';
import { localStorageService } from '../../services/localStorageService';
import { RiAccountCircleFill } from 'react-icons/ri';
export default function SideBarManager() {
  const [user, setuser] = useState(localStorageService.get('USER'));
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const handleLogout = () => {
    setTimeout(() => {
      localStorageService.remove('USER');
      localStorageService.remove('accessToken');
      dispatch(logoutUser(null));
      navigate('/login');
    }, 1000);
  };
  return (
    <div className="fixed ">
      <div className="w-[300px] h-full ">
        <aside className="w-full " aria-label="Sidebar">
          <div className="overflow-y-auto px-3 bg-gray-50 dark:bg-gray-800 h-screen">
            <ul className="py-10  h-screen flex flex-col justify-between">
              <div className="space-y-2">
                <Link to="/">
                  <img
                    className="w-[110px] h-[32px] mb-5 pl-2"
                    src="https://www.pngkey.com/png/full/60-606021_horizontal-white-transparent-for-web-airbnb-logo-white.png"
                    alt=""
                  />
                </Link>

                <li>
                  <Link
                    to="/Manager/user"
                    href="#"
                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <svg
                      aria-hidden="true"
                      className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
                  </Link>
                </li>

                <li>
                  <Link
                    to="/Manager/room"
                    href="#"
                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                    </svg>
                    <span className="ml-3">Room</span>
                  </Link>
                </li>

                <li>
                  <Link
                    to="/Manager/location"
                    href="#"
                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <svg
                      aria-hidden="true"
                      className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                    </svg>
                    <span className="flex-1 ml-3 whitespace-nowrap">Location</span>
                  </Link>
                </li>
              </div>

              <div>
                <li>
                  <Link
                    to="/Manager/profile"
                    href="#"
                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    {user?.user.avatar === '' ? (
                      <RiAccountCircleFill className=" text-[30px]" />
                    ) : (
                      <img
                        className="rounded-[50%] w-[30px] h-[30px]"
                        src={user?.user.avatar}
                        alt=""
                      />
                    )}
                    <span className="flex-1 ml-3 whitespace-nowrap font-bold">
                      {user?.user.name}
                    </span>
                  </Link>
                </li>
                <li onClick={handleLogout}>
                  <div
                    href=""
                    className="cursor-pointer flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <svg
                      aria-hidden="true"
                      className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="flex-1 ml-3 whitespace-nowrap">Log Out</span>
                  </div>
                </li>
              </div>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
