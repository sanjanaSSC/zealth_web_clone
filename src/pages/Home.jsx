import React, { useRef } from 'react'
import '../index.css'
import Card from '../components/card'
import Footerpage from '../components/Footerpage'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import zealth_founders from '../img/zealth_founders.avif'
import patient from '../img/patient.png'
import home_img from '../img/home_img1.jpg'
import doctor from '../img/doctor.png'
import insurer from '../img/health-insurance.png'
import trial from '../img/research.png'
import partner1 from '../img/partner1.png'
import partner2 from '../img/partner2.png'
import partner3 from '../img/partner3.jpeg'
import partner4 from '../img/partner4.png'
import partner5 from '../img/partner5.png'
import partner6 from '../img/partner6.png'
import partner7 from '../img/partner7.png'
import partner8 from '../img/partner8.png'
import TestimonialCard from '../components/TestimonialCard'
import TestimonialPage from './TestimonialPatient'
import TestimonialPatient from './TestimonialPatient'
import TestimonialDoctor from './TestimonialDoctor'

function PartnerImg(props){
  return(
    <div className='flex justify-center'>
    <img src={props.image} alt="" className='w-[60%] py-4 md:py-0 md:w-[15vw] md:h-[24vh] p-2'/>
    </div>
  )
}

export default function Home() {
  const firstref = useRef(null)
  return (
    <div className=''>
        <Navbar/>
        <Hero image={home_img} head1="End to End Remote " head2="monitoring for " head3=" cancer patients" para1="" para2=""/>
      <div id="section" ref={firstref} className='flex flex-col md:flex-row bg-blue-900  md:pl-10'>
        <div className='md:w-[50vw] pl-4 pb-4 md:pr-5'> 
            <h3 className='text-center p-5 text-3xl font-bold text-white'>We Understand You Well</h3>
            <p className='text-sm text-white leading-6'>When I saw my close family member going through cancer (which is undoubtedly one of the most complicated diseases that ever existed in humanity), I realized a big gap in healthcare. The patient had to go through multiple toxic chemos followed by radio and eventually surgery. The entire two years were just full of confusion. Whether to call up the doctor, looking up for information on the internet, what do these tests mean, what do these symptoms mean, am I getting better or getting worse?!? There were just too many unanswered questions with no easy solution. Even though we were lucky to have access to some of the best doctors in the country, they were still so overburdened with limited resources to provide continuous round-the-clock care at home. That was the moment when I realized that something needs to be changed. –  Monika Mehta , Ph.D.,  CEO We then came up with an end-to-end solution that provides real-time health monitoring and insights using machine learning for easy management of the disease at home. It not only helps patients and empowers them with all the correct information at the right time but also reduces the burdens from their doctors. –  Dheeraj Mundhra , CTO.</p>
        </div>
        <div>
          <img src={zealth_founders} alt="" className='md:h-[80vh] md:w-[55vw] -pl-4 md:-px-0'/>
        </div>
      </div>
      <div className='flex flex-col md:grid md:grid-cols-4 mt-10 py-16 bg-gray-200 px-4 md:px-28'>
        <Card image={patient} name="Patients" text="Manage your symptoms while at home and get real time alerts when to contact your doctor" path="/patient"/>
        <Card image={doctor} name="Doctor" text="Save time and get actionable insights personalized for each patients" path="/clinicians"/>
        <Card image={insurer} name="Insurer" text="Reduce claims with proactive timely interventions" path="/insurance"/>
        <Card image={trial} name="Clinical Trials" text="Real world evidence for faster and cost effective clinical trial" path="/clinicalTrials"/>
      </div>
      <div className='text-center text-2xl font-bold py-10 md:py-10 bg-yellow-300'>
        <h4 className='text-3xl'>Testimonials</h4>
        <div className='flex flex-col md:flex-row px-4 md:px-28 justify-between pt-10'>
          <div>
            <h4>Patient</h4>
            <TestimonialPatient/>
          </div>
          <div>
            <h4 className='pt-6 md:pt-0'>Doctor</h4>
            <TestimonialDoctor/>
        </div>
        </div>
      </div>
      <div className='py-10 px-4 md:px-28'>
        <h4 className='text-3xl font-bold text-blue-900 text-center my-2 mb-10'>Partnerships and Press</h4>
        <div className='flex flex-col md:grid md:grid-cols-4'>
          <PartnerImg image={partner1}/>
          <PartnerImg image={partner2}/>
          <PartnerImg image={partner3}/>
          <PartnerImg image={partner4}/>
        </div>
        <div className='flex flex-col md:grid md:grid-cols-4 mt-5'>
        <PartnerImg image={partner5}/>
        <PartnerImg image={partner6}/>
        <PartnerImg image={partner7}/>
        <PartnerImg image={partner8}/>
        </div>

      </div>
      <Footerpage/>
    </div>
  )
}
