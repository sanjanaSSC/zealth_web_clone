import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({ props }) => {
 

  return (
    <div className='border-1 md:m-4 p-5 shadow-xl hover:shadow-2xl'>
      <h4 className='font-semibold text-blue-900 pb-6'>{props.title}</h4>
      <p className='text-sm'>{props.text}</p>
      <Link
        to='/newsEach'
          state= {props} // Pass reference to renderContent
  
      >
        <button className='text-sm text-blue-900 py-5'>Read More</button>
      </Link>
      <div className='flex border-t-2 border-blue-100 pt-2'>
        <h6 className='text-xs text-blue-900'>{props.author}</h6>
        <h6 className='pl-2 text-xs text-blue-900'>{props.date}</h6>
      </div>
    </div>
  );
};

export default NewsCard;
