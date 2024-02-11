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
            <li className='flex list-none p-4 pb-2 text-sm font-semibold text-center hover:scale-110 md:hover:scale-100 md:hover:text-rose-500 md:hover:-translate-y-1.5 hover:duration-50'>{props.name}</li>
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
    <div className='flex justify-between py-2'>
      <img src={Logo} alt="" className='w-[40%] md:w-[32%]  pl-2'/>
      <img src={menuImg} alt="" onClick={handleBar} className='w-[60px] h-[60px] p-2 md:p-0 md:hidden'/>
    </div>
    {((showBar) ? 
    
    <div className='flex flex-col md:flex-row  items-center md:items-start fixed  h-[100vh] bg-white w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 z-50 transition-transform duration-700 transform translate-x-full md:translate-x-0"'>
        <NavList name="Home" linkPath="/"/>
        <NavList name="Patients" linkPath="/patient"/>
        <NavList name="Clinicians" linkPath="/clinicians"/>
        <NavList name="Insurance" linkPath="/insurance"/>
        <NavList name="Clinical Trials" linkPath="/clinicalTrials"/>
        <NavList name="News" linkPath="/newspage"/>
      <Link to="/contact" onClick={handleNavigation}><button className='bg-indigo-900 text-white py-1 px-5 rounded-md m-4'>Contact Us</button></Link>
    
    </div>
    
    :
    
    <div className='hidden  md:flex pt-2'>
              <NavList name="Home" linkPath="/"/>
        <NavList name="Patients" linkPath="/patient"/>
        <NavList name="Clinicians" linkPath="/clinicians"/>
        <NavList name="Insurance" linkPath="/insurance"/>
        <NavList name="Clinical Trials" linkPath="/clinicalTrials"/>
        <NavList name="News" linkPath="/newspage"/>
      <Link to="/contact" onClick={handleNavigation}><button className='bg-indigo-900 text-white py-1 px-5 rounded-md mx-2 mt-3'>Contact Us</button></Link>
    
    </div>)}
    </div>
    </>
    
  )
}