import React from 'react'
import send from '../img/send.png'
import location from '../img/location.png'
import contact_img from '../img/contact_img.jpg'
import letter from '../img/letter.png'
import Navbar from '../components/Navbar'
import Footerpage from '../components/Footerpage'

export default function Contact() {
  return (
    <div className=''>
        <Navbar/>
      <div className='flex flex-col-reverse md:flex-row px-4 md:px-28 md:pt-28 '>
        <div className='md:w-1/2'>
            <h2 className='text-3xl font-bold text-blue-900'>Contact Us</h2>
            <h6 className='text-sm mt-5'>Please feel free to contact us to know more how we can help you.</h6>
            <div className='flex flex-col mt-7'>
                <input type="text" name="" id="" placeholder='Name' className='border border-blue-800 m-1 h-10 w-full rounded-md pl-2'/>
                <input type="email" name="" id="" placeholder='Email' className='border border-blue-800 m-1 h-10 w-full rounded-md pl-2'/>
                <input type="text" name="" id="" placeholder='Phone Number' className='border border-blue-800 m-1 w-full h-10 rounded-md pl-2'/>
                <input type="text" name="" id="" placeholder='Message' className='border border-blue-800 m-1 h-10 w-full rounded-md pl-2'/>
                <div className='ml-[80%] md:ml-[87%]'>
                    <button className='bg-indigo-900 text-white px-5 rounded-sm py-1 text-sm mb-20 relative mt-2'>Send</button>
                    <img src={send} alt="" className='absolute -mt-[101px] w-[15px] ml-1'/>
                </div>
            </div>
      </div>
      <img src={contact_img} alt="" className='pt-20 md:pt-0 md:w-1/2 md:pl-10'/>
      </div>
      <div className='px-4 md:px-28 pb-20'>
        <h3 className='text-blue-900 font-bold mb-7'>Address</h3>
        <div className='flex '>
            <img src={location} alt="" className='mr-2 w-[20px] h-[20px]'/>
            <h6 className='text-base text-blue-900'>Singapre-Found8 128 Prinsep St, #01-01, Singapore 188655</h6>
        </div>
        <div className='flex mt-2'>
            <img src={location} alt="" className='mr-2 w-[20px] h-[20px]'/>
            <h6 className='text-base text-blue-900'>Mumbai- 701 Stanford, Junction of S V Road & C D Barfiwala Marg, Andheri West Mumbai, Mumbai City MH 400058 IN</h6>
        </div>
        <h3 className='text-blue-900 font-bold my-7'>Mail</h3>
        <div className='flex '>
            <img src={letter} alt="" className='mr-2 w-[20px] h-[20px]'/>
            <h6 className='text-base text-blue-900'>hello@zealth-ai.com</h6>
        </div>
      </div>
      <Footerpage/>

    </div>
  )
}
