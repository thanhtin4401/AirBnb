import React from 'react';
import './SkeletonItem.scss';
function SkeletonDetail() {
  return (
    <>
      <div className="skeleton-product bg-white hover:border-black  p-3 transition cursor-pointer">
        <div className="item__content ">
          <div className="flex h-8 justify-between w-full">
            <div className="skeleton h-8 skeleton-text mt-2 w-3/4 rounded-[0.3rem]"></div>
            <div className="skeleton h-8 skeleton-text mt-2 w-[2rem] rounded-[0.3rem]"></div>
          </div>

          <div className="w-full h-[18rem] rounded-[0.5rem] mt-2 object-cover object-top skeleton"></div>
          {/* <div className="skeleton skeleton-text mt-2 w-[4rem] rounded-[0.3rem]"></div>
          <div className="flex flex-wrap items-center rounded-[0.3rem]"></div>` */}
          <div className="w-full flex">
            <div className="mb:w-full sm:w-full md:w-3/5 lg:w-3/5">
              <div className="w-full mb:py-[1rem] sm:py-[1rem] md:py-[2.2rem] border-b-[1px] border-[#dadada]">
                <div className="skeleton skeleton-text mt-2 w-[8rem] rounded-[0.3rem]"></div>
                <div className="skeleton skeleton-text mt-2 w-[4rem] rounded-[0.3rem]"></div>
              </div>
              <div className=" py-[2.2rem] border-b-[1px] border-[#dadada]">
                <div className="flex items-start mb-2">
                  <div className="skeleton skeleton-text mt-2 w-[2rem] rounded-[0.3rem]"></div>

                  <div className="ml-2">
                    <div className="skeleton skeleton-text mt-2 w-[8rem] rounded-[0.3rem]"></div>
                    <div className="skeleton skeleton-text mt-2 w-[4rem] rounded-[0.3rem]"></div>
                  </div>
                </div>
                <div className="flex items-start ">
                  <div className="skeleton skeleton-text mt-2 w-[2rem] rounded-[0.3rem]"></div>

                  <div className="ml-2">
                    <div className="skeleton skeleton-text mt-2 w-[8rem] rounded-[0.3rem]"></div>
                    <div className="skeleton skeleton-text mt-2 w-[4rem] rounded-[0.3rem]"></div>
                  </div>
                </div>
              </div>
              {/* ================================== AIRCOVER =================================== */}
              <div className="aircover py-[2.2rem] border-b-[1px] border-[#dadada]">
                <div className="skeleton skeleton-text mt-2 w-full rounded-[0.3rem]"></div>
                <div className="skeleton skeleton-text mt-2 w-full rounded-[0.3rem]"></div>
                <div className="skeleton skeleton-text mt-2 w-full rounded-[0.3rem]"></div>
                <div className="skeleton skeleton-text mt-2 w-[4rem] rounded-[0.3rem]"></div>
                <div className="skeleton skeleton-text mt-2 w-[3rem] rounded-[0.3rem]"></div>
              </div>
              <div className="aircover py-[2.2rem] border-b-[1px] border-[#dadada]">
                <div className="skeleton skeleton-text mt-2 w-[4rem] rounded-[0.3rem]"></div>
                <div className="skeleton skeleton-text mt-2 w-[4rem] rounded-[0.3rem]"></div>
                <div className="skeleton skeleton-text mt-2 w-[4rem] rounded-[0.3rem]"></div>
                <div className="skeleton skeleton-text mt-2  w-2/4 rounded-[0.3rem]"></div>
              </div>
              {/* ================= Where you'll sleep ==================== */}
              <div className="w-full py-[2.2rem] border-b-[1px] border-[#dadada]">
                <div className="skeleton skeleton-text mt-2 w-[8rem] rounded-[0.3rem]"></div>
                <div className="skeleton skeleton-text mt-2 h-[8rem] w-[8rem] rounded-[0.3rem]"></div>
              </div>
              {/* ================= what this place offers ==================== */}
              <div className="w-full py-[2.2rem] border-b-[1px] border-[#dadada]">
                <div className="skeleton skeleton-text mt-2 w-full rounded-[0.3rem]"></div>
                <div className="grid grid-cols-2 w-3/4 gap-y-2 my-5 gap-x-16">
                  <div className="skeleton skeleton-text mt-2 w-[8rem] rounded-[0.3rem]"></div>
                  <div className="skeleton skeleton-text mt-2 w-[8rem] rounded-[0.3rem]"></div>
                  <div className="skeleton skeleton-text mt-2 w-[8rem] rounded-[0.3rem]"></div>
                  <div className="skeleton skeleton-text mt-2 w-[8rem] rounded-[0.3rem]"></div>
                  <div className="skeleton skeleton-text mt-2 w-[8rem] rounded-[0.3rem]"></div>
                  <div className="skeleton skeleton-text mt-2 w-[8rem] rounded-[0.3rem]"></div>
                  <div className="skeleton skeleton-text mt-2 w-[8rem] rounded-[0.3rem]"></div>
                </div>
                <div className="skeleton skeleton-text mt-2 h-[8rem] w-[8rem] rounded-[0.3rem]"></div>
              </div>
            </div>
            <div className="pl-[6rem] mb:hidden sm:hidden md:block w-2/5">
              <div className={`p-[1.5rem] card-total border rounded-[0.5rem] }`}>
                <div className="flex justify-between">
                  <div className="w-full h-[6rem] rounded-[0.5rem] mt-2 object-cover object-top skeleton"></div>
                  <div className="w-full h-[6rem] rounded-[0.5rem] mt-2 object-cover object-top skeleton"></div>
                </div>
                <div className="w-full h-[6rem] rounded-[0.5rem] mt-2 object-cover object-top skeleton"></div>
                <div className="w-full h-[1rem] rounded-[0.5rem] mt-2 object-cover object-top skeleton"></div>
                <div className="w-full h-[3rem] rounded-[0.5rem] mt-2 object-cover object-top skeleton"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkeletonDetail;
