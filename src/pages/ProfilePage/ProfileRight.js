import React, { useState, useEffect } from 'react';
import { BsPersonSquare } from 'react-icons/bs';
import { DatePicker, Input, Form, message } from 'antd';
import { localStorageService } from '../../services/localStorageService';
import { userService } from '../../services/userService';
import { Button, Modal, notification } from 'antd';

export default function ProfileRight() {
  const [openInput, setOpenInput] = useState(false);
  const [changeBtn, setChangeBtn] = useState(false);
  const [user, setuser] = useState(localStorageService.get('USER'));
  const [idUser, setIdUer] = useState(user?.user.id);
  const [userAPI, setUserApi] = useState();
  const [userPut, setUserPut] = useState({
    id: idUser,
    name: '',
    email: '',
    phone: '',
    birthday: '',
    gender: true,
    role: 'USER',
  });
  useEffect(() => {
    userService
      .getUser(idUser)
      .then((res) => {
        setUserApi(res.data.content);
        setAvatar(res.data.content.avatar);
      })
      .catch((err) => {
        message.error(err?.response.data.content);
      });
  }, []);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [birthday, setBirthday] = useState('');
  const putInfo = () => {
    name === '' ? (userPut.name = userAPI.name) : (userPut.name = name);
    email === '' ? (userPut.email = userAPI.email) : (userPut.email = email);
    phone === '' ? (userPut.phone = userAPI.phone) : (userPut.phone = phone);
    birthday === '' ? (userPut.birthday = userAPI.birthday) : (userPut.birthday = birthday);
    setUserApi(userPut);
    if (name === '' && email === '' && phone === '' && birthday === '') {
      openNotificationWithIcon('error', 'Thất bại', `Điền thông tin mà bạn muốn thay đổi`);
    } else {
      setChangeBtn(false);
      setOpenInput(false);
      userService
        .putUser(idUser, userPut)
        .then((res) => {
          openNotificationWithIcon('success', 'Hoàn tất', 'Bạn vừa cập nhật thông tin thành công!');
        })
        .catch((err) => {
          openNotificationWithIcon('error', 'Thất bại', `${err.response.data.content}`);
        });
    }
  };
  const openNotificationWithIcon = (type, mess, description) => {
    notification[type]({
      message: mess,
      description: description,
    });
  };
  return (
    <div className="py-5 lg:px-10 md:px-0 sm:px-0 mb:px-0">
      <div className="flex justify-between m-3">
        <h1 className="font-bold text-xl flex items-center">
          <BsPersonSquare className="mr-3 text-[#FF385C]" />
          Thông Tin
        </h1>
        <div>
          <button
            onClick={() => {
              setChangeBtn(true);
              setOpenInput(true);
            }}
            className={`${
              changeBtn ? 'hidden' : ''
            } px-3 py-2 rounded-lg font-bold text-white bg-[#FF385C] mr-3`}
          >
            Cập Nhật
          </button>
          <button
            onClick={() => {
              putInfo();
            }}
            className={`${
              changeBtn ? '' : 'hidden'
            } px-3 py-2 rounded-lg font-bold text-white bg-[#FF385C]`}
          >
            Lưu Thay Đổi
          </button>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mb:grid-cols-1 ">
        <div className=" m-3 rounded-xl border-[1px] border-[#999] py-3 px-5">
          <h1 className="text-gray-700 text-sm font-bold mb-1 ">Tên: {userAPI?.name}</h1>
          <div className={`${openInput ? '' : 'hidden'}`}>
            <Input
              className="profilepage-input"
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder={`${userAPI?.name}`}
            />
          </div>
        </div>

        <div className=" m-3 rounded-xl border-[1px] border-[#999] py-3 px-5">
          <h1 className="text-gray-700 text-sm font-bold mb-1 ">Ngày Sinh: {userAPI?.birthday}</h1>
          <div className={`${openInput ? '' : 'hidden'}`}>
            <DatePicker
              placeholder={`${userAPI?.birthday}`}
              className="profilepage-input"
              onChange={(date, dateString) => {
                setBirthday(dateString);
              }}
            />
          </div>
        </div>
        <div className=" m-3 rounded-xl border-[1px] border-[#999] py-3 px-5">
          <h1 className="text-gray-700 text-sm font-bold mb-1 ">Email: {userAPI?.email}</h1>
          <div className={`${openInput ? '' : 'hidden'}`}>
            <Input
              className="profilepage-input"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              placeholder="dinhdanh183@gmail"
            />
          </div>
        </div>
        <div className=" m-3 rounded-xl border-[1px] border-[#999] py-3 px-5">
          <h1 className="text-gray-700 text-sm font-bold mb-1 ">Điện Thoại: {userAPI?.phone}</h1>
          <div className={`${openInput ? '' : 'hidden'}`}>
            <Input
              className="profilepage-input"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              placeholder="123456789"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
