import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
export default function PopUpModal2({ open, close }) {
  if (!open) return null;
  return (
    <div className="sticky top-0 left-0 w-full h-full z-50 bg-black/90">
      <div className="flex items-center justify-center">
        <iframe
          width="500"
          height="400"
          src="https://www.youtube.com/embed/gYy1RITRN9s"
          title="Beautiful Destinations in Rio de Janeiro, Brazil"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>{' '}
      </div>
    </div>
  );
}
