import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import './FilterSlide.scss';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper';
function FilterSlice() {
  const [screen, setScreen] = useState(window.innerWidth);
  const resize = () => {
    setScreen(window.innerWidth);
  };
  window.addEventListener('resize', resize);
  // let screenWidth = window.screen.width;

  return (
    <div className="flex w-full items-center">
      <div className="filter-wrapper mb:w-full md:w-full sm:w-full lg:w-11/12">
        <Swiper
          slidesPerView={screen >= 1024 ? 10 : 5}
          spaceBetween={10}
          // slidesPerGroup={10}
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
            <button className="flex flex-col items-center ">
              <img
                src="https://res.cloudinary.com/dvzingci9/image/upload/v1665309771/airBnB/iconFilter/image_2-1_ncy1tg.png"
                className="w-[24px] h-[24px]"
                alt=""
              />
              <p className="block w-full text-[0.8rem]">Islands</p>
            </button>
          </SwiperSlide>
          <SwiperSlide className="bg-white text-[black]">
            <button className="flex flex-col items-center">
              <img
                src="https://res.cloudinary.com/dvzingci9/image/upload/v1665309771/airBnB/iconFilter/image_2-2_bmlwf1.png"
                className="w-[24px] h-[24px]"
                alt=""
              />
              <p className="block w-full text-[0.8rem]">Tiny homes</p>
            </button>
          </SwiperSlide>
          <SwiperSlide className="bg-white text-[black]">
            <button className="flex flex-col items-center">
              <img
                src="https://res.cloudinary.com/dvzingci9/image/upload/v1665309771/airBnB/iconFilter/image_2-3_l0qdws.png"
                className="w-[24px] h-[24px]"
                alt=""
              />
              <p className="block w-full text-[0.8rem]">Design</p>
            </button>
          </SwiperSlide>
          <SwiperSlide className="bg-white text-[black]">
            <button className="flex flex-col items-center">
              <img
                src="https://res.cloudinary.com/dvzingci9/image/upload/v1665309771/airBnB/iconFilter/image_2-4_ytko47.png"
                className="w-[24px] h-[24px]"
                alt=""
              />
              <p className="block w-full text-[0.8rem]">Windmills</p>
            </button>
          </SwiperSlide>
          <SwiperSlide className="bg-white text-[black]">
            <button className="flex flex-col items-center">
              <img
                src="https://res.cloudinary.com/dvzingci9/image/upload/v1665309772/airBnB/iconFilter/image_2-6_yjw1ab.png"
                className="w-[24px] h-[24px]"
                alt=""
              />
              <p className="block w-full text-[0.8rem]">Caves</p>
            </button>
          </SwiperSlide>
          <SwiperSlide className="bg-white text-[black]">
            <button className="flex flex-col items-center">
              <img
                src="https://res.cloudinary.com/dvzingci9/image/upload/v1665309771/airBnB/iconFilter/image_2-7_qn2mho.png"
                className="w-[24px] h-[24px]"
                alt=""
              />
              <p className="block w-full text-[0.8rem]">OMG!</p>
            </button>
          </SwiperSlide>
          <SwiperSlide className="bg-white text-[black]">
            <button className="flex flex-col items-center">
              <img
                src="https://res.cloudinary.com/dvzingci9/image/upload/v1665309771/airBnB/iconFilter/image_2-8_kda2yn.png"
                className="w-[24px] h-[24px]"
                alt=""
              />
              <p className="block w-full text-[0.8rem]">National parks</p>
            </button>
          </SwiperSlide>
          <SwiperSlide className="bg-white text-[black]">
            <button className="flex flex-col items-center">
              <img
                src="https://res.cloudinary.com/dvzingci9/image/upload/v1665309772/airBnB/iconFilter/image_2-9_la0dwh.png"
                className="w-[24px] h-[24px]"
                alt=""
              />
              <p className="block w-full text-[0.8rem]">Amazing pools</p>
            </button>
          </SwiperSlide>
          <SwiperSlide className="bg-white text-[black]">
            <button className="flex flex-col items-center">
              <img
                src="https://res.cloudinary.com/dvzingci9/image/upload/v1665309772/airBnB/iconFilter/image_2-10_ugmzks.png"
                className="w-[24px] h-[24px]"
                alt=""
              />
              <p className="block w-full text-[0.8rem]">Beach</p>
            </button>
          </SwiperSlide>
          <SwiperSlide className="bg-white text-[black]">
            <button className="flex flex-col items-center">
              <img
                src="https://res.cloudinary.com/dvzingci9/image/upload/v1665309772/airBnB/iconFilter/image_2-11_mwmvx5.png"
                className="w-[24px] h-[24px]"
                alt=""
              />
              <p className="block w-full text-[0.8rem]">Arctic</p>
            </button>
          </SwiperSlide>
          <SwiperSlide className="bg-white text-[black]">
            <button className="flex flex-col items-center">
              <img
                src="https://res.cloudinary.com/dvzingci9/image/upload/v1665309772/airBnB/iconFilter/image_2_xqwi4p.png"
                className="w-[24px] h-[24px]"
                alt=""
              />
              <p className="block w-full text-[0.8rem]">Cabins</p>
            </button>
          </SwiperSlide>
          <SwiperSlide className="bg-white text-[black]">
            <button className="flex flex-col items-center">
              <img
                src="https://res.cloudinary.com/dvzingci9/image/upload/v1665309772/airBnB/iconFilter/image_2_xqwi4p.png"
                className="w-[24px] h-[24px]"
                alt=""
              />
              <p className="block w-full text-[0.8rem]">Lakefont</p>
            </button>
          </SwiperSlide>
          <SwiperSlide className="bg-white text-[black]">
            <button className="flex flex-col items-center">
              <img
                src="https://res.cloudinary.com/dvzingci9/image/upload/v1665309772/airBnB/iconFilter/image_2_xqwi4p.png"
                className="w-[24px] h-[24px]"
                alt=""
              />
              <p className="block w-full text-[0.8rem]">Golfing</p>
            </button>
          </SwiperSlide>
          <SwiperSlide className="bg-white text-[black]">
            <button className="flex flex-col items-center">
              <img
                src="https://res.cloudinary.com/dvzingci9/image/upload/v1665309772/airBnB/iconFilter/image_2_xqwi4p.png"
                className="w-[24px] h-[24px]"
                alt=""
              />
              <p className="block w-full text-[0.8rem]">Amazing views</p>
            </button>
          </SwiperSlide>
          <SwiperSlide className="bg-white text-[black]">
            <button className="flex flex-col items-center">
              <img
                src="https://res.cloudinary.com/dvzingci9/image/upload/v1665309772/airBnB/iconFilter/image_2_xqwi4p.png"
                className="w-[24px] h-[24px]"
                alt=""
              />
              <p className="block w-full text-[0.8rem]">Surfing</p>
            </button>
          </SwiperSlide>
          <SwiperSlide className="bg-white text-[black]">
            <button className="flex flex-col items-center">
              <img
                src="https://res.cloudinary.com/dvzingci9/image/upload/v1665309772/airBnB/iconFilter/image_2_xqwi4p.png"
                className="w-[24px] h-[24px]"
                alt=""
              />
              <p className="block w-full text-[0.8rem]">A-frames</p>
            </button>
          </SwiperSlide>
          <SwiperSlide className="bg-white text-[black]">
            <button className="flex flex-col items-center">
              <img
                src="https://res.cloudinary.com/dvzingci9/image/upload/v1665309772/airBnB/iconFilter/image_2_xqwi4p.png"
                className="w-[24px] h-[24px]"
                alt=""
              />
              <p className="block w-full text-[0.8rem]">Earth homes</p>
            </button>
          </SwiperSlide>
          <SwiperSlide className="bg-white text-[black]">
            <button className="flex flex-col items-center">
              <img
                src="https://res.cloudinary.com/dvzingci9/image/upload/v1665309772/airBnB/iconFilter/image_2_xqwi4p.png"
                className="w-[24px] h-[24px]"
                alt=""
              />
              <p className="block w-full text-[0.8rem]">Campers</p>
            </button>
          </SwiperSlide>
          <SwiperSlide className="bg-white text-[black]">
            <button className="flex flex-col items-center">
              <img
                src="https://res.cloudinary.com/dvzingci9/image/upload/v1665309772/airBnB/iconFilter/image_2_xqwi4p.png"
                className="w-[24px] h-[24px]"
                alt=""
              />
              <p className="block w-full text-[0.8rem]">Bed & breakfasts</p>
            </button>
          </SwiperSlide>
          <SwiperSlide className="bg-white text-[black]">
            <button className="flex flex-col items-center">
              <img
                src="https://res.cloudinary.com/dvzingci9/image/upload/v1665309772/airBnB/iconFilter/image_2_xqwi4p.png"
                className="w-[24px] h-[24px]"
                alt=""
              />
              <p className="block w-full text-[0.8rem]">Luxe</p>
            </button>
          </SwiperSlide>
        </Swiper>
      </div>

      <button className="ml-2 mb:hidden text-[12px] sm:hidden lg:flex py-[14px] px-[8px] border rounded-[1rem] w-1/12 flex items-center justify-center">
        <div className="w-full flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            className="w-4 h-4 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
            />
          </svg>
          <p className="font-[500]">Filter</p>
        </div>
      </button>
    </div>
  );
}

export default FilterSlice;
