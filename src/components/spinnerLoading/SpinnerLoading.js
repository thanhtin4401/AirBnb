import React from 'react';
import { useSelector } from 'react-redux';
import { BounceLoader, HashLoader } from 'react-spinners';

function SpinnerLoading() {
  const isLoading = useSelector((state) => state.auth.isLoading);
  return (
    <>
      {isLoading ? (
        <div
          style={{ backgroundColor: 'rgba(0, 0, 0,0.9)', zIndex: '99' }}
          className="h-screen w-screen fixed top-0 left-0 flex justify-center items-center"
        >
          <HashLoader color="#ec4c5f" size={70} />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default SpinnerLoading;
