import React, { useEffect, useState } from 'react'
import blue_down from '../img/blue-down.png'
import white_down from '../img/white-down.png'
import { Link, useActionData, useLocation } from 'react-router-dom'

export default function Hero(props) {
  
    const location = useLocation();

  useEffect(() => {
    console.log("happening")
    // Check if the URL contains the target section hash
    if (location.hash) {
      // Get the target element using the ID from the hash
      const targetElement = document.querySelector(location.hash);

      if (targetElement) {
        // Scroll to the target element
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
    
  
  return (
    <div>
      <div className='px-4 md:pl-28 pt-32 md:pt-40 pb-20 relative h-[95vh]'  style={{ backgroundImage: `url(${props.image})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
      <div className='absolute inset-0 bg-white bg-opacity-45'></div>
        <h1 className=' text-3xl md:text-5xl font-bold text-black  relative z-10 md:w-[55vw] md:leading-normal'>{props.head1}</h1>
        <p className='font-semibold pt-4'>{props.para1}</p>
        <p className='font-semibold'>{props.para2}</p>
        <Link to='#section'>
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white hover:bg-blue-500 transition-colors duration-300 mx-auto absolute bottom-4 left-[50vw]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-blue-500 transform rotate-0 transition-transform duration-300 hover:rotate-0"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
          <path
            fillRule="evenodd"
            d="M3.293 6.293a1 1 0 0 1 1.414 0L10 11.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div></Link>
      </div>
    </div>
  )
}
