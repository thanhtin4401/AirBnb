import React, { useEffect, useState } from 'react';
import { TbWorld } from 'react-icons/tb';
import { RiAccountCircleFill, RiMenuFill } from 'react-icons/ri';
import './UserNav.modul.scss';
import { useNavigate } from 'react-router-dom';
import { localStorageService } from '../../services/localStorageService';
export default function UserNav({ bg }) {
  const [open, setOpen] = useState(false);
  const [isUser, setisUser] = useState('');
  useEffect(() => {
    const user = localStorageService.get('USER');
    if (user) {
      setisUser(user);
    }
    console.log('isUser', isUser);
  }, []);
  const navigate = useNavigate();
  return (
    <div className="flex items-center lg:flex  md:flex sm:flex  mb:hidden animate__animated animate__fadeInRight">
      <h1
        className={`${
          bg ? 'text-white hover:bg-gray-700' : 'text-black hover:bg-gray-200'
        } font-medium text-sm rounded-3xl py-2 px-4  transition duration-300`}
      >
        Trở Thành Chủ Nhà
      </h1>
      <div
        className={`${
          bg ? 'text-white hover:bg-gray-700' : 'text-black hover:bg-gray-200'
        } rounded-3xl py-2 px-2 transition duration-300 mx-2`}
      >
        <TbWorld className="text-xl " />
      </div>
      <div
        onClick={() => {
          setOpen(!open);
        }}
        className="flex items-center py-1 px-4 rounded-3xl border border-gray-300"
      >
        <RiMenuFill className={`${bg ? 'text-white' : 'text-black '} text-xl`} />
        <RiAccountCircleFill className={`${bg ? 'text-white' : 'text-black '} text-xl`} />
      </div>
      <div className="dropdownMenu relative ">
        <ul
          className={`animate__animated animate__backInUp  bg-white dropdown rounded-xl border border-gray-300 transition duration-500 ${
            open ? '' : 'hidden'
          } `}
        >
          <DropDown title={isUser ? isUser.user.name : 'Đăng kí'} />
          {isUser ? <DropDown title={'Đăng Xuất'} /> : <DropDown title={'Đăng Nhập'} />}
          <div className="bg-gray-300 w-full h-[1px] my-[5px]"></div>
          <DropDown title={'Cho Thuê Nhà'} />
          <DropDown title={'Tổ Chức Trải Nghiệm'} />
          <DropDown title={'Trợ Giúp'} />
        </ul>
      </div>
    </div>
  );
}
function DropDown(props) {
  return (
    <li className="dropdownItem  hover:bg-gray-200 transition duration-300">
      <a className="hover:text-black transition duration-100">{props.title}</a>
    </li>
  );
}
