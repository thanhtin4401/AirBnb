import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function InfoTripMobilePage() {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto h-screen pt-[5rem]">
      <h1 className="text-[1.8rem] mb-4 font-[600]">Infomation Trip</h1>
      <div className="flex flex-col items-center justify-center mt-4 text-center">
        <p className="items-center text-[1rem] w-full pb-4 border-b-[1px] border-[gray] font-[400]">
          You have no login
        </p>
        <p className="font-[300] text-[1rem] opacity-70 my-3">
          Please login
          <br /> to view your trip details{' '}
        </p>
        <button
          onClick={() => {
            navigate('/login');
          }}
          className="font-[400] text-[1rem] py-[8px] border-[1px] border-black rounded-lg px-[24px]"
        >
          Login Airbnb
        </button>
      </div>
    </div>
  );
}
