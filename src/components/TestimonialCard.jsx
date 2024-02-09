import React from 'react'

export default function TestimonialCard({text}) {
  return (
    <div className='border p-6 md:p-16 m-4 ml-0 md:h-[290px] md:w-[450px] bg-white rounded-md'>
      <p className='text-base'>{text}</p>
      <h6 className='text-sm mt-5'></h6>
    </div>
  )
}
