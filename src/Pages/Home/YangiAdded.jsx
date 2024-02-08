import React from 'react'
import { yangiQoshilganlar } from '../../DATA/Data'
import YangiAddedCards from './YangiAddedCards';


const YangiAdded = () => {
  return (
    <div className='w-[90%] mx-auto'>
        <h1 className='text-[#242424] font-[600] text-4xl'>Янги қўшилганлар</h1>
        <ul className='flex justify-between'>
          {yangiQoshilganlar.map((item)=> (
            <li>
              <YangiAddedCards img={item.image} title={item.title} info={item.info} rating={item.rating}/>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default YangiAdded
