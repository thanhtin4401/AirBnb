import React, { useState } from 'react';
import Comment from '../../components/Comment/Comment';
import Map from '../../components/Map/Map';
import RateStarReviewService from '../../components/RateStarReviewService/RateStarReviewService';
import './DetailRoomPage.scss';
import { DatePicker, Space, Select } from 'antd';
import ReserveFoodterDetail from './ReserveFoodterDetail';

function DetailRoomPage() {
  const { RangePicker } = DatePicker;
  const { Option } = Select;
  const [isGuestsSelect, setisGuestsSelect] = useState(false);
  const [isCANCELLATIONPOLICES, setisCANCELLATIONPOLICES] = useState(false);
  const handleIsGuestsSelect = () => {
    setisGuestsSelect(!isGuestsSelect);
  };
  return (
    <>
      <div className="container mx-auto py-5">
        <div className="header mt-[6rem] mb-[2rem]">
          <h1 className="text-[1.625rem] font-[500]">
            Adaaran Club Rannalhi, Maldives, Water Bungalows
          </h1>
          <div className="flex justify-between">
            <p className="text-[1rem] font-[400] underline">Maldives</p>
            <div className="flex items-center">
              <div className="hover:underline cursor-pointer flex items-center justify-center mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                  />
                </svg>
                <p className="ml-1">Share</p>{' '}
              </div>
              <div className="hover:underline cursor-pointer flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
                <p className="ml-1">Save</p>{' '}
              </div>
            </div>
          </div>
        </div>
        <div className="image mb-2">
          <div className="grid grid-cols-4 grid-rows-2 gap-4">
            <img
              className="rounded-[0.5rem] row-span-2 col-span-2 w-full"
              src="https://usbforwindows.com/storage/img/images_3/function_set_default_image_when_image_not_present.png"
              alt=""
            />
            <img
              className="rounded-[0.5rem]"
              src="https://usbforwindows.com/storage/img/images_3/function_set_default_image_when_image_not_present.png"
              alt=""
            />
            <img
              className="rounded-[0.5rem]"
              src="https://usbforwindows.com/storage/img/images_3/function_set_default_image_when_image_not_present.png"
              alt=""
            />
            <img
              className="rounded-[0.5rem]"
              src="https://usbforwindows.com/storage/img/images_3/function_set_default_image_when_image_not_present.png"
              alt=""
            />
            <img
              className="rounded-[0.5rem]"
              src="https://usbforwindows.com/storage/img/images_3/function_set_default_image_when_image_not_present.png"
              alt=""
            />
          </div>
        </div>
        <div className="w-full flex">
          <div className="mb:w-full sm:w-full md:w-3/5 lg:w-3/5">
            <div className="w-full py-[2.2rem] border-b-[1px] border-[#dadada]">
              <h2 className="text-[1.375rem] font-[500]">Dome hosted Dorothy</h2>
              <span className="text-[0.8rem] font-[400] text-[#717171]">
                3 guest - 1 bedroom - 1bed - bathroom
              </span>
            </div>
            <div className=" py-[2.2rem] border-b-[1px] border-[#dadada]">
              <div className="flex items-start mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>

                <div className="ml-2">
                  <h2 className="text-[1rem] font-[500]">Dive right in</h2>
                  <p className="text-[0.8rem] font-[400] text-[#717171]">
                    This is one of the few places in the area with a pool
                  </p>
                </div>
              </div>
              <div className="flex items-start ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>

                <div className="ml-2">
                  <h2 className="text-[1rem] font-[500]">Dive right in</h2>
                  <p className="text-[0.8rem] font-[400] text-[#717171]">
                    This is one of the few places in the area with a pool
                  </p>
                </div>
              </div>
            </div>
            {/* ================================== AIRCOVER =================================== */}
            <div className="aircover py-[2.2rem] border-b-[1px] border-[#dadada]">
              <h1 className="font-[700] text-[red] text-[32px]">
                air<span className="font-[700] text-black text-[32px]">cover</span>
              </h1>
              <p className="text-[1rem] font-[300] my-[0.7rem] text-[#222222]">
                Every booking includes free protection from Host cancellations, listing
                inaccuracies, and other issues like trouble checking in.
              </p>
              <span className="font-[700] underline text-[1rem]">Learn more</span>
            </div>
            <div className="aircover py-[2.2rem] border-b-[1px] border-[#dadada]">
              <p className="text-[1rem] font-[300] my-[0.7rem] text-[#222222]">
                Every booking includes free protection from Host cancellations, listing
                inaccuracies, and other issues like trouble checking in.Every booking includes free
                protection from Host cancellations, listing inaccuracies, and other issues like
                trouble checking in. Every booking includes free protection from Host cancellations,
                listing inaccuracies, and other issues like trouble checking in.
              </p>
            </div>
            {/* ================= Where you'll sleep ==================== */}
            <div className="w-full py-[2.2rem] border-b-[1px] border-[#dadada]">
              <h1 className="text-[1.625rem] mb-[1.25rem] font-[600]">Where you'll sleep</h1>
              <div className="p-[1.2rem] text-left border rounded-[0.4rem] block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                  />
                </svg>
                <h2 className="font-[500] mt-3 mb-1 text-[1rem]">Bedroom</h2>
                <p className="font-[300] text-[0.8rem]">1 double bed</p>
              </div>
            </div>
            {/* ================= what this place offers ==================== */}
            <div className="w-full py-[2.2rem] border-b-[1px] border-[#dadada]">
              <h1 className="text-[1.625rem] font-[600]">what this place offers</h1>
              <div className="grid grid-cols-2 w-3/4 gap-y-2 my-5 gap-x-16">
                <p className="flex items-center font-[300] text-[1rem]">
                  <img
                    src="https://res.cloudinary.com/dvzingci9/image/upload/v1665892877/airBnB/icon%20offer%20detailpage/icon_ss0rmh.png"
                    className="w-[1.1rem] h-[1.1rem] mr-[1rem]"
                    alt=""
                  />
                  wifi
                </p>
                <p className="flex items-center font-[300] text-[1rem]">
                  <img
                    src="https://res.cloudinary.com/dvzingci9/image/upload/v1665892879/airBnB/icon%20offer%20detailpage/Frame-3_zslq3h.png"
                    className="w-[1.1rem] h-[1.1rem] mr-[1rem]"
                    alt=""
                  />
                  Pool
                </p>
                <p className="flex items-center font-[300] text-[1rem]">
                  <img
                    src="https://res.cloudinary.com/dvzingci9/image/upload/v1665892879/airBnB/icon%20offer%20detailpage/Frame_nsy3uv.png"
                    className="w-[1.1rem] h-[1.1rem] mr-[1rem]"
                    alt=""
                  />
                  TV
                </p>
                <p className="flex items-center font-[300] text-[1rem]">
                  <img
                    src="https://res.cloudinary.com/dvzingci9/image/upload/v1665892878/airBnB/icon%20offer%20detailpage/Frame-4_ropqpj.png"
                    className="w-[1.1rem] h-[1.1rem] mr-[1rem]"
                    alt=""
                  />
                  Air conditioning
                </p>
                <p className="flex items-center font-[300] text-[1rem]">
                  <img
                    src="https://res.cloudinary.com/dvzingci9/image/upload/v1665892877/airBnB/icon%20offer%20detailpage/Frame-1_e5n14s.png"
                    className="w-[1.1rem] h-[1.1rem] mr-[1rem]"
                    alt=""
                  />
                  Hair dryer
                </p>
                <p className="flex items-center font-[300] text-[1rem]">
                  <img
                    src="https://res.cloudinary.com/dvzingci9/image/upload/v1665892878/airBnB/icon%20offer%20detailpage/Frame-5_vobdtz.png"
                    className="w-[1.1rem] h-[1.1rem] mr-[1rem]"
                    alt=""
                  />
                  Breakfast
                </p>
                <p className="flex items-center font-[300] text-[1rem]">
                  <img
                    src="https://res.cloudinary.com/dvzingci9/image/upload/v1665892879/airBnB/icon%20offer%20detailpage/Frame_nsy3uv.png"
                    className="w-[1.1rem] h-[1.1rem] mr-[1rem]"
                    alt=""
                  />
                  long-term stays allowed
                </p>
              </div>
              <button className="py-[0.75rem] px-[1.5rem] text-[1rem] font-[600] rounded-[0.5rem] border">
                {' '}
                Showall 14 amentities
              </button>
            </div>
          </div>
          <div className="pl-[6rem] mb:hidden sm:hidden md:block w-2/5">
            <div className=" p-[1.5rem] card-total border rounded-[0.5rem]">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="font-[500] text-[1.2rem] mx-1">42.000</p>
                  <span className="text-[0.6rem] font-[300]">night</span>
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="black"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                  <p className="text-[0.8rem] font-[500] mx-1">4.8</p>
                  <span> . </span>
                  <span className="text-[0.8rem] font-[500] opacity-60 underline">5 review</span>
                </div>
              </div>
              <div className="w-full  py-2">
                <div className="w-full relative border-[1px] rounded-lg border-black">
                  <div className="w-full flex justify-between  border-b-[1px] border-black">
                    {/* <Space direction="vertical" size={12}>
                    <RangePicker />
                  </Space> */}
                    <div className=" p-[12px] transition-all cursor-pointer border-r-[1px] border-black w-2/4">
                      <h2 className="font-[700] text-[1rem] mb-1">Date Start</h2>
                      <p>20/11/2022</p>
                    </div>
                    <div className=" p-[12px] transition-all cursor-pointer w-2/4">
                      <h2 className="font-[700] text-[1rem] mb-1">Date Start</h2>
                      <p>20/11/2022</p>
                    </div>
                  </div>
                  <div
                    className="py-2 p-[12px]  flex justify-between items-center transition-all cursor-pointer"
                    onClick={handleIsGuestsSelect}
                  >
                    <div className="">
                      <h2 className="font-[400] text-[1rem]">GUESTS</h2>
                      <p className="font-[300] text-[1rem] mt-1">1 guests</p>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </div>
                  <div
                    className={`${
                      isGuestsSelect ? 'block' : 'hidden'
                    } absolute bg-white w-full top-[100%] z-10 rounded-lg border left-0 p-[12px]`}
                  >
                    <div className="flex items-center w-full my-[12px]">
                      <div className="w-[70%] flex flex-col ">
                        <p className="text-[0.8rem] font-[600]">Adults</p>
                        <span className="text-[0.8rem] font-[300]">Age 13+</span>
                      </div>
                      <div className="w-[30%] flex items-center justify-center ">
                        <button className="hover:opacity-100 transition-all opacity-20" disabled>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="0.8"
                            stroke="currentColor"
                            className="w-[2.5rem] cursor-pointer h-[2.5rem]"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </button>

                        <p className="text-[1rem] mx-2">1</p>
                        <button className="hover:opacity-100 transition-all opacity-70">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="0.8"
                            stroke="currentColor"
                            className="w-[2.5rem] cursor-pointer h-[2.5rem] "
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center w-full my-[12px]">
                      <div className="w-[70%] flex flex-col ">
                        <p className="text-[0.8rem] font-[600]">Adults</p>
                        <span className="text-[0.8rem] font-[300]">Age 13+</span>
                      </div>
                      <div className="w-[30%] flex items-center justify-center ">
                        <button className="hover:opacity-100 transition-all opacity-20" disabled>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="0.8"
                            stroke="currentColor"
                            className="w-[2.5rem] cursor-pointer h-[2.5rem]"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </button>

                        <p className="text-[1rem] mx-2">1</p>
                        <button className="hover:opacity-100 transition-all opacity-70">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="0.8"
                            stroke="currentColor"
                            className="w-[2.5rem] cursor-pointer h-[2.5rem] "
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center w-full my-[12px]">
                      <div className="w-[70%] flex flex-col ">
                        <p className="text-[0.8rem] font-[600]">Adults</p>
                        <span className="text-[0.8rem] font-[300]">Age 13+</span>
                      </div>
                      <div className="w-[30%] flex items-center justify-center ">
                        <button className="hover:opacity-100 transition-all opacity-20" disabled>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="0.8"
                            stroke="currentColor"
                            className="w-[2.5rem] cursor-pointer h-[2.5rem]"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </button>

                        <p className="text-[1rem] mx-2">1</p>
                        <button className="hover:opacity-100 transition-all opacity-70">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="0.8"
                            stroke="currentColor"
                            className="w-[2.5rem] cursor-pointer h-[2.5rem] "
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <p className="font-[300] text-[0.8rem]">
                      This place has a maximum of 8 guests, not including infants. Pets aren't
                      allowed.
                    </p>
                    <p
                      onClick={handleIsGuestsSelect}
                      className="text-right w-full underline cursor-pointer font[600] text-[1rem]"
                    >
                      Close
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setisCANCELLATIONPOLICES(!isCANCELLATIONPOLICES);
                  }}
                  className="my-4 flex justify-between w-full pr-[12px]"
                >
                  CANCELLATIONPOLICES{' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
                <div
                  className={`${
                    isCANCELLATIONPOLICES ? 'block' : 'hidden'
                  } w-full border-black border rounded-lg`}
                >
                  <div className="flex justify-between p-[12px] items-center border-b-[1px] border-black">
                    <p className="font-[300] text-[1rem]">Non-refunable</p>
                    <input
                      type="radio"
                      name="refund"
                      value="non-refund"
                      className="w-[32px] h-[32px] rounded-[5rem]"
                    />
                  </div>
                  <div className="flex justify-between p-[12px] items-center ">
                    <p className="font-[300] text-[1rem] w-[90%]">
                      Non-refunable br <br />
                      <span className="text-[0.8rem] opacity-70 block font-[300]">
                        Free cancellation before 22 Jun. Cancel before check-in on 23 Jun for a
                        partial refund.
                      </span>
                    </p>

                    <input
                      type="radio"
                      name="refund"
                      value="refund"
                      className="w-[32px] h-[32px] rounded-[5rem]"
                    />
                  </div>
                </div>
              </div>
              <button
                style={{ background: 'linear-gradient(91.46deg, #E61E4F 18.59%, #D70566 94.48%)' }}
                className="flex mb-[0.75rem] py-[0.75rem] justify-center font-bold text-[1.1rem] text-white w-full rounded-[8px] "
              >
                Reserve
              </button>
              <p className="text-center text-[0.875rem] font-[300]">You won't be charged yet</p>
              <div className="py-4">
                <div className="flex items-center justify-between w-full">
                  <span className="font-[300] text-[1rem] underline ">Show price details</span>
                  <span className="font-[300] text-[1rem]">$506</span>
                </div>
                <div className="flex items-center justify-between w-full mt-2">
                  <span className="font-[300] text-[1rem] underline ">Service fee</span>
                  <span className="font-[300] text-[1rem]">$506</span>
                </div>
              </div>
              <div className="total flex justify-between pt-[1.25rem] border-t-[1px] border-[#dadada]">
                <h1 className="font-[500] text-[1rem]">Total before taxes</h1>
                <p className="text-[1rem] font-[600]">2.30.217 total</p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= Review of user ==================== */}
        <div className="mt-[2.5rem] w-full">
          <div className="star flex justify-start items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 fill-black mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
            <p className="font-[600] text-[1.2rem]">4.75 . 4 reviews</p>
          </div>
          <div className="rate grid grid-rows-3 mb:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-y-4  gap-x-16 my-4">
            <RateStarReviewService service="Cleanliness" rate="4.8" />
            <RateStarReviewService service="Communication" rate="5.0" />
            <RateStarReviewService service="Check-in" rate="3.5" />
            <RateStarReviewService service="Accuracy" rate="4.0" />
            <RateStarReviewService service="Location" rate="4.5" />
            <RateStarReviewService service="Value" rate="3.8" />
          </div>
          <div className="comment w-full grid grid-cols-2 gap-y-4  gap-x-16">
            <Comment />
            <Comment />
            <Comment />
            <Comment />
          </div>
        </div>
        <div className="reviews"></div>
        <div className="map w-full mt-5">
          <h1 className="text-[1.625rem]   font-[600]">Where you'll be</h1>
          <Map />
        </div>
      </div>
      <ReserveFoodterDetail />
    </>
  );
}

export default DetailRoomPage;
