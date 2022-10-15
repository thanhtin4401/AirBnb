import React, { useRef, useState } from 'react';
import './CardItem.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaStar } from 'react-icons/fa';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';

function CardItem({ roomInfor }) {
  return (
    <div className="relative bg-white rounded-[2rem]">
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
          <SwiperSlide className="rounded-[1rem] object-cover max-h-full max-w-full">
            <img
              src="https://i.vntrip.vn/471x290/smart/https://statics.vntrip.vn/data-v2/hotels/9906/img_max/9906_1499226454_97987435.jpg"
              alt=""
              className="rounded-[1rem] object-cover max-h-full max-w-full"
            />
          </SwiperSlide>
          <SwiperSlide className="rounded-[1rem] object-cover max-h-full max-w-full">
            <img
              src="https://i.vntrip.vn/471x290/smart/https://statics.vntrip.vn/data-v2/hotels/9906/img_max/9906_1499226454_97987435.jpg"
              alt=""
              className="rounded-[1rem] object-cover max-h-full max-w-full"
            />
          </SwiperSlide>
          <SwiperSlide className="rounded-[1rem] object-cover max-h-full max-w-full">
            Slide 3
          </SwiperSlide>
          <SwiperSlide className="rounded-[1rem] object-cover max-h-full max-w-full">
            Slide 4
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
          <h1 className="text-[1rem] font-[400]">Name resort</h1>
          <div className="flex justify-center items-center">
            <span className=" text-[1rem] opacity-60">5.0</span>
            <FaStar size="1rem" className="ml-2 opacity-60" />
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
    </div>
  );
}

export default CardItem;
