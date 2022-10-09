import React from 'react';
import './FilterSlide.scss';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper';
function FilterSlice() {
  return (
    <div className="flex w-full items-center">
      <div className="filter-wrapper w-11/12">
        <Swiper
          slidesPerView={10}
          spaceBetween={10}
          slidesPerGroup={1}
          loop={true}
          // loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper filter"
        >
          <SwiperSlide className="bg-white text-[black]">
            <button className="flex flex-col items-center">
              <img
                src="https://res.cloudinary.com/dvzingci9/image/upload/v1665309772/airBnB/iconFilter/image_2_xqwi4p.png"
                className="w-[24px] h-[24px]"
                alt=""
              />
              <p className="block w-full">Dammiso</p>
            </button>
          </SwiperSlide>
          <SwiperSlide className="bg-white text-[black]">
            <button className="flex flex-col items-center">
              <img
                src="https://res.cloudinary.com/dvzingci9/image/upload/v1665309772/airBnB/iconFilter/image_2_xqwi4p.png"
                className="w-[24px] h-[24px]"
                alt=""
              />
              <p className="block w-full">Dammiso</p>
            </button>
          </SwiperSlide>
          <SwiperSlide className="bg-white text-[black]">
            <button className="flex flex-col items-center">
              <img
                src="https://res.cloudinary.com/dvzingci9/image/upload/v1665309772/airBnB/iconFilter/image_2_xqwi4p.png"
                className="w-[24px] h-[24px]"
                alt=""
              />
              <p className="block w-full">Dammiso</p>
            </button>
          </SwiperSlide>
          <SwiperSlide className="bg-white text-[black]">
            <button className="flex flex-col items-center">
              <img
                src="https://res.cloudinary.com/dvzingci9/image/upload/v1665309772/airBnB/iconFilter/image_2_xqwi4p.png"
                className="w-[24px] h-[24px]"
                alt=""
              />
              <p className="block w-full">Dammiso</p>
            </button>
          </SwiperSlide>
          <SwiperSlide className="bg-white text-[black]">
            <button className="flex flex-col items-center">
              <img
                src="https://res.cloudinary.com/dvzingci9/image/upload/v1665309772/airBnB/iconFilter/image_2_xqwi4p.png"
                className="w-[24px] h-[24px]"
                alt=""
              />
              <p className="block w-full">Dammiso</p>
            </button>
          </SwiperSlide>
          <SwiperSlide className="bg-white text-[black]">
            <button className="flex flex-col items-center">
              <img
                src="https://res.cloudinary.com/dvzingci9/image/upload/v1665309772/airBnB/iconFilter/image_2_xqwi4p.png"
                className="w-[24px] h-[24px]"
                alt=""
              />
              <p className="block w-full">Dammiso</p>
            </button>
          </SwiperSlide>
          <SwiperSlide className="bg-white text-[black]">
            <button className="flex flex-col items-center">
              <img
                src="https://res.cloudinary.com/dvzingci9/image/upload/v1665309772/airBnB/iconFilter/image_2_xqwi4p.png"
                className="w-[24px] h-[24px]"
                alt=""
              />
              <p className="block w-full">Dammiso</p>
            </button>
          </SwiperSlide>
          <SwiperSlide className="bg-white text-[black]">
            <button className="flex flex-col items-center">
              <img
                src="https://res.cloudinary.com/dvzingci9/image/upload/v1665309772/airBnB/iconFilter/image_2_xqwi4p.png"
                className="w-[24px] h-[24px]"
                alt=""
              />
              <p className="block w-full">Dammiso</p>
            </button>
          </SwiperSlide>
          <SwiperSlide className="bg-white text-[black]">
            <button className="flex flex-col items-center">
              <img
                src="https://res.cloudinary.com/dvzingci9/image/upload/v1665309772/airBnB/iconFilter/image_2_xqwi4p.png"
                className="w-[24px] h-[24px]"
                alt=""
              />
              <p className="block w-full">Dammiso</p>
            </button>
          </SwiperSlide>
          <SwiperSlide className="bg-white text-[black]">
            <button className="flex flex-col items-center">
              <img
                src="https://res.cloudinary.com/dvzingci9/image/upload/v1665309772/airBnB/iconFilter/image_2_xqwi4p.png"
                className="w-[24px] h-[24px]"
                alt=""
              />
              <p className="block w-full">Dammiso</p>
            </button>
          </SwiperSlide>
          <SwiperSlide className="bg-white text-[black]">
            <button className="flex flex-col items-center">
              <img
                src="https://res.cloudinary.com/dvzingci9/image/upload/v1665309772/airBnB/iconFilter/image_2_xqwi4p.png"
                className="w-[24px] h-[24px]"
                alt=""
              />
              <p className="block w-full">Dammiso</p>
            </button>
          </SwiperSlide>
          <SwiperSlide className="bg-white text-[black]">
            <button className="flex flex-col items-center">
              <img
                src="https://res.cloudinary.com/dvzingci9/image/upload/v1665309772/airBnB/iconFilter/image_2_xqwi4p.png"
                className="w-[24px] h-[24px]"
                alt=""
              />
              <p className="block w-full">Dammiso</p>
            </button>
          </SwiperSlide>
          <SwiperSlide className="bg-white text-[black]">
            <button className="flex flex-col items-center">
              <img
                src="https://res.cloudinary.com/dvzingci9/image/upload/v1665309772/airBnB/iconFilter/image_2_xqwi4p.png"
                className="w-[24px] h-[24px]"
                alt=""
              />
              <p className="block w-full">Dammiso</p>
            </button>
          </SwiperSlide>
          <SwiperSlide className="bg-white text-[black]">
            <button className="flex flex-col items-center">
              <img
                src="https://res.cloudinary.com/dvzingci9/image/upload/v1665309772/airBnB/iconFilter/image_2_xqwi4p.png"
                className="w-[24px] h-[24px]"
                alt=""
              />
              <p className="block w-full">Dammiso</p>
            </button>
          </SwiperSlide>
          <SwiperSlide className="bg-white text-[black]">
            <button className="flex flex-col items-center">
              <img
                src="https://res.cloudinary.com/dvzingci9/image/upload/v1665309772/airBnB/iconFilter/image_2_xqwi4p.png"
                className="w-[24px] h-[24px]"
                alt=""
              />
              <p className="block w-full">Dammiso</p>
            </button>
          </SwiperSlide>
          <SwiperSlide className="bg-white text-[black]">
            <button className="flex flex-col items-center">
              <img
                src="https://res.cloudinary.com/dvzingci9/image/upload/v1665309772/airBnB/iconFilter/image_2_xqwi4p.png"
                className="w-[24px] h-[24px]"
                alt=""
              />
              <p className="block w-full">Dammiso</p>
            </button>
          </SwiperSlide>
          <SwiperSlide className="bg-white text-[black]">
            <button className="flex flex-col items-center">
              <img
                src="https://res.cloudinary.com/dvzingci9/image/upload/v1665309772/airBnB/iconFilter/image_2_xqwi4p.png"
                className="w-[24px] h-[24px]"
                alt=""
              />
              <p className="block w-full">Dammiso</p>
            </button>
          </SwiperSlide>
        </Swiper>
      </div>

      <button className="ml-2 py-[17px] px-[8px] border rounded-[1rem] w-1/12 flex items-center justify-center font-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
        Filter
      </button>
    </div>
  );
}

export default FilterSlice;
