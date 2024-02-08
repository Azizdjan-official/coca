import React from 'react'
import { rukns }  from "../../DATA/Data"
import RuknlarCards from './RuknlarCards';


const Ruknlar = () => {
  return (
    <div className='w-[90%] mx-auto'>
        <h1 className='text-[#242424] font-[600] text-4xl'>Рукнлар</h1>
        <div className='flex my-4 justify-between'>
          <ul className='flex justify-between w-full'>
            {rukns.map((item)=>(
              <li key={item.id}>
                <RuknlarCards img={item.image} title={item.title}/>
              </li>
            ))}
          </ul>
        </div>
    </div>
  )
}

export default Ruknlar
