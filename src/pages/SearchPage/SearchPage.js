import { message } from 'antd';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardItem from '../../components/CardItem/CardItem';
import { roomService } from '../../services/RoomService';
import { dataIMG } from '../../Data/Data';
export default function SearchPage() {
  //https://source.unsplash.com/random random ảnh
  let { id } = useParams();
  let [listRoom, setListRoom] = useState([]);
  useEffect(() => {
    roomService
      .getRoomLocation(id)
      .then((res) => {
        setListRoom(res.data?.content);
      })
      .catch((err) => {
        message.error(err);
      });
  }, [id]);
  const renderRoomLocation = () => {
    let room = listRoom?.map((item, index) => {
      let random = Math.floor(Math.random() * 10);
      random++;

      return { ...item, data: dataIMG[random] };
    });
    return room?.map((item, index) => {
      return (
        <div className="col-span-1" key={index}>
          <CardItem roomInfor={item} />
        </div>
      );
    });
  };
  return (
    <div className=" lg:mt-0 md:mt-10 sm:mt-10 mb:mt-10">
      <div className="container mx-auto grid lg:grid-cols-2 md:col-span-1 sm:col-span-1 mb:col-span-1 gap-5 ">
        <div className="col-span-1 mb-10 mt-20">
          <div className="mb-10">
            <h1 className="text-base font-medium">{listRoom?.length} Experiences</h1>
            <h1 className="font-bold text-2xl "> Experiences near you</h1>
            <div className="flex space-x-2 my-5 lg:block md:hidden sm:hidden mb:hidden">
              <button className="px-4 py-2 rounded-2xl bg-gray-200 font-medium border-[1px] border-[#999]">
                Free cancellation
              </button>
              <button className="px-4 py-2 rounded-2xl bg-gray-300 font-medium border-[1px] border-[#999]">
                Entire place
              </button>
              <button className="px-4 py-2 rounded-2xl bg-gray-200 font-medium border-[1px] border-[#999]">
                Price
              </button>
              <button className="px-4 py-2 rounded-2xl bg-gray-200 font-medium border-[1px] border-[#999]">
                Instant Book
              </button>
            </div>
            <h2 className="text-base lg:block md:block sm:hidden mb:hidden">
              Review COVID-19 travel restrictions before you book.{' '}
              <span className="underline">Learn more</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 mb:grid-cols-1 gap-5">
            {renderRoomLocation()}
          </div>
        </div>
        <div className="col-span-1 h-full lg:block md:hidden sm:hidden mb:hidden ">
          <div className="h-full">
            <div className="w-full h-full">
              <iframe
                className="gmap_iframe w-full h-full"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                // marginhidth="0"
                src="https://maps.google.com/maps?width=1001&amp;height=567&amp;hl=en&amp;q=ho chi minh&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
