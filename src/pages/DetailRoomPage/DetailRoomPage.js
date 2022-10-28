import React, { useEffect, useState } from 'react';
import Comment from '../../components/Comment/Comment';
import Map from '../../components/Map/Map';
import RateStarReviewService from '../../components/RateStarReviewService/RateStarReviewService';
import './DetailRoomPage.scss';
import { DatePicker, Space, Select } from 'antd';
import ReserveFoodterDetail from './ReserveFoodterDetail';
import { Swiper, SwiperSlide } from 'swiper/react';
import { dataIMG } from '../../Data/Data';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';
import { useNavigate, useParams } from 'react-router-dom';
import TotalReserce from './TotalReserce';
import { useDispatch, useSelector } from 'react-redux';
import { getCommentUser } from '../../redux/comment/commentSlice';
import { useSelect } from '@material-tailwind/react';
import CommentPush from '../../components/Comment/CommentPush';

import { detailInfoRoom } from '../../redux/room/roomBooking';
import SkeletonDetail from '../../components/Skeleton/SkeletonDetail';
import { getRoomList } from '../../redux/room/roomList';
import { useTranslation } from 'react-i18next';
function DetailRoomPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allComment = useSelector((state) => state.comment.allComment);
  const commentSuccess = useSelector((state) => state.comment.commentSuccess);
  const roomDetailInfo = useSelector((state) => state.room.bookingRoom.roomDetail);
  const isFetching = useSelector((state) => state.room.bookingRoom.isfetching);
  const price = useSelector((state) => state.room.bookingRoom.price);
  const [total, setTotal] = useState(0);

  const [isGuestsSelect, setisGuestsSelect] = useState(false);
  const allRoom = useSelector((state) => state.room.listRoom.allRoom);

  const handleIsGuestsSelect = () => {
    setisGuestsSelect(!isGuestsSelect);
  };
  const [imgRoomList, setImgRoomList] = useState([]);
  const renderRoomItem = (id) => {
    let room = allRoom?.map((item, index) => {
      return { ...item, data: dataIMG[index] };
    });
    let ImgRoom = room?.filter((item) => {
      return item.id == id;
    });

    setImgRoomList(ImgRoom);
  };

  const { roomId } = useParams();

  useEffect(() => {
    dispatch(getRoomList());
    dispatch(detailInfoRoom(roomId));
    dispatch(getCommentUser(roomId));
    renderRoomItem(roomId);

    setTotal(price);
  }, []);
  useEffect(() => {
    console.log('roomId5', price);
    setTotal(price);
    renderRoomItem(roomId);
  }, [price]);

  useEffect(() => {
    dispatch(getRoomList());
    dispatch(detailInfoRoom(roomId));
    dispatch(getCommentUser(roomId));
    renderRoomItem(roomId);
    console.log('roomId5', price);
    setTotal(price);
  }, [roomId]);
  const handleRenderComment = () => {
    return allComment?.map((item, index) => {
      return <Comment data={item} key={index} />;
    });
  };
  const handleRenderCommentMobile = () => {
    return allComment?.map((item, index) => {
      return (
        <SwiperSlide key={index}>
          <Comment data={item} />
        </SwiperSlide>
      );
    });
  };
  useEffect(() => {
    dispatch(getCommentUser(roomId));
    renderRoomItem(roomId);
  }, [roomId, commentSuccess]);

  return (
    <>
      <div className="container mx-auto pb-5 mb:pt-[0px] sm:pt-[0px] md:pt-[6rem]">
        {isFetching ? (
          <SkeletonDetail />
        ) : (
          <>
            <div className="bg-white py-[12px] justify-between mb:flex sm:flex md:hidden">
              <button
                onClick={() => {
                  navigate('/');
                }}
                className="flex items-center"
              >
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
                    d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                  />
                </svg>{' '}
                <span className="ml-2 font-[600] text-[1rem]">Home</span>
              </button>

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
                  <p className="ml-1">{t('Share')}</p>{' '}
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
                  <p className="ml-1">{t('Save')}</p>{' '}
                </div>
              </div>
            </div>

            <Swiper
              className="mySwiper swiper-h sm:block mb:block md:hidden"
              spaceBetween={50}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
            >
              <SwiperSlide className=" bg-black">
                <img
                  src={`${
                    imgRoomList
                      ? imgRoomList[0]?.data.img1
                      : 'https://usbforwindows.com/storage/img/images_3/function_set_default_image_when_image_not_present.png'
                  }`}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide className=" bg-black">
                <img
                  src={`${
                    imgRoomList
                      ? imgRoomList[0]?.data.img2
                      : 'https://usbforwindows.com/storage/img/images_3/function_set_default_image_when_image_not_present.png'
                  }`}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide className=" bg-black">
                <img
                  src={`${
                    imgRoomList
                      ? imgRoomList[0]?.data.img3
                      : 'https://usbforwindows.com/storage/img/images_3/function_set_default_image_when_image_not_present.png'
                  }`}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide className=" bg-black">
                <img
                  src={`${
                    imgRoomList
                      ? imgRoomList[0]?.data.img4
                      : 'https://usbforwindows.com/storage/img/images_3/function_set_default_image_when_image_not_present.png'
                  }`}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide className=" bg-black">
                <img
                  src={`${
                    imgRoomList
                      ? imgRoomList[0]?.data.img5
                      : 'https://usbforwindows.com/storage/img/images_3/function_set_default_image_when_image_not_present.png'
                  }`}
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
            <div className="header mb-[2rem]">
              <h1 className="text-[1.625rem] font-[500]">{roomDetailInfo?.tenPhong}</h1>
              <div className="flex justify-between">
                <p className="text-[1rem] font-[400] underline">Maldives</p>
                <div className="flex items-center mb:hidden sm:hidden md:flex">
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
            <div className="image mb-2 mb:hidden sm:hidden md:block">
              <div className="grid grid-cols-4 grid-rows-2 gap-4">
                <img
                  className="rounded-[0.5rem] row-span-2 col-span-2 w-full h-full object-cover"
                  src={`${
                    imgRoomList
                      ? imgRoomList[0]?.data.img1
                      : 'https://usbforwindows.com/storage/img/images_3/function_set_default_image_when_image_not_present.png'
                  }`}
                  alt=""
                />
                <img
                  className="rounded-[0.5rem] w-full h-full object-cover"
                  src={`${
                    imgRoomList
                      ? imgRoomList[0]?.data.img2
                      : 'https://usbforwindows.com/storage/img/images_3/function_set_default_image_when_image_not_present.png'
                  }`}
                  alt=""
                />
                <img
                  className="rounded-[0.5rem] w-full h-full object-cover"
                  src={`${
                    imgRoomList
                      ? imgRoomList[0]?.data.img3
                      : 'https://usbforwindows.com/storage/img/images_3/function_set_default_image_when_image_not_present.png'
                  }`}
                  alt=""
                />
                <div className="overflow-hidden col-span-1">
                  <img
                    className="rounded-[0.5rem] object-cover col-span-1"
                    src={`${
                      imgRoomList
                        ? imgRoomList[0]?.data.img4
                        : 'https://usbforwindows.com/storage/img/images_3/function_set_default_image_when_image_not_present.png'
                    }`}
                    alt=""
                  />
                </div>

                <img
                  className="rounded-[0.5rem] w-full h-full object-cover"
                  src={`${
                    imgRoomList
                      ? imgRoomList[0]?.data.img5
                      : 'https://usbforwindows.com/storage/img/images_3/function_set_default_image_when_image_not_present.png'
                  }`}
                  alt=""
                />
              </div>
            </div>
            <div className="w-full flex">
              <div className="mb:w-full sm:w-full md:w-3/5 lg:w-3/5">
                <div className="w-full mb:py-[1rem] sm:py-[1rem] md:py-[2.2rem] border-b-[1px] border-[#dadada]">
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
                    {roomDetailInfo?.moTa}
                  </p>
                </div>
                {/* ================= Where you'll sleep ==================== */}
                <div className="w-full py-[2.2rem] border-b-[1px] border-[#dadada]">
                  <h1 className="text-[1.625rem] mb-[1.25rem] font-[600]">
                    {t("Where you'll sleep")}
                  </h1>
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
                    <h2 className="font-[500] mt-3 mb-1 text-[1rem]">{t('Bedroom')}</h2>
                    <p className="font-[300] text-[0.8rem]">1 double bed</p>
                  </div>
                </div>
                {/* ================= what this place offers ==================== */}
                <div className="w-full py-[2.2rem] border-b-[1px] border-[#dadada]">
                  <h1 className="text-[1.625rem] font-[600]">{t('what this place offers')}</h1>
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
                <TotalReserce
                  total={total}
                  mobile={false}
                  desktop={true}
                  roomId={roomId}
                  setTotal={setTotal}
                />
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

              <div className="md:hidden w-full">
                <Swiper
                  slidesPerView={2}
                  spaceBetween={20}
                  pagination={{
                    clickable: true,
                  }}
                  className="mySwiper md:hidden comment-detail"
                >
                  {handleRenderCommentMobile()}
                </Swiper>
              </div>
              <div className="mb:hidden sm:hidden md:grid  comment w-full grid-cols-2 gap-y-4  gap-x-16 ">
                {handleRenderComment()}
              </div>
              <div className="w-full mt-6">
                <CommentPush roomId={roomId} />
              </div>
            </div>
            <div className="reviews"></div>
            <div className="map w-full mt-5">
              <h1 className="text-[1.625rem]   font-[600]">{t("Where you'll be")}</h1>
              <Map />
            </div>
          </>
        )}
      </div>
      <ReserveFoodterDetail roomId={roomId} total={total} setTotal={setTotal} />
    </>
  );
}

export default DetailRoomPage;
