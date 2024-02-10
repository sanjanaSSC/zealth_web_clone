import React, { useRef } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/hero'
import { Link } from 'react-router-dom'
import clinic_img from '../img/clinic_img.jpg'
import tick from '../img/tick.png'
import Footerpage from '../components/Footerpage'

export default function ClinicalTrials() {
  const firstref = useRef(null)

  const handleNavigation = () => {
    // Reset scroll position to the top of the page
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <Navbar/>
      <Hero image={clinic_img} head1="Zealth helps pharma" head2="companies and CROs" head3="save time and money" head4="through its virtual" head5="clinical trial platform"/>
      <div id="section" ref={firstref} className='flex flex-col px-4 md:text-start items-center md:items-start md:pl-28 mb-20'>
      <ul className='font-semibold leading-9 mt-20'>
        <div className='flex'>
          <img src={tick} alt="" className='w-[20px] h-[20px] mt-2 mr-1'/>
          <li>Streamline your clinical trials with more than fast, clean data.</li>
        </div>
        <div className='flex'>
          <img src={tick} alt="" className='w-[20px] h-[20px] mt-2 mr-1'/>
          <li>ePROs/COA</li>
        </div><div className='flex'>
          <img src={tick} alt="" className='w-[20px] h-[20px] mt-2 mr-1'/>
          <li>Real world data</li>
        </div><div className='flex'>
          <img src={tick} alt="" className='w-[20px] h-[20px] mt-2 mr-1'/>
          <li>Better patient engagement and retention</li>
        </div><div className='flex'>
          <img src={tick} alt="" className='w-[20px] h-[20px] mt-2 mr-1'/>
          <li>Faster clinical trial recruitment</li>
        </div><div className='flex'>
          <img src={tick} alt="" className='w-[20px] h-[20px] mt-2 mr-1'/>
          <li>Hassle free site management</li>
        </div>
      </ul>
      <Link to="/contact" onClick={handleNavigation}><button className='bg-indigo-900 text-white py-1 px-5 rounded-sm my-5 md:m-4 ml-0 '>Contact Us To Know More</button></Link>
      </div>   
      <Footerpage/> 
    </div>
  )
}
