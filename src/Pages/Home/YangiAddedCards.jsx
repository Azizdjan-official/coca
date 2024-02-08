import React from 'react'
import Star from './../../Icons/Star';
import HeadPhone from './../../Icons/HeadPhone';
import Bookmark from './../../Icons/Bookmark';

const YangiAddedCards = ({img,title,info,rating}) => {
  return (
    <div className='flex flex-col gap-3'>
      <img src={img} className='w-[239px] h-[336px] border rounded-[14px]'/>
      <h1 className='text-[#11142D] font-[700] text-xl'>{title}</h1>
      <h1 className='text-[#3F51B5] font-[400] text-sm'>{info}</h1>
      <div className='flex justify-between'>
        <span className='flex gap-3'><Star/> <p className='text-[#FF7F4D] text-lg font-[700] '>{rating}</p></span>
        <div className='flex gap-2'>
            <HeadPhone/>
            <Bookmark/>
        </div>
      </div>
    </div>
  )
}

export default YangiAddedCards
