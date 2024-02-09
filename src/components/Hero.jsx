import React from 'react'

export default function Hero(props) {
  return (
    <div>
      <div className='px-4 md:pl-28 pt-40 pb-20 relative'  style={{ backgroundImage: `url(${props.image})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
      <div className='absolute inset-0 bg-white bg-opacity-30'></div>
        <h1 className=' text-3xl md:text-5xl font-bold text-black  relative z-10'>{props.head1} <br/> {props.head2} <br/>{props.head3} <br/>{props.head4} <br/>{props.head5}</h1>
        <p className='font-semibold'>{props.para1}</p>
        <p className='font-semibold'>{props.para2}</p>
      </div>
    </div>
  )
}
