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

function HomePage() {
  const dispatch = useDispatch();
  const allRoom = useSelector((state) => state.room.listRoom.allRoom);
  const allLocation = useSelector((state) => state.room.listLocation.allLocation);
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

  return (
    <div>
      <div className="header h-[100vh] pt-[70px] relative flex justify-center items-center">
        <div className="filter-background absolute bg-[#0000007a] w-full z-10 top-0 right-0 h-full "></div>
        <div className="flex px-[120px] container justify-between z-20 w-full h-full items-center pt-[70px]">
          <div className="text-center w-2/4 ">
            <h1 className="font-bold mb-10 text-white text-[40px] text-left animate__animated animate__fadeInLeft">
              Monaco
              <p className="text-[25px]">Mar mediterrance</p>
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
      <div className="container m-auto mt-10 mb-10">
        <div className="mb-10">
          <h1 className="text-xl font-bold mb-10">Explore nearby</h1>
          <div className="grid grid-cols-4 grid-rows-2">
            <div className="flex justify-start items-center">
              <img
                src="../../../public/img/Explore-nearby/house-2.png"
                className="rounded-[0.2rem] mr-2 w-[40px] h-[40px]"
                alt=""
              />
              <div className="">
                <h1 className="text-lg font-bold">location name</h1>
                <p className="opacity-60">start 250</p>
              </div>
            </div>
            <div className="flex justify-start items-center">
              <img
                src="../../../public/img/Explore-nearby/house-2.png"
                className="rounded-[0.2rem] mr-2 w-[40px] h-[40px]"
                alt=""
              />
              <div className="">
                <h1 className="text-lg font-bold">location name</h1>
                <p className="opacity-60">start 250</p>
              </div>
            </div>
            <div className="flex justify-start items-center">
              <img
                src="../../../public/img/Explore-nearby/house-2.png"
                className="rounded-[0.2rem] mr-2 w-[40px] h-[40px]"
                alt=""
              />
              <div className="">
                <h1 className="text-lg font-bold">location name</h1>
                <p className="opacity-60">start 250</p>
              </div>
            </div>
            <div className="flex justify-start items-center">
              <img
                src="../../../public/img/Explore-nearby/house-2.png"
                className="rounded-[0.2rem] mr-2 w-[40px] h-[40px]"
                alt=""
              />
              <div className="">
                <h1 className="text-lg font-bold">location name</h1>
                <p className="opacity-60">start 250</p>
              </div>
            </div>
            <div className="flex justify-start items-center">
              <img
                src="../../../public/img/Explore-nearby/house-2.png"
                className="rounded-[0.2rem] mr-2 w-[40px] h-[40px]"
                alt=""
              />
              <div className="">
                <h1 className="text-lg font-bold">location name</h1>
                <p className="opacity-60">start 250</p>
              </div>
            </div>
            <div className="flex justify-start items-center">
              <img
                src="../../../public/img/Explore-nearby/house-2.png"
                className="rounded-[0.2rem] mr-2 w-[40px] h-[40px]"
                alt=""
              />
              <div className="">
                <h1 className="text-lg font-bold">location name</h1>
                <p className="opacity-60">start 250</p>
              </div>
            </div>
            <div className="flex justify-start items-center">
              <img
                src="../../../public/img/Explore-nearby/house-2.png"
                className="rounded-[0.2rem] mr-2 w-[40px] h-[40px]"
                alt=""
              />
              <div className="">
                <h1 className="text-lg font-bold">location name</h1>
                <p className="opacity-60">start 250</p>
              </div>
            </div>
            <div className="flex justify-start items-center">
              <img
                src="../../../public/img/Explore-nearby/house-2.png"
                className="rounded-[0.2rem] mr-2 w-[40px] h-[40px]"
                alt=""
              />
              <div className="">
                <h1 className="text-lg font-bold">location name</h1>
                <p className="opacity-60">start 250</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="filter-sticky bg-white border-b-2">
        <div className="container  m-auto mt-10">
          <FilterSlide />
        </div>
      </div>

      <div className="container m-auto mt-10 grid mb:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {/* <SkeletonItem /> */}
        {renderRoomItem()}
      </div>
      <div className="container"></div>
    </div>
  );
}

export default HomePage;
