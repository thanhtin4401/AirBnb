import React from 'react';
import './Banner.scss';
function Banner() {
  return (
    <div className="w-full relative lg:rounded-[1.2rem]  py-[8rem] flex items-center overflow-hidden">
      <img
        src="https://images.squarespace-cdn.com/content/v1/5e72c8bfe21ad940ba788673/1626985544757-CHEO1GWU6S7KC4Y5VJCE/what-is-airbnb-thumbnail.jpg"
        alt=""
        className="absolute w-full h-full object-cover"
      />
      <div className="overlay w-full h-full absolute top-0 left-0"></div>
      <div className="flex justify-start pl-[10rem] z-10">
        <div className="mb:text-center sm:text-center lg:text-left">
          <h1 className="text-[3rem] font-bold text-white">Try hosting</h1>
          <p className="text-white text-[0.8rem] font-[500] mb-4 mt-2">
            Earn extra income and unlock new <br /> opportunities by sharing your space.
          </p>
          <button className="font-bold text-[0.8rem] rounded-[0.5rem] py-[0.8rem] px-[1.2rem] bg-white">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
