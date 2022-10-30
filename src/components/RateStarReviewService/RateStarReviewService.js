import React, { useEffect, useState } from 'react';

function RateStarReviewService(props) {
  const calRatestar = (rate) => {
    return (rate / 5) * 100;
  };
  const [rate, setrate] = useState(props.rate);

  return (
    <div className="flex justify-between">
      <span className="text-[1rem]">{props.service}</span>
      <div className="flex w-2/4 items-center pl-[1rem]">
        <div className="w-4/5 h-[6px] rounded-[1rem] border bg-[#c3c3c3] relative">
          <div className={`absolute bg-black w-[60%] h-[4px] rounded-[1rem]`}></div>
        </div>
        <span className="ml-2 text-[0.8rem]">{props.rate}</span>
      </div>
    </div>
  );
}

export default RateStarReviewService;
