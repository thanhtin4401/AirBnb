import React from 'react';

function ReserveFoodterDetail() {
  return (
    <div className="w-full mb:block sm:block md:hidden bg-white bottom-0 py-[12px] border-t-[1px] fixed z-40">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="font-[500] text-[1rem] mx-1">42.000</p>
              <span className="text-[0.6rem] font-[300]">night</span>
            </div>
            <p className="underline text-[1rem] font-[300] ">Oct 21-26</p>
          </div>
          <button className="py-[6] px-[24px] bg-[#FF385C] text-white rounded-lg">Reserce</button>
        </div>
      </div>
    </div>
  );
}

export default ReserveFoodterDetail;
