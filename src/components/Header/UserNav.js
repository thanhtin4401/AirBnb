import React, { useEffect, useState } from 'react';
import { TbWorld } from 'react-icons/tb';
import { RiAccountCircleFill, RiMenuFill } from 'react-icons/ri';
import './UserNav.modul.scss';
import { Link, useNavigate } from 'react-router-dom';
import { localStorageService } from '../../services/localStorageService';
import { useDispatch } from 'react-redux';
import { message } from 'antd';
import { loginUser, logoutUser } from '../../redux/auth/authSlice';
import { userService } from '../../services/userService';
import { useTranslation } from 'react-i18next';
import i18next from '../../i18next';
export default function UserNav({ bg }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [openLanguage, setOpenLanguage] = useState(false);
  const [isUser, setisUser] = useState();
  const [userAPI, setUserAPI] = useState();
  const [user, setuser] = useState(localStorageService.get('USER'));
  const [languageSelect, setlanguageSelect] = useState('EN');
  const handleLanguageSelect = (lang) => {
    localStorageService.set('lang', lang);
    i18next.changeLanguage(lang);
  };
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
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const Logout = () => {
    setTimeout(() => {
      localStorageService.remove('USER');
      localStorageService.remove('accessToken');
      setuser(null);
      dispatch(logoutUser(null));
      navigate('/');
    }, 1000);
  };
  const closeDropDown = () => {
    setOpen(false);
    setOpenLanguage(false);
  };
  return (
    <>
      <div
        onClick={() => {
          setOpenLanguage(false);
          setOpen(false);
        }}
        className={`${
          open || openLanguage
            ? 'animate__fadeIn animate__animated fixed top-0 left-0 w-screen h-screen bg-transparent'
            : 'hidden'
        }`}
      ></div>
      <div className="relative flex items-center lg:flex  md:flex sm:flex  mb:hidden animate__animated animate__fadeInRight">
        <h1
          className={`${
            bg ? 'sm:text-black lg:text-white hover:bg-gray-700' : 'text-black hover:bg-gray-200'
          } font-medium text-sm rounded-3xl py-2 px-4  transition duration-300 cursor-pointer`}
        >
          {t('Become a Host')}
        </h1>
        <div
          onClick={() => {
            setOpenLanguage(!openLanguage);
            setOpen(false);
          }}
          className={`${
            bg ? 'sm:text-black lg:text-white hover:bg-gray-700' : 'text-black hover:bg-gray-200'
          } rounded-3xl py-2 px-2 transition duration-300 mx-2`}
        >
          <TbWorld className="text-xl " />
        </div>
        {/* DROPDOWN LANGUAGE */}
        <div className="dropdownLanguge relative ">
          <ul
            className={`${
              openLanguage ? '' : 'hidden'
            } animate__animated animate__fadeInUp bg-white dropdownLanguage rounded-xl border border-gray-300 transition duration-500`}
          >
            <li
              onClick={() => {
                handleLanguageSelect('VN');
              }}
              className="dropdownItem cursor-pointer  hover:bg-gray-200 transition duration-300"
            >
              <p className="hover:text-black transition duration-100">Tiếng Việt</p>
            </li>
            <li
              onClick={() => {
                handleLanguageSelect('EN');
              }}
              className="dropdownItem cursor-pointer  hover:bg-gray-200 transition duration-300"
            >
              <p className="hover:text-black transition duration-100">English</p>
            </li>
          </ul>
        </div>
        <div
          onClick={() => {
            setOpen(!open);
            setOpenLanguage(false);
          }}
          className="flex items-center py-1 px-[6px] hover:shadow-xl transition-all rounded-3xl border border-gray-300"
        >
          <RiMenuFill
            className={`${
              bg ? 'sm:text-black lg:text-white' : 'text-black '
            } text-[16px] mr-[0.2rem]`}
          />
          {userAPI?.avatar === '' || user === null ? (
            <RiAccountCircleFill
              className={`${bg ? 'sm:text-black lg:text-white' : 'text-black '} text-[30px]`}
            />
          ) : (
            <img
              className="w-[25px] h-[25px] object-cover rounded-[50%]"
              src={`${userAPI?.avatar}`}
            />
          )}
        </div>
        {/* DROPDOWN INFOR */}
        <div className="dropdownMenu relative ">
          <ul
            className={`animate__animated animate__fadeInUp  bg-white dropdown rounded-xl border border-gray-300 transition duration-500 ${
              open ? '' : 'hidden'
            } `}
          >
            <li className="dropdownItem  hover:bg-gray-200 transition duration-300">
              {isUser ? (
                <Link
                  onClick={() => {
                    closeDropDown();
                  }}
                  to="/Profile-person"
                  className="hover:text-black font-[700] transition duration-100 text-[#FF385C] text-left overflow-hidden w-full"
                >
                  {t('Hello ') + ' ' + userAPI?.name}
                </Link>
              ) : (
                <Link
                  to="/Register"
                  className="w-full block h-full hover:text-black transition duration-100"
                >
                  {t('Register')}
                </Link>
              )}
            </li>
            {user?.user?.role == 'USER' ? (
              <Link
                onClick={() => {
                  closeDropDown();
                }}
                to="/trip"
              >
                <li className="dropdownItem  hover:bg-gray-200 transition duration-300">
                  <p className="w-full block h-full text-left hover:text-black transition duration-100">
                    {t('My Trips')}
                  </p>
                </li>
              </Link>
            ) : (
              ''
            )}
            {user?.user?.role == 'admin' ? (
              <Link
                onClick={() => {
                  closeDropDown();
                }}
                to="/Manager"
              >
                <li className="dropdownItem  hover:bg-gray-200 transition duration-300">
                  <p className="w-full block h-full text-left hover:text-black transition duration-100">
                    {'Quản lý'}
                  </p>
                </li>
              </Link>
            ) : (
              ''
            )}
            <li className="dropdownItem  hover:bg-gray-200 transition duration-300">
              {isUser ? (
                <button
                  onClick={Logout}
                  className="w-full block h-full text-left hover:text-black transition duration-100"
                >
                  {t('Logout')}
                </button>
              ) : (
                <Link
                  to="/Login"
                  className="w-full block h-full hover:text-black transition duration-100"
                >
                  {t('Login')}
                </Link>
              )}
            </li>
            <div className="bg-gray-300 w-full h-[1px] my-[5px]"></div>
            <li className="dropdownItem  hover:bg-gray-200 transition duration-300">
              <p className="hover:text-black transition duration-100">{t('House for rent')}</p>
            </li>
            <li className="dropdownItem  hover:bg-gray-200 transition duration-300">
              <p className="hover:text-black transition duration-100">
                {t('Organize the experience')}
              </p>
            </li>
            <li className="dropdownItem  hover:bg-gray-200 transition duration-300">
              <p className="hover:text-black transition duration-100">{t('Help')}</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
