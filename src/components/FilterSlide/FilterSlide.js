import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import './FilterSlide.scss';
import { Button, Modal, Checkbox, Slider } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import { InputNumber, Space } from 'antd';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useTranslation } from 'react-i18next';
// import required modules
import { Pagination, Navigation } from 'swiper';
function FilterSlice({ handleQueryFilter }) {
  const { t } = useTranslation();
  const [screen, setScreen] = useState(window.innerWidth);
  const resize = () => {
    setScreen(window.innerWidth);
  };
  const [filterForm, setFilterForm] = useState({
    minPrice: 0,
    maxPrice: 100,
    pool: false,
    driver: false,
    countBed: 'any',
  });
  window.addEventListener('resize', resize);
  // let screenWidth = window.screen.width;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);

    handleQueryFilter(filterForm);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onChangeMinPrice = (value) => {
    setFilterForm({
      ...filterForm,
      minPrice: value,
    });
  };
  const onChangeMaxPrice = (value) => {
    setFilterForm({
      ...filterForm,
      maxPrice: value,
    });
  };
  const isPoolChecked = (e) => {
    setFilterForm({
      ...filterForm,
      pool: e.target.checked,
    });
  };
  const isDriverChecked = (e) => {
    setFilterForm({
      ...filterForm,
      driver: e.target.checked,
    });
  };
  const [rangePrice, setRangePrice] = useState([0, 0]);
  function onChange(value) {
    setRangePrice(value);
    setFilterForm({
      ...filterForm,
      minPrice: value[0],
      maxPrice: value[1],
    });
  }

  function onAfterChange(value) {}
  const handleBedCheck = (e) => {
    setFilterForm({
      ...filterForm,
      countBed: e.target.value,
    });
  };
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
      <div className="lg:hidden z-10 fixed bottom-[6rem] w-full flex justify-center">
        <button
          onClick={showModal}
          className="text-[12px] lg:flex py-[14px] px-[8px] border rounded-[1rem] bg-white flex items-center justify-center "
          style={{
            boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
          }}
        >
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
            <p className="font-[500]">{t('Filter')}</p>
          </div>
        </button>
      </div>
      <button
        onClick={showModal}
        className="ml-2 mb:hidden  text-[12px] sm:hidden lg:flex py-[14px] px-[8px] border rounded-[1rem] w-1/12 flex items-center justify-center"
      >
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
          <p className="font-[500]">{t('Filter')}</p>
        </div>
      </button>
      <Modal
        className="filter-popup"
        title="Filter"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="price pb-4 border-b-[1px]">
          <h1 className="font-[600] text-[1rem]">{t('Price range')}</h1>
          <Slider
            range
            step={5}
            min={0}
            max={1000}
            defaultValue={[0, 20]}
            onChange={onChange}
            onAfterChange={onAfterChange}
          />
          <div className="flex w-full justify-between items-center">
            <div className="p-2 w-2/4 border-[1px] rounded-lg">
              <p className="font-[300] text-[0.6rem]">{t('Min price')}</p>
              <div>
                <InputNumber
                  disabled
                  value={rangePrice[0]}
                  className="price-input"
                  defaultValue={1000}
                  max="100000"
                  min="0"
                  formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                  onChang={onChangeMinPrice}
                />
              </div>
            </div>
            <p className="mx-4">~</p>
            <div className="p-2 w-2/4 border-[1px] rounded-lg">
              <p className="font-[300] text-[0.6rem]">{t('Max price')}</p>
              <div>
                <InputNumber
                  disabled
                  value={rangePrice[1]}
                  className="price-input"
                  defaultValue={5000}
                  formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                  onChange={onChangeMaxPrice}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="check pb-4 bo                                             r                   der-b-[1px]">
          <h1 className="font-[600] text-[1rem] mb-4">{t('Type of place')} </h1>
          <div className="grid grid-cols-2 gap-4">
            <label className="cursor-pointer flex items-center">
              {/* <input type="checkbox" value="pool" name="bed" /> */}
              <Checkbox className="radio-btn mr-2" onChange={isPoolChecked}>
                <div className="">
                  <p className="text-[1rem] font-[400]">{t('Pool')}</p>
                  <p className="text-[0.6rem] font-[300]">
                    {t('Your own room in a home or a hotel, plus some shared common spaces')}
                  </p>
                </div>
              </Checkbox>
            </label>
            <label className="cursor-pointer flex items-center">
              <Checkbox className="radio-btn mr-2" onChange={isDriverChecked}>
                <div className="">
                  <p className="text-[1rem] font-[400]">{t('Driver')}</p>
                  <p className="text-[0.6rem] font-[300]">
                    {t('Your own room in a home or a hotel, plus some shared common spaces')}
                  </p>
                </div>
              </Checkbox>
            </label>
          </div>
        </div>
        <div className="bed">
          <h1 className="font-[600] text-[1rem]">{t('Rooms and Beds')}</h1>
          <p className="font-[400] text-[0.8rem] my-4">{t('Bedrooms')}</p>
          <label className="cursor-pointer">
            <input
              onChange={handleBedCheck}
              value="any"
              className="radio-btn"
              type="radio"
              name="bed"
            />
            <span className="tag-content mt-2 mb-0 border-black relative rounded-[4px]text-left border mr-[4px] p-2 inline-block">
              {t('Any')}
            </span>
          </label>
          <label className="cursor-pointer">
            <input
              onChange={handleBedCheck}
              value="2"
              className="radio-btn"
              type="radio"
              name="bed"
            />
            <span className="tag-content mt-2 mb-0 border-black relative rounded-[4px]text-left border mr-[4px] p-2 inline-block">
              2
            </span>
          </label>
          <label className="cursor-pointer">
            <input
              onChange={handleBedCheck}
              value="4"
              className="radio-btn"
              type="radio"
              name="bed"
            />
            <span className="tag-content mt-2 mb-0 border-black relative rounded-[4px]text-left border mr-[4px] p-2 inline-block">
              4
            </span>
          </label>
          <label className="cursor-pointer">
            <input
              onChange={handleBedCheck}
              value="6"
              className="radio-btn"
              type="radio"
              name="bed"
            />
            <span className="tag-content mt-2 mb-0 border-black relative rounded-[4px]text-left border mr-[4px] p-2 inline-block">
              6
            </span>
          </label>
          <label className="cursor-pointer">
            <input
              onChange={handleBedCheck}
              value="8+"
              className="radio-btn"
              type="radio"
              name="bed"
            />
            <span className="tag-content mt-2 mb-0 border-black relative rounded-[4px]text-left border mr-[4px] p-2 inline-block">
              8+
            </span>
          </label>
        </div>
      </Modal>
    </div>
  );
}

export default FilterSlice;
