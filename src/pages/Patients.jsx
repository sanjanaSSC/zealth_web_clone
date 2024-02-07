import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/hero'
import symptoms from '../img/medical-prescription.png'
import monitor from '../img/health-monitoring.png'
import medicine from '../img/drugs.png'
import reports from '../img/health-check.png'
import nutrition from '../img/nutritional-plan.png'
import patient_img from '../img/patient_img.jpg'
import Footerpage from '../components/Footerpage.jsx'

export default function Patients() {
  return (
    <div>
        <Navbar/>
        <Hero image={patient_img} head1="Beat Cancer at " head2="Home" para1="Getting diagnosed with cancer is scary. Along with adjusting to your new life there is a lot to manage starting from diagnosis, treatment, appointments, tests, symptoms, medications, to nutrition." para2="Zealth’s mission is to put you back in control of your health. Our thoughtfully designed technology, CareShare, helps you stay on top of every aspect of your cancer journey."/>
      <div className='flex pl-[48%] text-4xl font-bold text-blue-900 py-24 bg-gray-100'>
        <img src={symptoms} alt="" className='px-6'/>
        <h1>Symptom Management</h1>
      </div>
      <div className='flex pl-28 text-4xl font-bold text-blue-900 py-24'>
        <h1>Real time health monitoring</h1>
        <img src={monitor} alt="" className='px-6'/>
      </div>
      <div className='flex pl-[48%] text-4xl font-bold text-blue-900 py-24 bg-blue-100'>
        <img src={medicine} alt="" className='px-6'/>
        <h1>Personalised medication</h1>
      </div>
      <div className='flex pl-28 text-4xl font-bold text-blue-900 py-24 bg-blue-50'>
        <h1>Understand your test reports</h1>
        <img src={reports} alt="" className='px-6'/>
      </div>
      <div className='flex pl-[48%] text-4xl font-bold text-blue-900 py-24 bg-gray-50'>
        <img src={nutrition} alt="" className='px-6'/>
        <h1>Personalised nutrition</h1>
      </div>
      <div className='items-center flex flex-col mt-14'>
        <h2 className='text-blue-900 pb-4 font-semibold text-3xl'>Sign up now for exclusive excess</h2>
        <input type="text" name="" id="" placeholder='Name' className='border border-blue-800 m-1 w-1/2 h-10 rounded-sm pl-2'/>
        <input type="email" name="" id="" placeholder='Email' className='border border-blue-800 m-1 w-1/2 h-10 rounded-sm pl-2'/>
        <input type="text" name="" id="" placeholder='Phone Number' className='border border-blue-800 m-1 w-1/2 h-10 rounded-sm pl-2'/>
        <button className='bg-indigo-900 text-white px-5 rounded-sm py-1 text-sm ml-[44%] mb-20'>Send</button>
      </div>
      <Footerpage/>
    </div>
  )
}
