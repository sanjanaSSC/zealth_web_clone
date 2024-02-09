import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom'

export default function Card(props) {
  const handleNavigation = () => {
    // Reset scroll position to the top of the page
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <div className='flex flex-col justify-center col-span-1 text-center p-4 border-1  bg-white m-2 h-[360px] items-center hover:scale-105 transition duration-500 ease-in-out shadow-sm hover:shadow-xxl '>
      <img src={props.image} alt=""/>
      <h4 className='text-blue-800 font-semibold text-xl my-1'>{props.name}</h4>
      <p className='text-sm'>{props.text}</p>
      <Link to={props.path} onClick={handleNavigation}><button className='bg-indigo-900 py-1 px-4 text-white rounded-sm my-4'>More</button></Link>
    </div>
    </div>
  )
}
