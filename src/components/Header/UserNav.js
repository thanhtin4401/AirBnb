import React, { useEffect, useState } from 'react';
import { TbWorld } from 'react-icons/tb';
import { RiAccountCircleFill, RiMenuFill } from 'react-icons/ri';
import './UserNav.modul.scss';
import { Link, useNavigate } from 'react-router-dom';
import { localStorageService } from '../../services/localStorageService';
import { useDispatch } from 'react-redux';
import { message } from 'antd';
import { loginUser, logoutUser } from '../../redux/auth/authSlice';
export default function UserNav({ bg }) {
  const [open, setOpen] = useState(false);
  const [openLanguage, setOpenLanguage] = useState(false);
  const [isUser, setisUser] = useState('');
  const [user, setuser] = useState(localStorageService.get('USER'));
  useEffect(() => {
    if (user) {
      setisUser(user);
    }
  }, []);

  useEffect(() => {
    setisUser(user);
  }, [user]);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const Logout = () => {
    setTimeout(() => {
      localStorageService.remove('USER');
      localStorageService.remove('accessToken');
      setuser(null);
      dispatch(logoutUser(null));
      message.success('Đăng xuất thành công!');
    }, 1000);
  };
  return (
    <div className="flex items-center lg:flex  md:flex sm:flex  mb:hidden animate__animated animate__fadeInRight">
      <h1
        className={`${
          bg ? 'sm:text-black lg:text-white hover:bg-gray-700' : 'text-black hover:bg-gray-200'
        } font-medium text-sm rounded-3xl py-2 px-4  transition duration-300 cursor-pointer`}
      >
        Trở Thành Chủ Nhà
      </h1>
      <div
      onClick={() => { 
        setOpenLanguage(!openLanguage)
       }}
        className={`${
          bg ? 'sm:text-black lg:text-white hover:bg-gray-700' : 'text-black hover:bg-gray-200'
        } rounded-3xl py-2 px-2 transition duration-300 mx-2`}
      >
        <TbWorld className="text-xl " />
      </div>
        {/* DROPDOWN LANGUAGE */}
      <div className='dropdownLanguge relative '>
          <ul  className={`${openLanguage ? '' : 'hidden'} animate__animated animate__fadeInUp bg-white dropdownLanguage rounded-xl border border-gray-300 transition duration-500`}>
              <li className="dropdownItem  hover:bg-gray-200 transition duration-300">
                <a className="hover:text-black transition duration-100">Tiếng Việt</a>
              </li>
              <li className="dropdownItem  hover:bg-gray-200 transition duration-300">
                <a className="hover:text-black transition duration-100">English</a>
              </li>
          
          </ul>
        </div>
      <div
        onClick={() => {
          setOpen(!open);
        }}
        className="flex items-center py-1 px-[6px] hover:shadow-xl transition-all rounded-3xl border border-gray-300"
      >
        <RiMenuFill
          className={`${
            bg ? 'sm:text-black lg:text-white' : 'text-black '
          } text-[16px] mr-[0.2rem]`}
        />
        <RiAccountCircleFill
          className={`${bg ? 'sm:text-black lg:text-white' : 'text-black '} text-[30px]`}
        />
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
              <button className=" font-[700] transition duration-100 text-[#FF385C] text-left overflow-hidden w-full">
                {'Xin Chào ' + isUser.user.name}
              </button>
            ) : (
              <Link
                to="/Register"
                className="w-full block h-full hover:text-black transition duration-100"
              >
                Đăng Kí
              </Link>
            )}
          </li>
          <li className="dropdownItem  hover:bg-gray-200 transition duration-300">
            {isUser ? (
              <button
                onClick={Logout}
                className="w-full block h-full text-left hover:text-black transition duration-100"
              >
                Đăng Xuất
              </button>
            ) : (
              <Link
                to="/Login"
                className="w-full block h-full hover:text-black transition duration-100"
              >
                Đăng Nhập
              </Link>
            )}
          </li>
          <div className="bg-gray-300 w-full h-[1px] my-[5px]"></div>
          <li className="dropdownItem  hover:bg-gray-200 transition duration-300">
            <a className="hover:text-black transition duration-100">Cho Thuê Nhà</a>
          </li>
          <li className="dropdownItem  hover:bg-gray-200 transition duration-300">
            <a className="hover:text-black transition duration-100">Tổ chức Trải Nghiệm</a>
          </li>
          <li className="dropdownItem  hover:bg-gray-200 transition duration-300">
            <a className="hover:text-black transition duration-100">Trợ Giúp</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
