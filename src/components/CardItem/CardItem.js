import React, { useRef, useState } from 'react';
import './CardItem.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaStar } from 'react-icons/fa';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
import { Link } from 'react-router-dom';
import {dataIMG} from '../../Data/Data'
function CardItem({ roomInfor }) {
  return (
    <Link to={`/detail-room/${roomInfor.id}`} className="relative bg-white rounded-[2rem]">
      <div className="">
        <Swiper
          loop={true}
          cssMode={true}
          navigation={true}
          mousewheel={true}
          keyboard={true}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide className=" min-h-[260px] rounded-[0.8rem] object-cover h-[270px] w-full">
            <img
              src={`${roomInfor.data?.img1}`}
              alt=""
              className="rounded-[0.8rem] min-h-[260px] h-full object-cover max-h-full "
            />
          </SwiperSlide>
          <SwiperSlide className=" min-h-[260px] rounded-[0.8rem] object-cover h-[270px] w-full">
            <img
              src={`${roomInfor.data?.img2}`}
              alt=""
              className="rounded-[0.8rem] object-cover max-h-full"
            />
          </SwiperSlide>
          <SwiperSlide className=" min-h-[260px] rounded-[0.8rem] object-cover h-[270px] w-full">
          <img
              src={`${roomInfor.data?.img3}`}
              alt=""
              className="rounded-[0.8rem] object-cover max-h-full"
            />
          </SwiperSlide>
          <SwiperSlide className=" min-h-[260px] rounded-[0.8rem] object-cover h-[270px] w-full">
          <img
              src={`${roomInfor.data?.img4}`}
              alt=""
              className="rounded-[0.8rem] object-cover w-full"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="presentation"
        focusable="false"
        className="absolute top-2 right-2 z-10"
        style={{
          display: 'block',
          fill: 'rgba(0, 0, 0, 0.5)',
          height: 24,
          width: 24,
          stroke: 'rgb(255, 255, 255)',
          strokeWidth: 2,
          overflow: 'hidden',
        }}
      >
        <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z" />
      </svg>
      <div className="mt-[8px]">
        <div className="w-full flex justify-between">
          <h1 className="text-[1rem] font-[500]">{roomInfor.tenPhong}</h1>
          <div className="flex justify-center items-center">
            <FaStar size="0.8rem" className="mr-2" />
            <span className=" text-[1rem] font-[300]">5.0</span>
          </div>
        </div>
        <p className="text-[0.8rem] text-left font-[400] text-[black] opacity-60">
          9000km kilometers away
        </p>
        <p className="text-[0.8rem] text-left text-[black] opacity-60">Oct 2-9</p>
        <div className="flex items-center">
          <p className="text-[0.9rem] mr-2 font-[500] text-[black] ">$300</p>
          <span className="font-300 text-[0.8rem] font-[400] text-[black]">night</span>
        </div>
      </div>
    </Link>
  );
}

export default CardItem;
