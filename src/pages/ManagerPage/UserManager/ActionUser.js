import { Modal } from 'antd';
import React, { useState } from 'react';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import './ActionUser.scss';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../../redux/manager/user';
import UpdateUserPage from './UpdateUserPage';
import { userService } from '../../../services/userService';
import { useTranslation } from 'react-i18next';
export default function ActionUser({ ID, userInfor, handleOnSuccess }) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
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
    userService
      .deleteUser(id)
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
        {'Delete'}
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
          {'Are you sure you want to delete account: '} {userInfor?.name}
        </h1>
      </Modal>
      <UpdateUserPage
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        ID={ID}
        handleOnSuccessUpdate={handleOnSuccess}
      />
    </div>
  );
}
