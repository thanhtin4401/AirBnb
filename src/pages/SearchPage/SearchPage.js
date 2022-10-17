import { message } from 'antd';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardItem from '../../components/CardItem/CardItem';
import { roomService } from '../../services/RoomService';
import Map from '../../components/Map/Map';

export default function SearchPage() {
  let { id } = useParams();
  let [listRoom, setListRoom] = useState([]);
  useEffect(() => {
    roomService
      .getRoomLocation(id)
      .then((res) => {
        setListRoom(res.data.content);
      })
      .catch((err) => {
        message.error(err);
      });
  }, [id]);
  const renderRoomLocation = () => {
    return listRoom?.map((item, index) => {
      return (
        <div className="col-span-1" key={index}>
          <CardItem roomInfor={item} />
        </div>
      );
    });
  };
  return (
    <div className=" lg:mt-0 md:mt-10 sm:mt-10 mb:mt-10">
      <img
        className="w-full h-[350px] object-cover lg:block md:hidden sm:hidden mb:hidden"
        src="https://res.cloudinary.com/dvzingci9/image/upload/v1665325149/airBnB/imgheader/unsplash_dBOZ7XL4b_E_lhjffh.png"
        alt=""
      />
      <div className="container mx-auto grid lg:grid-cols-2 md:col-span-1 sm:col-span-1 mb:col-span-1 gap-5 mb-10">
        <div className="col-span-1">
          <h1 className="font-bold text-2xl my-10">Experiences near you</h1>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 mb:grid-cols-1 gap-5">
            {renderRoomLocation()}
          </div>
        </div>
        <div className="col-span-1 h-full ">
          <div className="my-10 h-full">
            <div className="w-full h-full">
              <iframe
                className="gmap_iframe w-full h-full"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=1001&amp;height=567&amp;hl=en&amp;q=ho chi minh&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
