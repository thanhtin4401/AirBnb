import React from 'react';
import './BannerVideo.scss';
function BannerVideo() {
  return (
    <>
      <div className="container flex mx-auto h-full">
        <div className="left relative flex py-[1.5rem]  justify-center w-2/4 bg-black">
          <img
            className="absolute top-[1.5rem] left-0 z-10 "
            src="https://res.cloudinary.com/dvzingci9/image/upload/v1665423816/airBnB/logo/logo_alone_white_vnr65q.png"
            alt=""
          />
          <div className="max-w-[450px] flex flex-col justify-center items-center">
            <h1 className="text-[3.5rem] font-[700] text-center text-white">
              Try hosting on Airbnb
            </h1>
            <p className="text-center text-center my-[40px] text-[1rem] text-[#A1A1A1] font-[400]">
              Join us. we’ll help uoy every <br /> step of the way
            </p>
            <button className="btn__try-hosting px-[26px] py-[14px] text-white text-[0.8rem] font-[500]">
              Try hosting
            </button>
          </div>
        </div>
        <div className="right w-2/4"></div>
      </div>
      <div className="w-2/4 absolute right-0 h-full text-right bg-[blue] ">
        <video
          width="100%"
          className="h-full object-cover"
          src="https://res.cloudinary.com/dvzingci9/video/upload/v1665504047/airBnB/video/X2Download.app-_4K_HDR_NON_NUOC_CAO_BANG_UNESCO_GLOBAL_GEOPARK_VIETNAM.-_1080p_ruoqf8.mp4"
          control
          autoPlay
          loop
          muted
        ></video>
      </div>
    </>
  );
}

export default BannerVideo;
