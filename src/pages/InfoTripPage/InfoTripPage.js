import { message } from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GrBike } from 'react-icons/gr';
import { RiMotorbikeFill } from 'react-icons/ri';
import { localStorageService } from '../../services/localStorageService';
import { roomService } from '../../services/RoomService';

export default function InfoTripPage() {
  const [user, setuser] = useState(localStorageService.get('USER'));
  const [idUser, setIdUser] = useState(user.user.id);
  const [bookedRoom, setbookedRoom] = useState([]);
  useEffect(() => {
    roomService
      .getOderRoomById(idUser)
      .then((res) => {
        console.log(res.data.content);
        setbookedRoom(res.data.content);
      })
      .catch((err) => {
        message.error(err);
      });
  }, []);
  const deleteOrderRoom = (idRoom) => {
    roomService
      .deleteOrderRoom(idRoom)
      .then((res) => {
        console.log(res);
        message.success('Xóa Thành Công');
      })
      .catch((err) => {
        message.error(err.reponse);
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
            src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
            alt=""
          />
          <div className="lg:w-1/3  sm:w-1/3 mb:w-1/2 space-y-2">
            <h1 className="text-[#000] font-bold text-sm">Mã Phòng: {item.maPhong}</h1>

            <h1 className="text-[#333]  text-sm">
              Ngày đặt phòng: {moment(item.ngayDen).format('DD/MM/YYYY')}
            </h1>
            <h1 className="text-[#333]  text-sm">
              Ngày Trả phòng: {moment(item.ngayDi).format('DD/MM/YYYY')}
            </h1>
          </div>
          <div>
            <h1 className="text-[#333]  text-sm">Số Lượng Khách: {item.soLuongKhach}</h1>
          </div>

          <div>
            <button
              onClick={() => {
                deleteOrderRoom(item.id);
              }}
              className="px-3 py-1 bg-[#FF385C] font-bold text-white rounded-xl"
            >
              Hủy
            </button>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="mt-24 mb-10 container mx-auto">
      <h1 className="font-bold text-xl flex items-center">
        {' '}
        <RiMotorbikeFill className="icon-anima mr-3 text-[#FF385C]" /> Chuyến Đi
      </h1>
      <div className="grid grid-cols-12 my-5 gap-5">
        {bookedRoom.length === 0 ? (
          <div className="lg:col-span-9 md:col-span-12 sm:col-span-12 mb:col-span-12 py-6 px-10 bg-[#F7F7F9] rounded-xl">
            <h1 className="text-[#000] font-bold text-base mb-3">Bạn chưa có chuyến đi nào cả. </h1>
            <h1 className="text-[#000] font-bold text-base mb-3">
              Hãy đặt phòng và trải nghiệm dịch vụ của chúng tôi nhé!!!
            </h1>
          </div>
        ) : (
          <div className="lg:col-span-9 md:col-span-12 sm:col-span-12 mb:col-span-12 py-6 px-10 bg-[#F7F7F9] rounded-xl">
            <h1 className="text-[#000] font-bold text-base mb-3">Chi Tiết</h1>
            {renderBookedRoom()}
          </div>
        )}

        <div className="lg:col-span-3 md:col-span-12 mb:col-span-12 sm:col-span-12 py-6 px-10 bg-[#F7F7F9] rounded-xl">
          <h1 className="text-[#FF385C] font-bold text-base mb-3">
            Bạn muốn tận hưởng cuộc sống này hơn không?
          </h1>
          <h1 className="text-[#000] text-sm mb-5">
            Cùng chúng tôi trải nghiệm những điều thú vị mới nhé!!!
          </h1>
          <Link
            to="/"
            className="px-4 py-2 border border-gray-500 font-medium text-base rounded-xl hover:text-[#FF385C]"
          >
            Let's go
          </Link>
        </div>
      </div>
    </div>
  );
}
