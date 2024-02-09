import React from 'react'

function List(props){
    return(
        <li className='list-none text-center text-sm font-bold leading-8 hover:scale-125 hover:cursor-pointer		'>{props.name}</li>
    )
}

export default function Footerpage() {
  return (
    <>
    <div className='md:grid md:grid-cols-5'>
      <div className='flex flex-col md:flex-row col-span-3 bg-blue-400 md:px-28 pt-10 pb-5'>
        <div className='pb-5 md:pr-32'>
            <h2 className='text-2xl text-center'>End to End Remote monitoring for cancer patients</h2>
        </div>
        <div className='md:pr-20'>
            <List name="Home"/>
            <List name="News"/>
            <List name="Join Us"/>
            <List name="Contact Us"/>
            <List name="CareShare"/>
        </div>
        <div>
            <List name="Clinical Trials"/>
            <List name="Clinicians"/>
            <List name="Insurance"/>
            <List name="Patients"/>
        </div>
      </div>
      <div className='bg-yellow-400 col-span-2 p-5 py-10 md:p-10'>
        <h2 className='text-center text-2xl pb-5'>Sign Up for our newsletter and stay connected</h2>
        <div className='flex px-4 md:px-0'>
            <input type="email" name="" id="" placeholder='Email' className='pl-2 text-sm rounded-sm'/>
            <button className='bg-black py-1 px-2 md:px-8 text-white text-sm'>Subscribe</button>
        </div>
      </div>
    </div>
    <div className='bg-blue-900 p-5'>
        <h5 className='text-sm text-white text-center font-semibold'>Copyright © 2020. ZealthLife technologies Pte. Ltd. All rights reserved.`</h5>
    </div>
    </>
  )
}
