import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
export default function PopUpModal({ open, close }) {
  if (!open) return null;
  return (
    <div className="sticky top-0 left-0 w-full h-full z-50 bg-black/90">
      <div className="flex items-center justify-center">
        <iframe
          width="500"
          height="400"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
