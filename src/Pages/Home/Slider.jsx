import React from 'react'
import GirlReadingBook from './../../Icons/GirlReadingBook';
import IconPrev from './../../Icons/IconPrev';
import IconNext from './../../Icons/IconNext';
import SliderCard from './SliderCard';

const Slider = () => {
  return (
    <div className='my-4'>
      <div className='container w-[90%] mx-auto flex  justify-between rounded-[12px]'>
        <div className='bg-[#EEF4FF] border flex rounded-[12px]'>
            <div className='pt-4'>
                <h1 className='font-[700] text-3xl text-[#242424]'>Кўп ўқилаётганлар</h1>
                <GirlReadingBook/>
            </div>
            <div className='flex items-center justify-between mt-4'>
                <button><IconPrev/></button>
                <SliderCard/>
                <SliderCard/>
                <SliderCard/>
                <button><IconNext/></button>
            </div>
        </div>
        <div className='bg-[#3F51B5] rounded-[14px] py-2 px-5'>
            <h1 className='font-[700] w-[215px] text-2xl text-white'>Китоб ўқишни ёқтирасизми?</h1>
            <h1 className='font-[400] my-3 w-[215px] text-lg text-white'>Унда пулингизни тежаш учун ўзингиз йоқтирган рукнга обуна бўлинг</h1>
            <button className='w-[210px] h-[48px] text-[#242424] font-[700] text-lg bg-white rounded-[14px]'>Обуна бўлиш</button>
        </div>
      </div>
    </div>
  )
}

export default Slider
