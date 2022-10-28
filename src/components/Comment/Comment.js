import React from 'react';
import './Comment.scss';
import { Rate } from 'antd';
function Comment(props) {
  return (
    <div className="w-full">
      <div className="flex w-2/4 items-center justify-start mb-2">
        <img
          src={`${
            props.data.avatar
              ? props.data.avatar
              : 'https://ecommerce-europe.eu/wp-content/uploads/2016/06/no-pic-ava.jpg'
          }`}
          alt=""
          className="mb:w-[32px] mb:h-[32px] sm:w-[32px] sm:h-[32px] md:w-[2.2rem] md:h-[2.2rem] object-cover rounded-[50%] mr-2"
        />
        <div className="text-left">
          <p className="font-[600] text-[1rem]">{props.data.tenNguoiBinhLuan}</p>
          <p className="font-[400] text-[0.8rem] text-[#717171]">{props.data.ngayBinhLuan}</p>
        </div>
      </div>
      <div className="w-full">
        <Rate
          allowHalf
          disabled
          defaultValue={props.data.saoBinhLuan}
          onChange={(count) => {
            setRateCount(count);
          }}
        />
      </div>
      <div className="">
        <p className="font-[300] text-left text-[0.8rem]">{props.data.noiDung}</p>
        <button className="underline flex items-center font-[600] text-[0.8rem] mt-2">
          Show more{' '}
        </button>
      </div>
    </div>
  );
}

export default Comment;
