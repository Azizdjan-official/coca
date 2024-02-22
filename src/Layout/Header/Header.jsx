import React from 'react'
import HeaderLogoIcon from './../../Icons/HeaderLogoIcon';
import Ruknlar from './../../Icons/Ruknlar';
import Search from './../../Icons/Search';
import Uzb from './../../Icons/Uzb';
import BasicModal from './HeaderButton';

const Header = () => {
  return (
    <div className="container flex  justify-between w-[90%] mx-auto py-3">
        <HeaderLogoIcon/>
        <div className='flex gap-2'>
        <div className='flex h-full   items-center justify-center w-[180px]'>
          <Ruknlar/>
          <select className="select select-bordered   max-w-xs">
          <option disabled selected>Рукнлар</option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
        </div>
        <div className='border flex items-center bg-[#F8F8F8] w-[555px] '>
          <input type="text" placeholder='Қидириш' className='px-4 w-[93%] h-full bg-[#F8F8F8]' />
          <Search />
        </div>
        </div>
        <div className='flex gap-4'>
          <div className='flex gap-1 px-2 items-center bg-[#EEF4FF] rounded-[14px] '>
            <Uzb/>
            <select className="select border-0 w-10 max-w-xs bg-[#EEF4FF]  ">
            <option disabled selected>Ўз</option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
          </div>
          {/* <button className='bg-[#3F51B5] w-[151px] text-white font-[700] text-lg rounded-[14px]' >Kirish</button> */}
          <BasicModal/>
        </div>
    </div>
  )
}

export default Header
