import { message } from 'antd';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardItem from '../../components/CardItem/CardItem';
import { roomService } from '../../services/RoomService';

export default function SearchPage() {
  let { id } = useParams();
  let [listRoom , setListRoom ] = useState([])
  useEffect(() => {
    roomService
      .getRoomLocation(id)
      .then((res) => {
        setListRoom(res.data.content)
      })
      .catch((err) => {
        message.error(err)
      });
  },[]);
  const renderRoomLocation = () => { 
    return listRoom?.map((item,index) => { 
      console.log(item)
      return <div className='col-span-1' key={index}>
        <CardItem roomInfor={item} />
      </div>
     })
   }
  return (
    <div className=" lg: md:mt-10 sm:mt-10 mb:mt-10">
      <img
        className="w-full h-[350px] object-cover lg:block md:hidden sm:hidden mb:hidden"
        src="https://res.cloudinary.com/dvzingci9/image/upload/v1665325149/airBnB/imgheader/unsplash_dBOZ7XL4b_E_lhjffh.png"
        alt=""
      />
      <div className="container mx-auto grid grid-cols-2 gap-5 mb-10">
        <div className="col-span-1">
          <h1 className="font-bold text-2xl my-10">Experiences near you</h1>
          <div className='grid grid-cols-2 gap-5'>
            {renderRoomLocation()}
          </div>
        </div>
        <div className="col-span-1">
          <div className='my-10'>
          a
          </div>
        </div>
      </div>
    </div>
  );
}
