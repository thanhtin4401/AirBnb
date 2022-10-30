import { Modal } from 'antd';
import React, { useState } from 'react';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import './ActionUser.scss';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../../redux/manager/user';

export default function ActionUser({ ID, userInfor }) {
  const dispatch = useDispatch();
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
  return (
    <div className="space-x-5 flex">
      <button
        onClick={showModal}
        className="border rounded text-black  hover:bg-[#FF385C] hover:text-white transition-all px-2 py-2"
      >
        Xoá
      </button>

      <button
        className="border rounded text-black  hover:bg-[#FF385C] hover:text-white transition-all px-2 py-2"
        onClick={confirm}
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
        <h1 className="">Bạn có chắc muốn xoá tài khoản: {userInfor?.name}</h1>
      </Modal>
    </div>
  );
}
