import { useSelect, Search } from '@material-tailwind/react';
import React, { useEffect, koutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Input, Button, Tag, message, Modal } from 'antd';
import { getSearchUser, getUserList } from '../../../redux/manager/user';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import './ListUserPage.scss';
import AddUserPage from './AddUserPage';
import ActionUser from './ActionUser';
import { setDate } from 'date-fns';
import { userService } from '../../../services/userService';
import { locationService } from '../../../services/locationService';
const UploadImg = ({ ID, imgLocation, handleOnSuccess }) => {
  const dispatch = useDispatch();
  console.log('imgLocation', imgLocation);
  console.log('ID', ID);
  const [hinhAnh, sethinhAnh] = useState({});
  const [imgSRC, setimgSRC] = useState('');
  const [file, setfile] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const openModalClick = () => {
    setOpenModal(true);
  };
  const handleOk = () => {
    setOpenModal(false);
    const formData = new FormData();
    formData.append('formFile', file);
    locationService
      .uploadImgLocation(ID, formData)
      .then((res) => {
        message.success('cap nhat anh thanh cong');
        handleOnSuccess();
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleCancel = () => {
    setOpenModal(false);
  };
  const handleChangeFile = async (e) => {
    let file = e.target.files[0];
    if (
      file.type === 'image/jpeg' ||
      file.type === 'image/png' ||
      file.type === 'image/gif' ||
      file.type === 'image/jpg'
    ) {
      await setfile(file);
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setimgSRC(e.target.result);
      };
    }
  };
  return (
    <>
      <div className="space-5 flex">
        <img
          className="w-[32px] h-[32px] rounded-[50rem]"
          src={
            imgLocation
              ? imgLocation
              : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYk517l_JVMrV2jf042ozAGKNehKJjjEHyQtS7bB3PUp_UUWofpG8qdylOOOgmjuxHzB4&usqp=CAU'
          }
        />
        <button
          onClick={openModalClick}
          className="ml-2 py-[6px] px-[12px] bg-black text-white rounded-lg"
        >
          upload
        </button>
      </div>
      <Modal className="modalUploadImg" open={openModal} onOk={handleOk} onCancel={handleCancel}>
        <h1 className="text-base font-bold mb-5">Chọn hình ảnh:</h1>
        <img
          className="w-[150px] rounded-[0.5rem] mb-2"
          src={imgSRC === '' ? imgLocation : imgSRC}
          alt=""
        />
        <input
          type="file"
          className="file:bg-[#FF385C] file:border-none file:px-3 file:py-2 file:rounded-full file:text-white file:cursor-pointer rounded-full"
          name="img"
          onChange={handleChangeFile}
        />

        {/* {imgSrc == undefined ? (
          ''
        ) : (
          <img
            src={imgSrc}
            className="w-[150px] h-[150px] mx-auto my-3 object-cover"
            alt="IMG UPLOAD"
          />
        )} */}
      </Modal>
    </>
  );
};

export default UploadImg;
