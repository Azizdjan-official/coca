import React from 'react'
import Chamoq from './../../Icons/Chamoq';

function InfoProps(props) {
    return <div className='flex items-center gap-4 py-4 px-3 w-[25%]'>
        <div><Chamoq/></div>
        <div>
        <h1 className='text-[#11142D] font-[700] text-lg'>{props.name}</h1>
        <p className=' text-[#AAAAAA] font-[400] text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        </div>
    </div>
  }

export default InfoProps
