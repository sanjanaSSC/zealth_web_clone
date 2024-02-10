import React, { useEffect, useState } from 'react'
import '../App.css';
import TestimonialInfo from './TestimonialInfo.json';
import left from '../img/left.png'
import right from '../img/right.png'



export default function TestimonialPatient({ slides}){
const [currentIndex, setCurrentIndex] = useState(0);
const [dot, setDot] = useState('*')
  
 const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? TestimonialInfo.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex);
}
const goToNext = () => {
    const isLastSlide = currentIndex === TestimonialInfo.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex);
}

const goToSlide = slideIndex => {
    setCurrentIndex(slideIndex)
}

return(
    <div className=''>
        
        <div className='border py-10 px-16 md:p-16 my-4 md:m-4 ml-0 md:h-[290px] md:w-[450px] bg-white rounded-md relative '>
            <p className='text-base flex justify-center mt-7'>{TestimonialInfo[currentIndex].text}</p>
            <h6 className='text-sm mt-10'>{TestimonialInfo[currentIndex].author}</h6>
            <h6 className='text-xs mt-1'>{TestimonialInfo[currentIndex].title}</h6>
            <button onClick={goToPrevious} ><img src={left} alt="" className='w-[20px] absolute top-32 right-[90%]'/></button>
        <button onClick={goToNext}><img src={right} alt="" className='w-[20px] absolute top-32 left-[90%]'/></button>
        </div>
        
        <div className="flex justify-center mt-4">
            {TestimonialInfo.map((slide, slideIndex) => (
            <div
                key={slideIndex}
                className={`w-4 h-4 rounded-full mx-1 cursor-pointer ${
                slideIndex === currentIndex ? 'bg-black' : 'bg-white'
                }`}
                onClick={() => goToSlide(slideIndex)}
                ></div>
                ))}
            </div>
    </div>
)
}