import React, { useState } from 'react';
import { MdOutlineSecurity } from 'react-icons/md';
import { AiOutlineCheck } from 'react-icons/ai';
import { BsPersonSquare } from 'react-icons/bs';
import { Input } from 'antd';
import "./ProfilePage.modul.scss"


export default function ProfilePage() {
  const [openInput,setOpenInput] = useState(false)
const [changeBtn,setChangeBtn] = useState(false)
  return (
    <div className="container mx-auto">
      <div className="mt-24 mb-10">
        <div className="grid grid-cols-12 mt-5 gap-10">
        {/* LEFT */}
          <div className="lg:col-span-3 md:col-span-12 sm:col-span-12 mb:col-span-12 border-[1px] border-[#666] rounded-xl">
            <div className="py-5 px-6">
              <div className="flex justify-center items-center flex-col">
                <img
                  className="w-[120px] h-[120px] object-cover rounded-[50%]"
                  src="https://airbnb.cybersoft.edu.vn/public/images/avatar/1665245190154_mountains-1.jpg"
                  alt=""
                />
                <h1 className="text-[#666] hover:text-black underline mt-2">Cập Nhật Ảnh</h1>
              </div>
              <div className="my-5">
                <h1 className="flex items-center font-bold text-lg">
                  {' '}
                  <MdOutlineSecurity className="mr-3 text-[#FF385C]" /> Xác Minh Danh Tính
                </h1>
                <h1 className="text-[#666] text-base">
                  Xác thực danh tính của bạn với huy hiệu xác minh danh tính.
                </h1>
              </div>
              <div className="mb-5 ">
                <button className="px-3 py-2 rounded-md font-bold border-[1px] border-[#666]">
                  Nhận Huy Hiệu
                </button>
              </div>
              <div>
                <h1 className="font-bold text-lg">Đã xác nhận</h1>
                <h1 className="flex items-center">
                  <AiOutlineCheck className="mr-3 " /> Địa chỉ email
                </h1>
              </div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="lg:col-span-9 md:col-span-12 sm:col-span-12 mb:col-span-12">
            <div className="py-5 lg:px-10 md:px-0 sm:px-0 mb:px-0">
              <div className="flex justify-between m-3">
                <h1 className="font-bold text-xl flex items-center">
                  <BsPersonSquare className="mr-3 text-[#FF385C]" />
                  Thông Tin
                </h1>
                <div>
                <button 
                onClick={() => { 
                  setChangeBtn(true)
                  setOpenInput(true)
                 }}
                className={`${changeBtn ? "hidden" :""} px-3 py-2 rounded-lg font-bold text-white bg-[#FF385C] mr-3`}>
                  Cập Nhật
                </button>
                <button
                onClick={() => { 
                  setChangeBtn(false)
                  setOpenInput(false)
                 }}
                className={`${changeBtn ? "" : "hidden"} px-3 py-2 rounded-lg font-bold text-white bg-[#FF385C]`}>
                  Lưu Thay Đổi
                </button>
                </div>
              </div>
             <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mb:grid-cols-1 '>
                <div className=" m-3 rounded-xl border-[1px] border-[#999] py-3 px-5">
                    <h1 className='text-gray-700 text-sm font-bold mb-1 '>Tên: Trần Đình Danh</h1>
                <div className={`${openInput ? "": "hidden"}`}>
                <Input  placeholder="Trần Đình Danh" />
                </div>
                </div>
                <div className=" m-3 rounded-xl border-[1px] border-[#999] py-3 px-5">
                    <h1 className='text-gray-700 text-sm font-bold mb-1 '>Giới Tính: Nam</h1>
                  <div className={`${openInput ? "": "hidden"}`}>
                        <Input className='' placeholder="Nam" />                    
                  </div>
                </div>
                <div className=" m-3 rounded-xl border-[1px] border-[#999] py-3 px-5">
                    <h1 className='text-gray-700 text-sm font-bold mb-1 '>Ngày Sinh: 22/09/2022</h1>
                  <div className={`${openInput ? "": "hidden"}`}>
                        <Input className='' placeholder="18/03/2001" />                    
                  </div>
                </div>
                <div className=" m-3 rounded-xl border-[1px] border-[#999] py-3 px-5">
                    <h1 className='text-gray-700 text-sm font-bold mb-1 '>Email: dinhdanh183@gmail.com</h1>
                  <div className={`${openInput ? "": "hidden"}`}>
                        <Input className='' placeholder="dinhdanh183@gmail" />                    
                  </div>
                </div>
                <div className=" m-3 rounded-xl border-[1px] border-[#999] py-3 px-5">
                    <h1 className='text-gray-700 text-sm font-bold mb-1 '>Điện Thoại: 123456789</h1>
                  <div className={`${openInput ? "": "hidden"}`}>
                        <Input className='' placeholder="123456789" />                    
                  </div>
                </div>
                <div className=" m-3 rounded-xl border-[1px] border-[#999] py-3 px-5">
                    <h1 className='text-gray-700 text-sm font-bold mb-1 '>Địa Chỉ: ............</h1>
                  <div className={`${openInput ? "": "hidden"}`}>
                        <Input className='' placeholder="Trần Đình Danh" />                    
                  </div>
                </div>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
