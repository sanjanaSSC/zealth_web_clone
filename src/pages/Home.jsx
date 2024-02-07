import React from 'react'
import '../index.css'
import Card from '../components/card'
import Footerpage from '../components/Footerpage'
import Navbar from '../components/Navbar'
import Hero from '../components/hero'
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

function PartnerImg(props){
  return(
    <div className='flex justify-center'>
    <img src={props.image} alt="" className='w-[15vw] h-[24vh] p-2'/>
    </div>
  )
}

export default function Home() {
  return (
    <div className=''>
        <Navbar/>
        <Hero image={home_img} head1="End to End Remote " head2="monitoring for " head3=" cancer patients" para1="" para2=""/>
      <div className='flex bg-blue-900  pl-10'>
        <div className='w-[50vw] pr-5'> 
            <h3 className='text-center p-5 text-3xl font-bold text-white'>We Understand You Well</h3>
            <p className='text-sm text-white leading-6'>When I saw my close family member going through cancer (which is undoubtedly one of the most complicated diseases that ever existed in humanity), I realized a big gap in healthcare. The patient had to go through multiple toxic chemos followed by radio and eventually surgery. The entire two years were just full of confusion. Whether to call up the doctor, looking up for information on the internet, what do these tests mean, what do these symptoms mean, am I getting better or getting worse?!? There were just too many unanswered questions with no easy solution. Even though we were lucky to have access to some of the best doctors in the country, they were still so overburdened with limited resources to provide continuous round-the-clock care at home. That was the moment when I realized that something needs to be changed. –  Monika Mehta , Ph.D.,  CEO We then came up with an end-to-end solution that provides real-time health monitoring and insights using machine learning for easy management of the disease at home. It not only helps patients and empowers them with all the correct information at the right time but also reduces the burdens from their doctors. –  Dheeraj Mundhra , CTO.</p>
        </div>
        <div>
          <img src={zealth_founders} alt="" className='h-[80vh] w-[55vw]'/>
        </div>
      </div>
      <div className='grid grid-cols-4 mt-10 py-16 bg-gray-200 px-28'>
        <Card image={patient} name="Patients" text="Manage your symptoms while at home and get real time alerts when to contact your doctor"/>
        <Card image={doctor} name="Doctor" text="Save time and get actionable insights personalized for each patients"/>
        <Card image={insurer} name="Insurer" text="Reduce claims with proactive timely interventions"/>
        <Card image={trial} name="Clinical Trials" text="Real world evidence for faster and cost effective clinical trial"/>
      </div>
      <div className='text-center text-2xl font-bold py-20 bg-yellow-300'>
        <h4 className='text-4xl'>Testimonials</h4>
        <div className='flex px-28 justify-between pt-10'>
          <div>
            <h4>Patient</h4>
            <TestimonialCard text="We Understand You Well When I saw my close family member going through cancer (which is undoubtedly one of the most complicated diseases that ever existed in humanity), I realized a big gap in healthcare." name="hi name"/>
          </div>
          <div>
            <h4>Doctor</h4>
          <TestimonialCard text="We Understand You Well When I saw my close family member going through cancer (which is undoubtedly one of the most complicated diseases that ever existed in humanity), I realized a big gap in healthcare." name="hi name"/>
          </div>

        </div>
      </div>
      <div className='py-10 px-28'>
        <h4 className='text-3xl font-bold text-blue-900 text-center my-2 mb-10'>Partnerships and Press</h4>
        <div className='grid grid-cols-4'>
          <PartnerImg image={partner1}/>
          <PartnerImg image={partner2}/>
          <PartnerImg image={partner3}/>
          <PartnerImg image={partner4}/>
        </div>
        <div className='grid grid-cols-4 mt-5'>
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
