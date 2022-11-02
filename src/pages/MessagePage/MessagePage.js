import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
function MessagePage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="container mx-auto h-screen pt-[5rem]">
      <h1 className="text-[1.8rem] mb-4 font-[600]">{t('Inbox')}</h1>
      <p className="text-[1rem] w-full pb-4 border-b-[1px] border-[gray] font-[400]">
        {t('Messages')}
      </p>
      <div className="flex flex-col items-center justify-center mt-4 text-center">
        <h1 className="mb-2 font-[600] text-[1rem]">{t('You have no unread messages')}</h1>
        <p className="font-[300] text-[1rem] opacity-70 mb-2">
          {t('When you book a trip or experience')} <br />{' '}
          {t('messages from your host will show up here')}{' '}
        </p>
        <button
          onClick={() => {
            navigate('/');
          }}
          className="font-[400] text-[1rem] py-[8px] border-[1px] border-black rounded-lg px-[24px]"
        >
          {t('Explore Airbnb')}
        </button>
      </div>
    </div>
  );
}

export default MessagePage;
