import React from 'react'

export default function ClinicCard(props) {
  return (
    <div className='p-14 md:p-20 my-4 md:m-4 ml-0 flex flex-col items-center md:w-[490px] bg-white drop-shadow-xl z-0'>
      <img src={props.image} alt="" />
      <h1 className='pt-3 md:pt-0 font-semibold text-blue-900 text-center'>{props.name}</h1>
    </div>
  )
}
