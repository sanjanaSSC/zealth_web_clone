import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/hero'
import insurance from '../img/insurance_img.jpg'
import fam_insur from '../img/fam_insur.jpg'
import { Link } from 'react-router-dom'
import Footerpage from '../components/Footerpage'

export default function Insurance() {
  return (
    <div>
      <Navbar/>
      <Hero image={insurance} head1="Gear up to tackle" head2="the rising cost of" head3="cancer care"/>
      <div className='flex pl-28 mt-10 pr-28'>
        <div className='w-1/2 py-20 flex flex-col'>
          <p className='text-sm font-semibold leading-6'>Regular use of careshare by patients and doctors ensures timely interventions, reduced emergency visits and saves on treatment costs. It allows you to empower your members and reduce claims.</p>
          <Link><button className='bg-indigo-900 text-white py-1 px-5 rounded-sm mt-10'>Contact Us To Know More</button></Link>
        </div>
        <div className='w-1/2'>
          <img src={fam_insur} alt="" />
        </div>
      </div>
      <Footerpage/>
    </div>
  )
}
