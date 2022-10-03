import React from 'react';
import './CardItem.scss';
import { FaStar } from 'react-icons/fa';
function CardItem() {
  return (
    <div className="relative">
      <div className="">
        <img
          src="https://static01.nyt.com/images/2022/04/25/travel/20Frugal-travel1-illo/20Frugal-travel1-illo-superJumbo-v3.jpg"
          alt=""
          className="rounded-[1rem]"
        />
      </div>
      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="presentation"
        focusable="false"
        className="absolute top-2 right-2"
        style={{
          display: 'block',
          fill: 'rgba(0, 0, 0, 0.5)',
          height: 24,
          width: 24,
          stroke: 'rgb(255, 255, 255)',
          strokeWidth: 2,
          overflow: 'hidden',
        }}
      >
        <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z" />
      </svg>
      <div className="">
        <div className="w-full flex justify-between">
          <h1 className="text-[18px] font-bold">Gardon Reveira itlya</h1>
          <div className="flex justify-center items-center">
            <FaStar size="18px" className="mr-2" />
            <span className=" text-[18px]">5.0</span>
          </div>
        </div>
        <p className="text-[16px]">9000km form</p>
        <p className="text-[16px]">Oct 2-9</p>
        <div className="flex items-center">
          <p className="text-[18px] font-bold mr-2">@300</p>
          <span className="font-300 text-[16px]">night</span>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
