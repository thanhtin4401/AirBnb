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

function HomePage() {
  const dispatch = useDispatch();
  const allRoom = useSelector((state) => state.room.listRoom.allRoom);
  const allLocation = useSelector((state) => state.room.listLocation.allLocation);
  const [openShadowFilter, setopenShadowFilter] = useState(false);
  console.log('allRoom', allRoom);
  console.log('allList', allLocation);
  useEffect(() => {
    dispatch(getRoomList());
    dispatch(getLocationList());
  }, []);

  const renderRoomItem = () => {
    return allRoom?.map((roomInfor, index) => {
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
      <div className="header h-[100vh] pt-[70px] relative mb:hidden sm:hidden lg:flex justify-center items-center">
        <div className="filter-background absolute bg-[#0000007a] w-full z-10 top-0 right-0 h-full "></div>
        <div className="flex px-[4rem] container justify-between z-20 w-full h-full items-center pt-[1rem]">
          <div className="text-center w-2/4 ">
            <h1 className="font-bold mb-10 text-white text-[1.5rem] text-left animate__animated animate__fadeInLeft">
              Monaco
              <p className="text-[1.2rem]">Mar mediterrance</p>
            </h1>
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
      <div className="container m-auto mb:mt-[10rem] sm lg:mt-10 mb-10">
        <div className="mb-10">
          <h1 className="text-[3rem] font-bold mb-10">Explore nearby</h1>
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
          <FilterSlide />
        </div>
      </div>

      <div className="container mb-10 m-auto mt-10 grid mb:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-6 gap-6 ">
        {/* <SkeletonItem /> */}
        {renderRoomItem()}
      </div>
      <div className="mb:w-full sm:w-full lg:container mx-auto">
        <Banner />
      </div>
      <div className="flex relative mt-10 bg-black w-full h-screen mb:flex-col sm:flex-col ">
        <BannerVideo />
      </div>
    </div>
  );
}

export default HomePage;
