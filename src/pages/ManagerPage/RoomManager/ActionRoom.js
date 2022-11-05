import { Modal, message } from 'antd';
import React, { useState } from 'react';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import './ActionRoom.scss';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../../redux/manager/user';
import UpdateRoomPage from './UpdateRoomPage';
import { useTranslation } from 'react-i18next';
import { roomService } from '../../../services/RoomService';
export default function ActionRoom({ ID, roomInfor, handleOnSuccess }) {
  const { t } = useTranslation();

  let handleUserDelete = () => {
    Modal.destroyAll();
  };

  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const hideModal = () => {
    setOpen(false);
  };
  const handleComfirm = (id) => {
    setOpen(false);
    roomService
      .deleteRoom(id)
      .then((res) => {
        message.success('xoa thanh cong');
        handleOnSuccess();
        setIsModalOpen(false);
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log('roomInforaction', roomInfor);
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
      <UpdateRoomPage
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        ID={ID}
        roomInfor={roomInfor}
        handleOnSuccessUpdate={handleOnSuccess}
      />
    </div>
  );
}
