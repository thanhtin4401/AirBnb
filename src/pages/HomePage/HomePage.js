import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { Button, Skeleton } from 'antd';
import './HomePage.scss';
import SkeletonItem from '../../components/Skeleton/SkeletonItem';
import CardItem from '../../components/CardItem/CardItem';
import { useDispatch, useSelector } from 'react-redux';
import { getRoomList } from '../../redux/room/roomList';
import { getLocationList } from '../../redux/room/roomLocation';
import TabsHeader from './TabsHeader';
import FilterSlide from '../../components/FilterSlide/FilterSlide';
import Banner from '../../components/Banner/Banner';
import BannerVideo from '../../components/Banner/BannerVideo';
import Collection from '../../components/Collection/Collection';
import LiveAnyway from './LiveAnyway';
import { dataIMG } from '../../Data/Data';
import { useTranslation } from 'react-i18next';
function HomePage() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const allRoom = useSelector((state) => state.room.listRoom.allRoom);
  const isfetching = useSelector((state) => state.room.listRoom.isfetching);
  const allLocation = useSelector((state) => state.room.listLocation.allLocation);
  const [openShadowFilter, setopenShadowFilter] = useState(false);
  const [newRoom, setNewRoom] = useState([]);
  const [queyFilter, setQueyFilter] = useState({});
  const handleQueyFilter = (data) => {
    setQueyFilter(data);
  };
  useEffect(() => {
    dispatch(getRoomList());
    dispatch(getLocationList());
  }, []);
  useEffect(() => {
    const temp = allRoom;

    const roomFilter = temp.filter((item) => {
      return item.giaTien <= queyFilter.maxPrice && item.giaTien >= queyFilter.minPrice;
    });

    setNewRoom(roomFilter);
  }, [queyFilter]);
  useEffect(() => {
    renderRoomItem();
  }, [newRoom]);
  useEffect(() => {
    setNewRoom(allRoom);
  }, [allRoom]);
  const renderRoomItem = () => {
    let room = newRoom?.map((item, index) => {
      return { ...item, data: dataIMG[index] };
    });
    return room?.slice(0, 15).map((roomInfor, index) => {
      return <CardItem key={index} roomInfor={roomInfor} />;
    });
  };

  const closeNav = () => {
    if (window.scrollY >= 1100) {
      setopenShadowFilter(true);
    }
    if (window.scrollY < 1100) {
      setopenShadowFilter(false);
    }
  };
  window.addEventListener('scroll', closeNav);

  return (
    <div>
      <div className="header-homepage h-[100vh] pt-[70px] relative mb:hidden sm:hidden lg:flex justify-center items-center">
        <div className="filter-background absolute bg-[#0000007a] w-full z-10 top-0 right-0 h-full "></div>
        <div className="flex px-[4rem] container justify-between z-20 w-full h-full items-center pt-[1rem]">
          <div className="text-center w-2/4 ">
            <svg className="text-home" viewBox="0 0 1320 300">
              <text x="50%" y="50%" dy=".35em" text-anchor="middle">
                Monaco
              </text>
            </svg>
            {/* <button
              className="btn-here-me text-[#F2555A] bg-white hover:text-white hover:bg-[#F2555A] transition-all"
              style={{
                padding: '20px 50px',
                borderRadius: 68,
                fontSize: 18,

                fontWeight: 'bold',
              }}
            >
              Default Button
            </button> */}
          </div>
          <div className="text-center  overflow-hidden p-[20px 0px 100px 20px] h-full w-2/4">
            <div className=" m-auto mt-10  grid mb:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-6 animate__animated animate__fadeInUp">
              {/* <SkeletonItem /> */}
              <TabsHeader renderRoomItem={renderRoomItem} />
              {/* {renderRoomItem()} */}
            </div>
          </div>
        </div>
      </div>
      <div className="container m-auto mb:mt-[10rem] sm:mt-[10rem] lg:mt-10 mb-10">
        <div className="mb-10">
          <h1 className="text-[3rem] font-bold mb-10">{t('Explore nearby')}</h1>
          <div className="grid mb:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 grid-rows-2 gap-4">
            <div className="flex justify-start items-center">
              <img
                src="https://res.cloudinary.com/dvzingci9/image/upload/v1665413813/airBnB/Explore%20nearby/Frame_9-1_xlccyu.png"
                className="rounded-[0.2rem] mr-2 w-[3rem] h-[3rem]"
                alt=""
              />
              <div className="">
                <h1 className="text-[0.9rem] font-bold">location name</h1>
                <p className="opacity-60 text-[0.8rem]">start 250</p>
              </div>
            </div>
            <div className="flex justify-start items-center">
              <img
                src="https://res.cloudinary.com/dvzingci9/image/upload/v1665413809/airBnB/Explore%20nearby/Frame_9_donn3q.png"
                className="rounded-[0.2rem] mr-2 w-[3rem] h-[3rem]"
                alt=""
              />
              <div className="">
                <h1 className="text-[0.9rem] font-bold">location name</h1>
                <p className="opacity-60 text-[0.8rem]">start 250</p>
              </div>
            </div>
            <div className="flex justify-start items-center">
              <img
                src="https://res.cloudinary.com/dvzingci9/image/upload/v1665413767/airBnB/Explore%20nearby/Frame_9-4_upwubk.png"
                className="rounded-[0.2rem] mr-2 w-[3rem] h-[3rem]"
                alt=""
              />
              <div className="">
                <h1 className="text-[0.9rem] font-bold">location name</h1>
                <p className="opacity-60 text-[0.8rem]">start 250</p>
              </div>
            </div>
            <div className="flex justify-start items-center">
              <img
                src="https://res.cloudinary.com/dvzingci9/image/upload/v1665413767/airBnB/Explore%20nearby/Frame_9-5_lpnabl.png"
                className="rounded-[0.2rem] mr-2 w-[3rem] h-[3rem]"
                alt=""
              />
              <div className="">
                <h1 className="text-[0.9rem] font-bold">location name</h1>
                <p className="opacity-60 text-[0.8rem]">start 250</p>
              </div>
            </div>
            <div className="flex justify-start items-center">
              <img
                src="https://res.cloudinary.com/dvzingci9/image/upload/v1665413767/airBnB/Explore%20nearby/Frame_9-6_g2lxxg.png"
                className="rounded-[0.2rem] mr-2 w-[3rem] h-[3rem]"
                alt=""
              />
              <div className="">
                <h1 className="text-[0.9rem] font-bold">location name</h1>
                <p className="opacity-60 text-[0.8rem]">start 250</p>
              </div>
            </div>
            <div className="flex justify-start items-center">
              <img
                src="https://res.cloudinary.com/dvzingci9/image/upload/v1665413767/airBnB/Explore%20nearby/Frame_9-3_a7dltw.png"
                className="rounded-[0.2rem] mr-2 w-[3rem] h-[3rem]"
                alt=""
              />
              <div className="">
                <h1 className="text-[0.9rem] font-bold">location name</h1>
                <p className="opacity-60 text-[0.8rem]">start 250</p>
              </div>
            </div>
            <div className="flex justify-start items-center">
              <img
                src="https://res.cloudinary.com/dvzingci9/image/upload/v1665413766/airBnB/Explore%20nearby/Frame_9-2_ovogvc.png"
                className="rounded-[0.2rem] mr-2 w-[3rem] h-[3rem]"
                alt=""
              />
              <div className="">
                <h1 className="text-[0.9rem] font-bold">location name</h1>
                <p className="opacity-60 text-[0.8rem]">start 250</p>
              </div>
            </div>
            <div className="flex justify-start items-center">
              <img
                src="https://res.cloudinary.com/dvzingci9/image/upload/v1665413813/airBnB/Explore%20nearby/Frame_9-1_xlccyu.png"
                className="rounded-[0.2rem] mr-2 w-[3rem] h-[3rem]"
                alt=""
              />
              <div className="">
                <h1 className="text-[0.9rem] font-bold">location name</h1>
                <p className="opacity-60 text-[0.8rem]">start 250</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="filter-sticky bg-white "
        style={{ boxShadow: `${openShadowFilter ? 'rgba(0, 0, 0, 0.24) 0px 3px 8px' : ''}` }}
      >
        <div className="mb:w-full sm:w-full lg:container m-auto mt-10">
          <FilterSlide handleQueryFilter={handleQueyFilter} />
        </div>
      </div>

      <div className="container mb-10 m-auto mt-10 grid mb:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-6 gap-6 ">
        {isfetching ? <SkeletonItem /> : renderRoomItem()}
      </div>
      <div className="mb:w-full sm:w-full lg:container mx-auto">
        <Banner />
      </div>
      <div className="container mx-auto my-10">
        <Collection />
      </div>
      <div className="container mx-auto my-20">
        <LiveAnyway />
      </div>
      <div className="flex relative mb:hidden mt-10 bg-black w-full h-screen">
        <div className="flex relative  bg-black w-full h-screen mb:flex-col sm:flex-col ">
          <BannerVideo />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
