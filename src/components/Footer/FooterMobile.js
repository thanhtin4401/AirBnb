import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { localStorageService } from '../../services/localStorageService';
import './FooterSticky';
import { useTranslation } from 'react-i18next';
function FooterMobile() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isUser, setisUser] = useState();
  const [user, setuser] = useState(localStorageService.get('USER'));
  useEffect(() => {
    if (user) {
      setisUser(user);
    }
  }, []);
  useEffect(() => {
    setisUser(user);
  }, [user]);
  return (
    <div className="footer-sticky w-full mb:block sm:block lg:hidden">
      <div className="bg-white border w-full grid grid-cols-5 ">
        <button
          onClick={() => {
            navigate('/');
          }}
          className=" flex flex-col justify-center items-center opacity-60 py-3 focus:opacity-100 focus:font-bold focus:text-[red]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.8"
            stroke="currentColor"
            className="w-[24px] h-[24px]  font-bold"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <p className="text-[12px] mt-2">{t('Explorers')}</p>
        </button>

        <button
          onClick={() => {
            navigate('/wishlist');
          }}
          className=" flex flex-col justify-center items-center opacity-60 py-3 focus:opacity-100 focus:font-bold focus:text-[red]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.8"
            stroke="currentColor"
            className="w-[24px] h-[24px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          <p className="text-[12px] mt-2">{t('Wishlists')}</p>
        </button>
        <button
          onClick={() => {
            isUser ? navigate('/Trip') : navigate('/TripMobile');
          }}
          className=" flex flex-col justify-center items-center opacity-60 py-3 focus:opacity-100 focus:font-bold focus:text-[red]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-[24px] h-[24px] "
            viewBox="0 0 35 35"
          >
            <title />
            <g id="Airbnb">
              <path d="M30.83,25.06c-.12-.29-.24-.6-.36-.87L29.92,23l0,0c-1.66-3.6-3.44-7.25-5.31-10.86l-.07-.14c-.2-.36-.39-.74-.58-1.13a6.67,6.67,0,0,0-.87-1.32A3.86,3.86,0,0,0,20,8,4,4,0,0,0,17,9.44a8.33,8.33,0,0,0-.87,1.32c-.19.39-.38.77-.57,1.13l-.07.15c-1.85,3.6-3.66,7.25-5.31,10.85l0,.05-.55,1.23c-.12.26-.24.55-.36.86a5.44,5.44,0,0,0-.29,2.6,5.13,5.13,0,0,0,3.12,4A5.05,5.05,0,0,0,14,32a4.32,4.32,0,0,0,.62-.05A6.37,6.37,0,0,0,17,31.14a12.58,12.58,0,0,0,3-2.5,12.75,12.75,0,0,0,3,2.5,6.37,6.37,0,0,0,2.41.81A4.32,4.32,0,0,0,26,32a5,5,0,0,0,1.95-.38,5.1,5.1,0,0,0,3.12-4A4.49,4.49,0,0,0,30.83,25.06ZM20,26.31a11.88,11.88,0,0,1-2.43-4.47,3.94,3.94,0,0,1-.07-1.47,2.3,2.3,0,0,1,.39-1A2.52,2.52,0,0,1,20,18.31a2.45,2.45,0,0,1,2.11,1.05,2.3,2.3,0,0,1,.39,1,3.92,3.92,0,0,1-.07,1.47A12.26,12.26,0,0,1,20,26.31Zm9.59,1.13a3.58,3.58,0,0,1-2.19,2.81,3.68,3.68,0,0,1-1.83.24,4.83,4.83,0,0,1-1.82-.63A11,11,0,0,1,21,27.53a13.56,13.56,0,0,0,2.91-5.31,6.28,6.28,0,0,0,.12-2,4,4,0,0,0-.65-1.63A4.07,4.07,0,0,0,20,16.84a4.12,4.12,0,0,0-3.39,1.71A4,4,0,0,0,16,20.18a5.13,5.13,0,0,0,.12,2A14,14,0,0,0,19,27.56a10.72,10.72,0,0,1-2.74,2.33,4.64,4.64,0,0,1-1.82.62,3.83,3.83,0,0,1-1.83-.24,3.57,3.57,0,0,1-2.19-2.81,4,4,0,0,1,.22-1.87,8.27,8.27,0,0,1,.31-.77c.17-.39.36-.8.56-1.2l0-.05C13.18,20,15,16.34,16.8,12.78l.08-.14c.19-.36.38-.75.57-1.11a5.81,5.81,0,0,1,.68-1.06,2.53,2.53,0,0,1,3.84,0,5.76,5.76,0,0,1,.67,1.06l.58,1.11.07.14c1.83,3.58,3.6,7.23,5.26,10.81v0c.19.38.36.81.55,1.2s.24.53.32.77A4.16,4.16,0,0,1,29.59,27.44Z" />
            </g>
          </svg>

          <p className="text-[12px] mt-2">{t('Trips')}</p>
        </button>

        <button
          onClick={() => {
            navigate('/message');
          }}
          className=" flex flex-col justify-center items-center opacity-60 py-3 focus:opacity-100 focus:font-bold focus:text-[red]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.8"
            stroke="currentColor"
            className="w-[24px] h-[24px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
            />
          </svg>
          <p className="text-[12px] mt-2">{t('Inbox')}</p>
        </button>

        <button
          onClick={() => {
            navigate('/profile');
          }}
          className=" flex flex-col justify-center items-center opacity-60 py-3 focus:opacity-100 focus:font-bold focus:text-[red]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.8"
            stroke="currentColor"
            className="w-[24px] h-[24px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <p className="text-[12px] mt-2">{t('Profile')}</p>
        </button>
      </div>
    </div>
  );
}

export default FooterMobile;
