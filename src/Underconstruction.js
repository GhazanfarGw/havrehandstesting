import React from 'react'
import Countdown from './Countdown/Index'

export default function Under() {
  return (
    <>
    <div className='max-h-screen mx-auto overflow-hidden bg-[#09121C]'>
      <div className='min-h-screen pt-5'>
        <img className='text-justify object-cover lg:max-w-4xl md:max-w-3xl justify-center mx-auto px-5' src='./under-construction.png' alt='images'/>
        <div className=''>
          <Countdown/>
        </div>
      </div>
    </div>
    </>
  )
}
