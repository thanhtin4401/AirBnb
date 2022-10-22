import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { roomService } from '../../services/RoomService';

export default function InfoTripPage() {
    const [bookedRoom, setbookedRoom] = useState([])
    useEffect(() => {
        roomService
        .getOderRoom()
        .then((res) => {
            console.log(res);
            setbookedRoom(res.data.content)
        })
        .catch((err) => {
            console.log(err);
        });
    },[]);
    const renderBookedRoom = () => { 
        return bookedRoom.slice(0,2).map((item,index) => { 
            return <div key={index} className="itemTrip flex justify-between items-center py-3 border-b-[1px] border-[#999] ">
            <img
              className="lg:block md:block sm:block mb:hidden w-[100px] h-[130px] rounded-xl object-cover"
              src="https://cdn3.dhht.vn/wp-content/uploads/2022/08/bia-landmark-81-o-dau-an-gi-choi-gi-cac-goc-chup-hinh-dep.jpg"
              alt=""
            />
            <div className="lg:w-1/3 mb:w-1/3 sm:w-1/3 mb:w-1/2 space-y-2">
              <h1 className="text-[#000] font-bold text-sm">Landmark 81 TPHCM</h1>
              <h1 className="text-[#333]  text-sm">
                Số Lượng Khách: {item.soLuongKhach}
              </h1>
              <h1 className="text-[#333]  text-sm">Ngày đặt phòng: {moment(item.ngayDen).format('DD/MM/YYYY')}</h1>
              <h1 className="text-[#333]  text-sm">Ngày Trả phòng: {moment(item.ngayDi).format('DD/MM/YYYY')}</h1>
            </div>
            <div>
              <h1 className="text-[#000] font-bold text-sm">1</h1>
            </div>
            <div>
              <h1 className="text-[#000] font-bold text-sm">22$</h1>
            </div>
            <div>
              <button className="px-3 py-1 bg-red-500 font-bold text-white rounded-xl">Hủy</button>
            </div>
          </div>
         })
     }
  return (
    <div className="mt-20 mb-10 container mx-auto">
      <h1 className="text-[#000] font-bold text-xl">Chuyến Đi</h1>
      <div className="grid grid-cols-12 my-5 gap-5">
        <div className="lg:col-span-9 md:col-span-12 sm:col-span-12 mb:col-span-12 py-6 px-10 bg-[#F7F7F9] rounded-xl">
          <h1 className="text-[#000] font-bold text-base mb-3">Chi Tiết</h1>

            {renderBookedRoom(  )}
          
        </div>

        <div className="lg:col-span-3 md:col-span-12 mb:col-span-12 sm:col-span-12 py-6 px-10 bg-[#F7F7F9] rounded-xl">
          <h1 className="text-[#000] font-bold text-base mb-3">
            Bạn muốn tận hưởng cuộc sống này hơn không?
          </h1>
          <h1 className="text-[#000] text-sm mb-5">
            Cùng chúng tôi trải nghiệm những điều thú vị mới nhé!!!
          </h1>
          <Link
            to="/"
            className="px-4 py-2 border border-gray-500 font-medium text-base rounded-xl"
          >
            Let's go
          </Link>
        </div>
      </div>
    </div>
  );
}
