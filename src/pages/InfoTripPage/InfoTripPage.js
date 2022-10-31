import { message } from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RiMotorbikeFill } from 'react-icons/ri';
import { localStorageService } from '../../services/localStorageService';
import { roomService } from '../../services/RoomService';
// import { data } from './dataImgTrip';
import { Modal, notification } from 'antd';
import { useTranslation } from 'react-i18next';

export default function InfoTripPage() {
  const [user, setuser] = useState(localStorageService.get('USER'));
  const [idUser, setIdUser] = useState(user?.user.id);
  const [idRoom, setIdRoom] = useState();
  const [bookedRoom, setbookedRoom] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { t } = useTranslation();
  useEffect(() => {
    roomService
      .getOderRoomById(idUser)
      .then((res) => {
        setbookedRoom(res.data.content);
      })
      .catch((err) => {
        openNotificationWithIcon('error', 'Thất bại', `${err.response.data.content}`);
      });
  }, [isOpenModal]);
  const openModalDelete = () => {
    setIsOpenModal(true);
  };

  const handleOk = (idRoom) => {
    roomService
      .deleteOrderRoom(idRoom)
      .then((res) => {
        openNotificationWithIcon('success', 'Hoàn tất', 'Bạn đã hủy chuyến đi thành công!');
        setIsOpenModal(false);
      })
      .catch((err) => {
        openNotificationWithIcon('error', 'Thất bại', `${err.response.data.content}`);
      });
  };
  const handleCancel = () => {
    setIsOpenModal(false);
  };
  const openNotificationWithIcon = (type, mess, description) => {
    notification[type]({
      message: mess,
      description: description,
    });
  };
  const renderBookedRoom = () => {
    return bookedRoom.map((item, index) => {
      return (
        <div
          key={index}
          className="itemTrip flex justify-between items-center py-3 border-b-[1px] border-[#999] "
        >
          <img
            className="lg:block md:block sm:block mb:hidden w-[100px] h-[130px] rounded-xl object-cover"
            // src={data[index]}
            src="https://images.unsplash.com/photo-1574259392081-dbe3c19cd15e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <div className="lg:w-1/3  sm:w-1/3 mb:w-1/2 space-y-2">
            <h1 className="text-[#000] font-bold text-sm">
              {'Room ID: '}
              {item.maPhong}
            </h1>

            <h1 className="text-[#333]  text-sm">
              {t('Booking Date: ')}
              {moment(item.ngayDen).format('DD/MM/YYYY')}
            </h1>
            <h1 className="text-[#333]  text-sm">
              {t('Check-out Day: ')} {moment(item.ngayDi).format('DD/MM/YYYY')}
            </h1>
          </div>
          <div>
            <h1 className="text-[#333]  text-sm">
              {t('Number of Guests: ')}: {item.soLuongKhach}
            </h1>
          </div>

          <div>
            <button
              onClick={() => {
                setIdRoom(item.id);
                openModalDelete();
              }}
              className="px-3 py-1 bg-[#FF385C] font-bold text-white rounded-xl"
            >
              {t('Cancel')}
            </button>
          </div>
        </div>
      );
    });
  };
  return (
    <>
      <Modal
        className="modalUploadImg"
        open={isOpenModal}
        onOk={() => {
          handleOk(idRoom);
        }}
        onCancel={handleCancel}
      >
        <h1 className="text-base font-bold mb-5">
          {t('Are you sure you want to cancel this trip ?')}
        </h1>
      </Modal>
      <div className="mt-24 mb-10 container mx-auto">
        <h1 className="font-bold text-xl flex items-center">
          {' '}
          <RiMotorbikeFill className="icon-anima mr-3 text-[#FF385C]" /> {t('Trip')}
        </h1>
        <div className="grid grid-cols-12 my-5 gap-5">
          {bookedRoom.length === 0 ? (
            <div className="lg:col-span-9 md:col-span-12 sm:col-span-12 mb:col-span-12 py-6 px-10 bg-[#F7F7F9] rounded-xl">
              <h1 className="text-[#000] font-bold text-base mb-3">
                {t('You do not have any trips right now')}{' '}
              </h1>
              <h1 className="text-[#000] font-bold text-base mb-3">
                {t('Book and experience our services with us!')}
              </h1>
            </div>
          ) : (
            <div className="lg:col-span-9 md:col-span-12 sm:col-span-12 mb:col-span-12 py-6 px-10 bg-[#F7F7F9] rounded-xl">
              <h1 className="text-[#000] font-bold text-base mb-3">{t('Details')}</h1>
              {renderBookedRoom()}
            </div>
          )}

          <div className="lg:col-span-3 md:col-span-12 mb:col-span-12 sm:col-span-12 py-6 px-10 bg-[#F7F7F9] rounded-xl">
            <h1 className="text-[#FF385C] font-bold text-base mb-3">
              {t('Do you want to enjoy this life more than usual ?')}
            </h1>
            <h1 className="text-[#000] text-sm mb-5">{t('Experience new things with us!!!')}</h1>
            <Link
              to="/"
              className="px-4 py-2 border border-gray-500 font-medium text-base rounded-xl hover:text-[#FF385C]"
            >
              Let's go
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
