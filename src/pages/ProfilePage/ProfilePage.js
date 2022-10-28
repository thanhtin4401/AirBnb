import React, { useState, useEffect } from 'react';
import { MdOutlineSecurity } from 'react-icons/md';
import { AiOutlineCheck } from 'react-icons/ai';
import { BsPersonSquare } from 'react-icons/bs';
import { Input, message } from 'antd';
import './ProfilePage.modul.scss';
import { localStorageService } from '../../services/localStorageService';
import { userService } from '../../services/userService';
import { Button, Modal,notification } from 'antd';

export default function ProfilePage() {
  const [openInput, setOpenInput] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [changeBtn, setChangeBtn] = useState(false);
  const [avatar, setAvatar] = useState('');
  const [imgSrc,setImgSrc] = useState();
  const [user, setuser] = useState(localStorageService.get('USER'));
  const [idUser, setIdUer] = useState(user.user.id);
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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [birthday, setBirthday] = useState('');

  useEffect(() => {
    userService
      .getUser(idUser)
      .then((res) => {
        setUserApi(res.data.content);
        setAvatar(res.data.content.avatar)
      })
  }, []);
  const putInfo = () => {
    name === '' ? (userPut.name = userAPI.name) : (userPut.name = name);
    email === '' ? (userPut.email = userAPI.email) : (userPut.email = email);
    phone === '' ? (userPut.phone = userAPI.phone) : (userPut.phone = phone);
    birthday === '' ? (userPut.birthday = userAPI.birthday) : (userPut.birthday = birthday);
    setUserApi(userPut);
    if (name === '' && email === '' && phone === '' && birthday === '') {
      openNotificationWithIcon('error','Thất bại',`Điền thông tin mà bạn muốn thay đổi`);
    } else {
      setChangeBtn(false);
      setOpenInput(false);
      userService
        .putUser(idUser, userPut)
        .then((res) => {
        openNotificationWithIcon('success','Hoàn tất','Bạn vừa cập nhật thông tin thành công!');
        })
        .catch((err) => {
        openNotificationWithIcon('error','Thất bại',`${err.response.data.content}`);
        });
    }
  };
  const formData = new FormData();
  const changeHandler = (e) => {
    // let reader = new FileReader();
    // reader.readAsDataURL(e.target.files[0])
    // reader.onload = (e) => { 
    //   console.log(e.target.result)
    //   setImgSrc(e.target.result)
    //  }
    if (e.target && e.target.files[0]) {
      formData.append('formFile', e.target.files[0]);
    }
    
  };
  const openModalClick = () => {
    setOpenModal(true)
  };
  const handleOk = () => { 
     userService
      .uploadAvt(formData)
      .then((res) => {
        setAvatar(res.data.content.avatar)
        openNotificationWithIcon('success','Hoàn tất','Bạn vừa cập nhật thông tin thành công!');
        setOpenModal(false)
      })
      .catch((err) => {
        openNotificationWithIcon('error','Thất bại',`${err.response.data.content}`);
      });
   }
  const handleCancel = () => {
    setOpenModal(false);
  };
  const openNotificationWithIcon = (type,mess,description) => {
    notification[type]({
      message: mess,
      description:description,
    });
  };
  return (
      <>
      <Modal 
      className='modalUploadImg'
      open={openModal}
      onOk={handleOk}
      onCancel={handleCancel}
      >
        <h1 className='text-base font-bold mb-5'>Chọn hình ảnh:</h1>
        <input type="file"
        className='file:bg-[#FF385C] file:border-none file:px-3 file:py-2 file:rounded-full file:text-white file:cursor-pointer rounded-full'
        name="img" onChange={changeHandler} />
        
       {imgSrc == undefined ? "" :  <img src={imgSrc} className="w-[150px] h-[150px] mx-auto my-3 object-cover" alt="IMG UPLOAD" />}
      </Modal>
    <div className="container mx-auto">
      <div className="mt-24 mb-10">
        <div className="grid grid-cols-12 mt-5">
          {/* LEFT */}
          <div className="lg:col-span-3 md:col-span-12 sm:col-span-12 mb:col-span-12 border-[1px] border-[#666] rounded-xl">
            <div className="py-5 px-6">
              <div className="flex justify-center items-center flex-col">
                <img
                  className="w-[120px] h-[120px] object-cover rounded-[50%]"
                  src={`${
                    avatar === ''
                      ? 'https://airbnb.cybersoft.edu.vn/public/images/avatar/1665245190154_mountains-1.jpg'
                      : avatar
                  }`}
                  alt=""
                />
                <h1 onClick={openModalClick} className="text-[#666] font-bold hover:text-[#FF385C] transition-all duration-300 underline mt-2">Cập Nhật Ảnh</h1>
              </div>
              <div className="my-5">
                <h1 className="flex items-center font-bold text-lg">
                  {' '}
                  <MdOutlineSecurity className="mr-3 text-[#FF385C]" /> Xác Minh Danh Tính
                </h1>
                <h1 className="text-[#666] text-base">
                  Xác thực danh tính của bạn với huy hiệu xác minh danh tính.
                </h1>
              </div>
              <div className="mb-5 ">
                <button className="px-3 py-2 rounded-md font-bold border-[1px] border-[#666]">
                  Nhận Huy Hiệu
                </button>
              </div>
              <div>
                <h1 className="font-bold text-lg">Đã xác nhận</h1>
                <h1 className="flex items-center">
                  <AiOutlineCheck className="mr-3 " /> Địa chỉ email
                </h1>
              </div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="lg:col-span-9 md:col-span-12 sm:col-span-12 mb:col-span-12">
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
                  <h1 className="text-gray-700 text-sm font-bold mb-1 ">
                    Ngày Sinh: {userAPI?.birthday}
                  </h1>
                  <div className={`${openInput ? '' : 'hidden'}`}>
                    <Input
                      className="profilepage-input"
                      onChange={(e) => {
                        setBirthday(e.target.value);
                      }}
                      placeholder="18/03/2001"
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
                      
                      placeholder="dinhdanh183@gmail"
                    />
                  </div>
                </div>
                <div className=" m-3 rounded-xl border-[1px] border-[#999] py-3 px-5">
                  <h1 className="text-gray-700 text-sm font-bold mb-1 ">
                    Điện Thoại: {userAPI?.phone}
                  </h1>
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
          </div>
        </div>
      </div>
    </div>
    </>

  );
}
