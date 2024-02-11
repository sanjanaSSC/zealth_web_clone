import React, { useRef } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import insurance from '../img/insurance_img.jpg'
import fam_insur from '../img/fam_insur.jpg'
import { Link } from 'react-router-dom'
import Footerpage from '../components/Footerpage'

export default function Insurance() {
  const firstref = useRef(null)

  const handleNavigation = () => {
    // Reset scroll position to the top of the page
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <Navbar/>
      <Hero image={insurance} head1="Gear up to tackle the rising cost of cancer care"/>
      <div id="section" ref={firstref} ></div>
      <div className='flex flex-col-reverse md:flex-row  md:px-28 mt-20 '>
        <div className='items-center md:items-start md:text-left text-center px-4 md:w-1/2 md:py-20 pb-10 flex flex-col'>
          <p className='text-sm font-semibold leading-6'>Regular use of careshare by patients and doctors ensures timely interventions, reduced emergency visits and saves on treatment costs. It allows you to empower your members and reduce claims.</p>
          <Link to="/contact" onClick={handleNavigation}><button className='bg-indigo-900 text-white py-1 px-5 rounded-sm mt-10'>Contact Us To Know More</button></Link>
        </div>
        <div className='md:w-1/2'>
          <img src={fam_insur} alt="" />
        </div>
      </div>
      <Footerpage/>
    </div>
  )
}
