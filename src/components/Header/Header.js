import React, { useState } from 'react';
import UserNav from './UserNav';
import { FaSearch } from 'react-icons/fa';
import { DatePicker, Space } from 'antd';
export default function Header() {
  const [open, setOpen] = useState(false);
  const { RangePicker } = DatePicker;

  return (
    <div className={`fixed top-0 z-20 w-full transition-all ${open ? '' : 'border-b-2'}`}>
      <nav className="relative px-10 py-3  flex items-center lg:justify-between md:justify-between sm:justify-center mb:justify-center">
        {/* LEFT */}
        <div className="logo  lg:block  md:hidden sm:hidden mb:hidden">
          <img
            className="w-[130px] h-[35px]"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
            alt=""
          />
        </div>
        {/* END LEFT */}

        {/* MIDDLE */}
        <>
          <div
            onClick={() => {
              setOpen(!open);
            }}
            style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
            className="flex z-20 items-center px-3 py-2 rounded-3xl border border-gray-300"
          >
            <div className="font-medium px-2 border-r-2">
              <h1>Địa Điểm Bất kỳ</h1>
            </div>
            <div className="font-medium px-2 border-r-2">
              <h1>Tuần Bất Kỳ</h1>
            </div>
            <div className="font-medium px-2 ">
              <h1>Thêm Khách</h1>
            </div>
            <div className="p-2 bg-red-500 rounded-3xl">
              <FaSearch className="text-white" />
            </div>
          </div>
          <div
            style={{ boxShadow: 'rgb(0 0 0 / 9%) 0px 4px 2px' }}
            className={`absolute left-0  transition-all duration-500 top-[74px] w-full ${
              open ? 'h-[74px]' : 'overflow-hidden h-0'
            }`}
          >
            <div className="flex items-center justify-center ">
              <div className="w-52  flex items-center"></div>
            </div>
          </div>
        </>
        {/* END MIDDLE */}

        {/* RIGHT */}
        <UserNav />
        {/* END RIGHT */}
      </nav>
    </div>
  );
}
