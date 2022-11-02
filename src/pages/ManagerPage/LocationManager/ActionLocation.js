import { message, Modal } from 'antd';
import React, { useState } from 'react';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import './ActionLocation.scss';
import { useDispatch } from 'react-redux';
import { deleteLocation } from '../../../redux/manager/location';
import UpdateLocationPage from './UpdateLocation';
import { locationService } from '../../../services/locationService';
export default function ActionLocation({ ID, locationInfor, handleOnSuccess }) {
  const dispatch = useDispatch();
  let handleLocationDelete = () => {
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
  //     onOk: handleLocationDelete,
  //   });
  // };
  console.log('userInfor', ID);
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const hideModal = () => {
    setOpen(false);
  };
  const handleComfirm = (id) => {
    setOpen(false);
    locationService
      .deleteLocation(id)
      .then((res) => {
        handleOnSuccess();
        message.success(res.data.message);

        return res;
      })
      .catch((err) => {
        message.success(err.response.data.message);
      });
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
        Xoá
      </button>

      <button
        onClick={handleShowModal}
        className="border rounded text-black  hover:bg-[#FF385C] hover:text-white transition-all px-2 py-2"
      >
        Cập nhật
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
        <h1 className="">Bạn có chắc muốn xoá vị trí: {locationInfor?.name}</h1>
      </Modal>
      <UpdateLocationPage
        locationInfor={locationInfor}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        ID={ID}
        handleOnSuccessUpdate={handleOnSuccess}
      />
    </div>
  );
}
