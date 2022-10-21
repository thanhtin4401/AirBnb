import React from 'react';
import './Comment.scss';
function Comment() {
  return (
    <div className="w-full">
      <div className="flex w-2/4 items-center justify-start mb-2">
        <img
          src="https://ecommerce-europe.eu/wp-content/uploads/2016/06/no-pic-ava.jpg"
          alt=""
          className="mb:w-[32px] mb:h-[32px] sm:w-[32px] sm:h-[32px] md:w-[2.2rem] md:h-[2.2rem] rounded-[50%] mr-2"
        />
        <div className="text-left">
          <p className="font-[600] text-[1rem]">Name</p>
          <p className="font-[400] text-[0.8rem] text-[#717171]">September 2022</p>
        </div>
      </div>
      <div className="">
        <p className="font-[300] text-left text-[0.8rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque accusantium quibusdam
          maiores laudantium delectus, labore qui expedita saepe sed ducimus?
        </p>
        <button className="underline flex items-center font-[600] text-[0.8rem] mt-2">
          Show more{' '}
        </button>
      </div>
    </div>
  );
}

export default Comment;
