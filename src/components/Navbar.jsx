import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../img/zealth_logo.png'

function NavList(props){
    return(
        <Link to={props.linkPath}>
            <li className='flex list-none p-4 text-sm font-semibold hover:text-rose-500 hover:-translate-y-1.5 hover:duration-500		'>{props.name}</li>
        </Link>
    )
}

export default function Navbar() {
  return (
    <div className='flex justify-between fixed bg-white drop-shadow-md w-full z-20'>
    <img src={Logo} alt="" className='w-[12%] pl-2'/>
    <div className='flex'>
        <NavList name="Home" linkPath="/"/>
        <NavList name="Patients" linkPath="/patient"/>
        <NavList name="Clinicians" linkPath="/clinicians"/>
        <NavList name="Insurance" linkPath="/insurance"/>
        <NavList name="Clinical Trials" linkPath="/clinicalTrials"/>
        <NavList name="News" linkPath="/news"/>
      <Link><button className='bg-indigo-900 text-white py-1 px-5 rounded-md m-4'>Contact Us</button></Link>
    </div>
    </div>
  )
}