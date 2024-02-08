import React from 'react'

function RuknlarCards({img, title}) {
    return <div className='relative '>
        <img src={img} className='w-[200px] h-[164px] rounded-[14px] ' />
        <h1 className=' absolute bottom-3  left-5 break-all	 font-[600] text-base text-white'>{title}</h1>
    </div>
  }

export default RuknlarCards
