import { Modal } from 'antd';
import React, { useState } from 'react';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import './ActionLocation.scss';
import { useDispatch } from 'react-redux';
import { deleteLocation } from '../../../redux/manager/location';
import UpdateLocationPage from './UpdateLocation';
import { locationService } from '../../../services/locationService';
import { useTranslation } from 'react-i18next';
export default function ActionLocation({ ID, LocationInfor, handleOnSuccess }) {
  const { t } = useTranslation();
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
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const hideModal = () => {
    setOpen(false);
  };
  const handleComfirm = (id) => {
    console.log(id);
    setOpen(false);
    locationService
      .deleteLocation(id)
      .then((res) => {
        handleOnSuccess();
        return res;
      })
      .catch((err) => {
        console.log(err);
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
          {t('Are you sure you want to delete location: ')} {LocationInfor?.name}
        </h1>
      </Modal>
      <UpdateLocationPage
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        ID={ID}
        handleOnSuccessUpdate={handleOnSuccess}
      />
    </div>
  );
}
