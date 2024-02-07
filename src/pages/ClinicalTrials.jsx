import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/hero'
import { Link } from 'react-router-dom'
import clinic_img from '../img/clinic_img.jpg'
import Footerpage from '../components/Footerpage'

export default function ClinicalTrials() {
  return (
    <div>
      <Navbar/>
      <Hero image={clinic_img} head1="Zealth helps pharma" head2="companies and CROs" head3="save time and money" head4="through its virtual" head5="clinical trial platform"/>
      <div className='pl-28 mb-20'>
      <ul className='font-semibold leading-9 mt-20'>
        <li>Streamline your clinical trials with more than fast, clean data.</li>
        <li>ePROs/COA</li>
        <li>Real world data</li>
        <li>Better patient engagement and retention</li>
        <li>Faster clinical trial recruitment</li>
        <li>Hassle free site management</li>
      </ul>
      <Link><button className='bg-indigo-900 text-white py-1 px-5 rounded-sm m-4 ml-0'>Contact Us To Know More</button></Link>
      </div>   
      <Footerpage/> 
    </div>
  )
}
