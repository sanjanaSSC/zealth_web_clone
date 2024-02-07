import React from 'react'
import '../index.css'

export default function Card(props) {
  return (
    <div>
      <div className='flex flex-col justify-center col-span-1 text-center p-4 bg-white m-2 h-[360px] items-center'>
      <img src={props.image} alt=""/>
      <h4 className='text-blue-800 font-semibold text-xl my-1'>{props.name}</h4>
      <p className='text-sm'>{props.text}</p>
      <button className='bg-indigo-900 py-1 px-4 text-white rounded-sm my-4'>More</button>
    </div>
    </div>
  )
}
