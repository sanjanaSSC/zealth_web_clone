import React from 'react'

export default function TestimonialCard(props) {
  return (
    <div className='border p-16 m-4 ml-0 h-[290px] w-[450px] bg-white rounded-md'>
      <p className='text-base'>{props.text}</p>
      <h6 className='text-sm mt-5'>{props.name}</h6>
    </div>
  )
}
