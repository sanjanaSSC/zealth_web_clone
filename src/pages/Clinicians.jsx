import React, { useRef } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ClinicCard from '../components/ClinicCard'
import patient from '../img/patient.png'
import doctor from '../img/doctor_img.jpg'
import burden from '../img/burden.png'
import monitor from '../img/health-monitoring.png'
import report from '../img/health-check.png'
import Footerpage from '../components/Footerpage'
import { Link } from 'react-router-dom'

export default function Clinicians() {
  const firstref = useRef(null)

  const handleNavigation = () => {
    // Reset scroll position to the top of the page
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <Navbar/>
      <Hero image={doctor} head1="Remotely monitor" head2="your cancer" head3="patients" para1="Zealth’s platform, CareShare doctor, provides visibility into your patient’s health once they leave the hospital. It alerts you when there is any potential issue, giving you a chance to intervene timely and better understanding of how the patient is responding to treatment. " para2="Zealth provides cancer clinics a smart and modern way to move towards proactive treatment management with the potential to predict complications and relapse in a much earlier phase."/>
      <div id="section" ref={firstref} className='bg-slate-200 py-10 px-4 md:pl-28'>
        <ClinicCard image={patient} name="Seamless patient onboarding"/>
        <div className='md:ml-[48%] md:-mt-20'>
          <ClinicCard image={burden} name="Reduce burden"/>
        </div>
        <div className='md:-mt-20'>
          <ClinicCard image={monitor} name="Real time patient insight"/>
        </div>
        <div className='md:ml-[48%] md:-mt-20'>
          <ClinicCard image={report} name="Smart reports"/>
        </div>
        <div className='md:-mt-20'>
          <ClinicCard image={monitor} name="Real time patient insight"/>
        </div>
        <div className='absolute'>
        <Link  to="/contact" onClick={handleNavigation}><button className='bg-indigo-900 text-white py-1 px-5 rounded-sm relative -top-36 left-[240%]'>Contact Us To Know More</button></Link>
        </div>
      </div>
      <Footerpage/>
    </div>
  )
}
