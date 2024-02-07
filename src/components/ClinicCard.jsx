import React from 'react'

export default function ClinicCard(props) {
  return (
    <div className='p-20 m-4 ml-0 flex flex-col items-center w-[490px] bg-white drop-shadow-xl z-0'>
      <img src={props.image} alt="" />
      <h1>{props.name}</h1>
    </div>
  )
}
