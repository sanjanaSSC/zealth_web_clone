import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/hero'
import symptoms from '../img/medical-prescription.png'
import monitor from '../img/health-monitoring.png'
import medicine from '../img/drugs.png'
import reports from '../img/health-check.png'
import nutrition from '../img/nutritional-plan.png'
import patient_img from '../img/patient_img.jpg'
import send from '../img/send.png'
import Footerpage from '../components/Footerpage.jsx'

export default function Patients() {
  return (
    <div>
        <Navbar/>
        <Hero image={patient_img} head1="Beat Cancer at " head2="Home" para1="Getting diagnosed with cancer is scary. Along with adjusting to your new life there is a lot to manage starting from diagnosis, treatment, appointments, tests, symptoms, medications, to nutrition." para2="Zealth’s mission is to put you back in control of your health. Our thoughtfully designed technology, CareShare, helps you stay on top of every aspect of your cancer journey."/>
      <div className='flex md:pl-[48%] flex-col md:flex-row text-3xl items-center text-center md:items-start md:text-4xl font-bold text-blue-900 py-24 bg-gray-100'>
        <img src={symptoms} alt="" className='px-6 w-[30%] md:w-[20%]'/>
        <h1>Symptom Management</h1>
      </div>
      <div className='flex md:pl-28 flex-col-reverse md:flex-row text-3xl md:text-4xl items-center text-center font-bold text-blue-900 py-24'>
        <h1>Real time health monitoring</h1>
        <img src={monitor} alt="" className='px-6 w-[30%] md:w-[10%]'/>
      </div>
      <div className='flex md:pl-[48%] flex-col md:flex-row text-3xl md:text-4xl items-center text-center font-bold text-blue-900 py-24 bg-blue-100'>
        <img src={medicine} alt="" className='px-6 w-[30%] md:w-[20%]'/>
        <h1>Personalised medication</h1>
      </div>
      <div className='flex md:pl-28 flex-col-reverse md:flex-row text-3xl md:text-4xl items-center text-center font-bold text-blue-900 py-24 bg-blue-50'>
        <h1>Understand your test reports</h1>
        <img src={reports} alt="" className='px-6 w-[30%] md:w-[10%]'/>
      </div>
      <div className='flex md:pl-[48%] flex-col md:flex-row text-3xl md:text-4xl items-center text-center font-bold text-blue-900 py-24 bg-gray-50'>
        <img src={nutrition} alt="" className='px-6 w-[30%] md:w-[20%]'/>
        <h1>Personalised nutrition</h1>
      </div>
      <div className='items-center flex flex-col mt-14 px-4 md:px-0'>
        <h2 className='text-blue-900 pb-4 font-semibold text-3xl text-center'>Sign up now for exclusive excess</h2>
        <input type="text" name="" id="" placeholder='Name' className='border border-blue-800 m-1 w-full md:w-1/2 h-10 rounded-md pl-2'/>
        <input type="email" name="" id="" placeholder='Email' className='border border-blue-800 m-1 w-full md:w-1/2 h-10 rounded-md pl-2'/>
        <input type="text" name="" id="" placeholder='Phone Number' className='border border-blue-800 m-1 w-full md:w-1/2 h-10 rounded-md pl-2'/>
        <div className='md:ml-[44%]'>
          <button className='bg-indigo-900 text-white px-8 md:px-5 rounded-sm py-1 text-sm mb-20 relative mt-2'>Send</button>
          <img src={send} alt="" className='absolute -mt-[101px] w-[15px] ml-1'/>

        </div>
      </div>
      <Footerpage/>
    </div>
  )
}
