import { Button } from 'antd';
import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../CardItemHeader.scss';
import { Component } from 'react';
import { useTranslation } from 'react-i18next';
import PopUpModal3 from '../PopUpModuleMultiple/PopUpModal3';

function CardItemHeader3(props) {
  const { t } = useTranslation();
  const [openTraiLer, setOpenTrailer] = useState(false);
  const handleClickOpen = () => {
    setOpenTrailer(!openTraiLer);
  };
  const closeTrailer = () => {
    setOpenTrailer(false);
  };
  const [heartColor, setheartColor] = useState(false);
  const handleHeartColor = () => {
    setheartColor(true);
  };
  return (
    <div className=" bg-white rounded-[1rem] mb-[1.5rem] p-4 ">
      <div className="">
        <img
          src={props.src}
          alt=""
          className="rounded-[1rem] w-full max-h-[7rem] object-cover max-w-full"
        ></img>
      </div>

      <div className="">
        <div className="w-full flex justify-between mt-2">
          <h1 className=" text-[1.2rem] font-bold">{props.content.title}</h1>
          <svg
            onClick={handleHeartColor}
            style={{ fill: heartColor ? 'red' : 'none' }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="gray"
            className="w-6 h-6 bg-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </div>
        <div className="flex items-center mt-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            className="w-5 h-5 text-black"
            k
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="red"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          <span className="text-[14px] font-400 text-left font-500">
            <span className="text-black text-[0.8rem] font-bold">{props.content.heart}</span>{' '}
            <span className="font-[400] text-[0.8rem]">{props.content.text}</span>
          </span>
        </div>
        <div className="w-full text-left">
          <button
            className="text-left rounded-[0.2rem] underline text-black  py-[6px]"
            onClick={handleClickOpen}
          >
            {t('Find out More')}
          </button>
        </div>

        <PopUpModal3
          open={openTraiLer}
          close={() => {
            setOpenTrailer(false);
          }}
        />
      </div>
    </div>
  );
}

export default CardItemHeader3;
