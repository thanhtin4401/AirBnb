import { Modal } from 'antd';
import React, { useState } from 'react';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import './ActionRoom.scss';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../../redux/manager/user';
import UpdateRoomPage from './UpdateRoomPage';
import { useTranslation } from 'react-i18next';
export default function ActionRoom({ ID, roomInfor }) {
  const { t } = useTranslation();
  // const dispatch = useDispatch();
  let handleUserDelete = () => {
    // dispatch(deleteMovieActionService(movieID, handleOnSuccess));
    Modal.destroyAll();
  };

  // const confirm = () => {
  //   Modal.confirm({
  //     title: 'Xác nhận',
  //     icon: <ExclamationCircleOutlined />,
  //     content: 'Bạn có chắc muốn xoá phim này',
  //     okText: 'Xác nhận',
  //     cancelText: 'Huỷ',
  //     onOk: handleUserDelete,
  //   });
  // };
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const hideModal = () => {
    setOpen(false);
  };
  const handleComfirm = (id) => {
    setOpen(false);
    dispatch(deleteUser(id));
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleShowModal = () => {
    setIsModalOpen(true);
  };
  return (
    <div className="space-x-5 flex">
      <button
        onClick={showModal}
        className="border rounded text-black  hover:bg-[#FF385C] hover:text-white transition-all px-2 py-2"
      >
        {t('Delete')}
      </button>

      <button
        onClick={handleShowModal}
        className="border rounded text-black  hover:bg-[#FF385C] hover:text-white transition-all px-2 py-2"
      >
        {t('Update')}
      </button>
      <Modal
        className="modal-confirm-delete"
        title="Modal"
        open={open}
        onOk={() => handleComfirm(ID)}
        onCancel={hideModal}
        okText="comfirm"
        cancelText="cancle"
      >
        <h1 className="">
          {t('Are you sure you want to delete room: ')}
          {roomInfor?.room}
        </h1>
      </Modal>
      <UpdateRoomPage isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} ID={ID} />
    </div>
  );
}
