import React from 'react';
import ReactPlayer from 'react-player';
import { Button, Skeleton } from 'antd';
import './HomePage.scss';
import SkeletonItem from '../../components/Skeleton/SkeletonItem';
import CardItem from '../../components/CardItem/CardItem';
// Render a YouTube video player
function HomePage() {
  return (
    <div>
      <div className="header h-[100vh] flex justify-center items-center">
        <div className="text-center ">
          <h1 className="font-bold mb-10 text-[18px] ">you can contact me and see cv of us</h1>
          <button
            className="btn-here-me text-[#F2555A] bg-white hover:text-white hover:bg-[#F2555A] transition-all"
            style={{
              padding: '20px 50px',
              borderRadius: 68,
              fontSize: 18,

              fontWeight: 'bold',
            }}
          >
            Default Button
          </button>
        </div>
      </div>
      <div className="container m-auto mt-10 grid mb:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {/* <SkeletonItem /> */}
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
    </div>
  );
}

export default HomePage;
