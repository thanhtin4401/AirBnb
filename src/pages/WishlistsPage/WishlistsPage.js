import React from 'react';
import { useNavigate } from 'react-router-dom';

function Wishlists() {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto h-screen pt-12">
      <h1 className="text-[1.8rem] mb-4 font-[600]">Wishlists</h1>
      <p className="text-[1rem] w-full pb-4 border-b-[1px] border-[gray] font-[400]">List</p>
      <div className="flex flex-col items-center justify-center mt-4 text-center">
        <h1 className="mb-2 font-[600] text-[1rem]">You have no wishlist</h1>
        <p className="font-[300] text-[1rem] opacity-70 mb-2">
          When you like a trip or experience <br /> messages from your host will show up here{' '}
        </p>
        <button
          onClick={() => {
            navigate('/');
          }}
          className="font-[400] text-[1rem] py-[8px] border-[1px] border-black rounded-lg px-[24px]"
        >
          Explore Airbnb
        </button>
      </div>
    </div>
  );
}

export default Wishlists;
