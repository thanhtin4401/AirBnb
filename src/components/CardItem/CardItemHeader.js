import React from 'react';
import './CardItemHeader.scss';
function CardItemHeader() {
  return (
    <div className="relative bg-white rounded-[1rem] mb-[1.5rem] p-4 ">
      <div className="">
        <img
          src="https://i.vntrip.vn/471x290/smart/https://statics.vntrip.vn/data-v2/hotels/9906/img_max/9906_1499226454_97987435.jpg"
          alt=""
          className="rounded-[1rem] w-full max-h-[10rem] object-cover max-w-full"
        />
      </div>

      <div className="">
        <div className="w-full flex justify-between my-2">
          <h1 className=" text-[22px] font-bold">Noi cai quan que gi do</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="gray"
            className="w-6 h-6 bg-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            className="w-6 h-6 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="red"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          <span className="text-[14px] font-400 text-left font-500">
            <span className="text-black font-bold">23</span>{' '}
            <span className="font-[400]"> 9000km form</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default CardItemHeader;
