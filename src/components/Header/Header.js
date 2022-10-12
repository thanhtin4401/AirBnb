import React, { useEffect, useState } from 'react';
import UserNav from './UserNav';
import { FaSearch } from 'react-icons/fa';
import { DatePicker, Space } from 'antd';
import { Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getLocationList } from '../../redux/room/roomLocation';
import "./Header.modul.scss"
export default function Header() {
  const [open, setOpen] = useState(false);
  const [bg, setBg] = useState(true);
  const [idViTri,setIdViTri] = useState(0);
  const { RangePicker } = DatePicker;
  const { Option } = Select;
  const onChange = (value) => {
    console.log(`${value}`);
    setIdViTri(value)
  };

  const onSearch = (value) => {
    console.log('search:', value);
  };
  const dispatch = useDispatch();
  const allLocation = useSelector((state) => state.room.listLocation.allLocation);
  useEffect(() => {
    dispatch(getLocationList());
  }, []);
  const closeNav = () => {
    if(window.scrollY == 0){
      setBg(true)
    }
    if (window.scrollY >= 100) {
      setOpen(false)
      setBg(false)
    } 
  };
  window.addEventListener("scroll", closeNav);

  const renderOption = () => { 
    console.log(allLocation)
   return allLocation.map((item,index) => { 
    return <Option key={index} value={item.id}>{item.tenViTri}</Option>
     })
   }
  return (
    <div
      style={{ boxShadow: `${open ? '' : 'rgba(0, 0, 0, 0.45) 0px 20px 20px -20px'}` }}
      className={`${bg ? 'bg-transparent':'bg-white'} fixed top-0 z-40 w-full transition duration-300`}
    >
      <nav className={`${bg ?"py-5" : "py-3"} transition-all duration-500 relative px-10 flex items-center lg:justify-between md:justify-between sm:justify-center mb:justify-center`}>
        {/* LEFT */}
        <div className="logo lg:block  md:hidden sm:hidden mb:hidden animate__animated animate__fadeInLeft">
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
            <div className={`  font-medium px-2 border-r-2`}>
              <h1 className={`${bg ? 'text-white':'text-black'}`}>Địa Điểm Bất kỳ</h1>
            </div>
            <div className="font-medium px-2 border-r-2">
              <h1 className={`${bg ? 'text-white':'text-black'}`}>Tuần Bất Kỳ</h1>
            </div>
            <div className="font-medium px-2 ">
              <h1 className={`${bg ? 'text-white':'text-black'}`}>Thêm Khách</h1>
            </div>
            <div className="p-2 bg-[#FF385C] rounded-3xl">
              <FaSearch className="text-white" />
            </div>
          </div>
          <div
            style={{ boxShadow: 'rgb(0 0 0 / 9%) 0px 4px 2px' }}
            className={`${bg ? 'bg-transparent top-[80px]':'bg-white top-[70px]'} absolute left-0  transition-all duration-500  w-full ${
              open ? 'h-[80px]' : 'overflow-hidden h-0'
            }`}
          >
           
            <div className="flex items-center justify-center  h-full">
              <div className="flex items-center border-[1px] rounded-full">
                <div className="px-5 py-3 hover:bg-gray-200 transition duration-300 rounded-full h-full flex flex-wrap justify-center items-center">
                  <label
                    className={`${bg ? 'text-white':'text-black'} block text-sm font-medium text-black mr-3`}
                  >
                    Địa điểm
                  </label>
                  <Select
                    style={{
                      width: 160,
                    }}
                    showSearch
                    placeholder=""
                    optionFilterProp="children"
                    className=""
                    onChange={onChange}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                      option.children.toLowerCase().includes(input.toLowerCase())
                    }
                  >
                    {renderOption()}
                  </Select>
                </div>
                <div className='lg:block  md:hidden sm:hidden mb:hidden px-5 py-3 hover:bg-gray-200 transition duration-300 rounded-full h-full flex flex-wrap justify-center items-center'>
                <Space direction="vertical" size={12}>
                  <RangePicker />
                </Space>
                </div>
                
                <div className='px-5 py-3 hover:bg-gray-200 transition duration-300 rounded-full h-full flex flex-wrap justify-center items-center'>
                    <button className="bg-[#FF385C] hover:bg-red-500 transition duration-300 px-5 py-2 rounded font-bold text-white">
                                Tìm kiếm
                    </button>
                </div>
              </div>
            </div>
          </div>
        </>
        {/* END MIDDLE */}

        {/* RIGHT */}
        <UserNav bg={bg} />
        {/* END RIGHT */}
      </nav>
    </div>
  );
}
