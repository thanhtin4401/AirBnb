import React, { useState } from 'react'
import { Modal,notification  } from 'antd';
export default function Collection() {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const openModal = () => {
        setIsOpenModal(true)
      };
      const handleOk = () => { 
        setIsOpenModal(false);

      }
      const handleCancel = () => {
        setIsOpenModal(false);
      };
  return (
    <>
     <Modal 
      className='modalUploadImg'
      open={isOpenModal}
      onOk={handleOk}
      onCancel={handleCancel}
      >
        <h1 className='text-base font-bold mb-5'>Rất tiếc, hãy quay lại sau để trải nghiệm nhé?</h1>
      </Modal>
    <div className='flex gap-5 overflow-x-auto'>
        <div className='relative lg:w-[680px] md:w-full sm:w-full mb:w-full h-[370px]  animate__animated animate__fadeInLeft'>
            <img className='absolute rounded-xl object-cover w-full h-full' src="https://s3-alpha-sig.figma.com/img/0e59/8405/318809c10a03cce9c4f31a29d0f6e4a8?Expires=1667779200&Signature=bpLvVq9wys9V5Rgahk-Bgrkxt3~hU0L3Da7RprsUISOVyZ7qgtRjqTdHrtAfuIth4Ne6JpQRLRuqFxkkPpxAOvFZXPMz-ptoCsR9yur9wl7RTTQcEN0GHwTF3LcBytjhxIGsTLwZPHD4O7SMSGnE07Hku18RqKkYKKTe~WDJ5NtkAm3Zr4Q~ZMZpVIZbxvwl8--YGKpqGnBiLGbanQCqJTBnFinwR7K~TvRRU3kKknF-if7Z1IYo47wx-K~NPX8OUxJ5bKgcN1k4DiRQVt6neNeTDWlcfG5kRxgYq3tMvtYu45UdnHJXvnI8GOZPFNeAfaH846NrTys1rnDuVNKm9w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" />
            <div className='absolute top-5 left-10 '>
                <h1 className='  font-medium text-white '>Collection</h1>
                <h1 className=' font-bold text-white text-2xl w-52'>Connect with Olympians & Paralympians</h1>
            </div>
            <div className='absolute bottom-10 left-10'>
                <button onClick={openModal} className='py-2 px-5 bg-white font-medium rounded'>Show All</button>
            </div>
        </div>
        <div className='w-[680px] h-[370px] relative md:hidden sm:hidden mb:hidden lg:block animate__animated animate__fadeInRight'>
            <img className='absolute rounded-xl object-cover w-full h-full' src="https://s3-alpha-sig.figma.com/img/0e59/8405/318809c10a03cce9c4f31a29d0f6e4a8?Expires=1667779200&Signature=bpLvVq9wys9V5Rgahk-Bgrkxt3~hU0L3Da7RprsUISOVyZ7qgtRjqTdHrtAfuIth4Ne6JpQRLRuqFxkkPpxAOvFZXPMz-ptoCsR9yur9wl7RTTQcEN0GHwTF3LcBytjhxIGsTLwZPHD4O7SMSGnE07Hku18RqKkYKKTe~WDJ5NtkAm3Zr4Q~ZMZpVIZbxvwl8--YGKpqGnBiLGbanQCqJTBnFinwR7K~TvRRU3kKknF-if7Z1IYo47wx-K~NPX8OUxJ5bKgcN1k4DiRQVt6neNeTDWlcfG5kRxgYq3tMvtYu45UdnHJXvnI8GOZPFNeAfaH846NrTys1rnDuVNKm9w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" />
            <div className='absolute top-5 left-10'>
                <h1 className='  font-medium text-white'>Collection</h1>
                <h1 className=' font-bold text-white text-2xl w-52'>Connect with Olympians & Paralympians</h1>
            </div>
            <div className='absolute bottom-10 left-10'>
                <button onClick={openModal} className='py-2 px-5 bg-white font-medium rounded'>Show All</button>
            </div>
        </div>
        
        
    </div>
     </>
  )
}
