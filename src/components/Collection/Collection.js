import React from 'react'

export default function Collection() {
    
  return (
    <div className='flex gap-5 overflow-x-auto'>
        <div className='relative lg:w-[680px] md:w-full sm:w-full mb:w-full h-[370px]  animate__animated animate__fadeInLeft'>
            <img className='absolute rounded-xl object-cover w-full h-full' src="https://s3-alpha-sig.figma.com/img/0e59/8405/318809c10a03cce9c4f31a29d0f6e4a8?Expires=1666569600&Signature=E9f9odnMDbiAJSQeQ2an-Q~YsbZwPnF1ssD4PDGOMjY4AlGee7D3gk-N8leGeW3l8GvHAE-oawfOg5VDx7QR2e6vb9lJ7KxERTQXNwaNEufwSibrAHJBGWmpI~0acY0QVsBVZlhl7CBo6TGYuabA3-zxF~f2DaqQG7W24OnAwQNLQKmISg6tDYGs8Bs1m9gBcI3o1j6MMajv3d6wwiAnabbXXWbDG-Jpna5rw9h~z0QbtjkrY-LRo1RD-WQB3BOtN3U0BX3Sc-ZYQoqjBY9HyORZmDpTezi6P0JM335HbMvXlTmbs7-s~V58xT444yesfLmGMRNskLTTYn8LiSm-Sw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" />
            <div className='absolute top-5 left-10 '>
                <h1 className='  font-medium text-white '>Collection</h1>
                <h1 className=' font-bold text-white text-2xl w-52'>Connect with Olympians & Paralympians</h1>
            </div>
            <div className='absolute bottom-10 left-10'>
                <button className='py-2 px-5 bg-white font-medium rounded'>Show All</button>
            </div>
        </div>
        <div className='w-[680px] h-[370px] relative md:hidden sm:hidden mb:hidden lg:block animate__animated animate__fadeInRight'>
            <img className='absolute rounded-xl object-cover w-full h-full' src="https://s3-alpha-sig.figma.com/img/0e59/8405/318809c10a03cce9c4f31a29d0f6e4a8?Expires=1666569600&Signature=E9f9odnMDbiAJSQeQ2an-Q~YsbZwPnF1ssD4PDGOMjY4AlGee7D3gk-N8leGeW3l8GvHAE-oawfOg5VDx7QR2e6vb9lJ7KxERTQXNwaNEufwSibrAHJBGWmpI~0acY0QVsBVZlhl7CBo6TGYuabA3-zxF~f2DaqQG7W24OnAwQNLQKmISg6tDYGs8Bs1m9gBcI3o1j6MMajv3d6wwiAnabbXXWbDG-Jpna5rw9h~z0QbtjkrY-LRo1RD-WQB3BOtN3U0BX3Sc-ZYQoqjBY9HyORZmDpTezi6P0JM335HbMvXlTmbs7-s~V58xT444yesfLmGMRNskLTTYn8LiSm-Sw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" />
            <div className='absolute top-5 left-10'>
                <h1 className='  font-medium text-white'>Collection</h1>
                <h1 className=' font-bold text-white text-2xl w-52'>Connect with Olympians & Paralympians</h1>
            </div>
            <div className='absolute bottom-10 left-10'>
                <button className='py-2 px-5 bg-white font-medium rounded'>Show All</button>
            </div>
        </div>
        
        
    </div>
  )
}
