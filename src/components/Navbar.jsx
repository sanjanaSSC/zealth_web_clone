import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../img/zealth_logo.png'
import Menu from '../img/menu.png'
import Cancel from '../img/close (1).png'

function NavList(props){
 
  const handleNavigation = () => {
    // Reset scroll position to the top of the page
    window.scrollTo(0, 0);
  };
    return(
        <Link to={props.linkPath} onClick={handleNavigation}>
            <li className='flex list-none p-4 text-sm font-semibold text-center md:hover:text-rose-500 md:hover:-translate-y-1.5 hover:duration-500		'>{props.name}</li>
        </Link>
    )
}

export default function Navbar() {
  const[showBar, setShowBar] = useState(false);
  const[menuImg, setMenuImg] = useState(Menu)

  const handleNavigation = () => {
    // Reset scroll position to the top of the page
    window.scrollTo(0, 0);
  };
  const handleBar = () =>{
    setShowBar(prev=>!prev);
    
    if(showBar===false ){
      setMenuImg(Cancel)
    }
    else{
      setMenuImg(Menu)
    }
  }

  return (
    <>
    <div className='md:flex md:justify-between fixed bg-white drop-shadow-md w-full z-20 '>
    <div className='flex justify-between '>
      <img src={Logo} alt="" className='w-[30%] md:w-[32%] pl-2'/>
      <img src={menuImg} alt="" onClick={handleBar} className='w-[40px] h-[40px] p-2 md:hidden'/>
    </div>
    {((showBar) ? 
    
    <div className='flex flex-col md:flex-row h-[100vh] md:h-[20px] text-center'>
        <NavList name="Home" linkPath="/"/>
        <NavList name="Patients" linkPath="/patient"/>
        <NavList name="Clinicians" linkPath="/clinicians"/>
        <NavList name="Insurance" linkPath="/insurance"/>
        <NavList name="Clinical Trials" linkPath="/clinicalTrials"/>
        <NavList name="News" linkPath="/newspage"/>
      <Link to="/contact" onClick={handleNavigation}><button className='bg-indigo-900 text-white py-1 px-5 rounded-md m-4'>Contact Us</button></Link>
    
    </div>
    
    :
    
    <div className='hidden md:flex'>
              <NavList name="Home" linkPath="/"/>
        <NavList name="Patients" linkPath="/patient"/>
        <NavList name="Clinicians" linkPath="/clinicians"/>
        <NavList name="Insurance" linkPath="/insurance"/>
        <NavList name="Clinical Trials" linkPath="/clinicalTrials"/>
        <NavList name="News" linkPath="/newspage"/>
      <Link to="/contact" onClick={handleNavigation}><button className='bg-indigo-900 text-white py-1 px-5 rounded-md m-4'>Contact Us</button></Link>
    
    </div>)}
    </div>
    </>
    
  )
}