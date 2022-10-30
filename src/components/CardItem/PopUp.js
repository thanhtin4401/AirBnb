import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

function PopUp(props) {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 bg-black/90">
      <div className="flex justify-end">
        <button className="mt-10 mr-16" onClick={close}>
          <AiOutlineClose className="font-bold text-4xl transition duration-300 text-red-600 hover:rotate-180" />
        </button>
      </div>
      <div className="flex items-center justify-center">
        <iframe style={{ width: '70%', height: '500px' }} className="">
          <i class="fas fa-h1">Hi</i>
        </iframe>
      </div>
    </div>
  );
}

export default PopUp;
