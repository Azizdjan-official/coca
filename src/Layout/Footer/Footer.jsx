import React from 'react'
import GooglePlay from './../../Icons/GooglePlay';
import AppStore from './../../Icons/AppStore';

export const Footer = () => {
  return (
    <div className='bg-[#EEF4FF] flex flex-col'>
        <div className='w-[90%] mx-auto flex justify-between py-8'>
          <div className='flex flex-col gap-5'>
            <h1 className='text-black font-[700] text-xl'>Платформа хақида</h1>
            <p className='text-[#11142D] font-[400] text-lg'>Liber ўзи нима?</p>
            <p className='text-[#11142D] font-[400] text-lg'>Фойдаланиш шартлари</p>
            <p className='text-[#11142D] font-[400] text-lg'>Ёрдам</p>
          </div>
          <div className='flex flex-col gap-5'>
            <h1 className='text-black font-[700] text-xl'>Обуна хақида</h1>
            <p className='text-[#11142D] font-[400] text-lg'>Обуна хақида</p>
            <p className='text-[#11142D] font-[400] text-lg'>Қандай тўлаш</p>
          </div>
          <div className='flex flex-col gap-5'>
            <h1 className='text-black font-[700] text-xl'>Китоблар</h1>
            <p className='text-[#11142D] font-[400] text-lg'>Аудио китоблар</p>
            <p className='text-[#11142D] font-[400] text-lg'>Электрон китоблар</p>
            <p className='text-[#11142D] font-[400] text-lg'>Китоблар</p>
          </div>
          <div className='flex flex-col gap-5 w-[40%]'>
            <h1 className='text-black font-[700] text-xl'>Мобил илова</h1>
            <GooglePlay/>
            <AppStore/>
          </div>
        </div>
        <div className='bg-[#10182C]'>
          <div className='w-[90%] mx-auto'>
            
          </div>
        </div>
    </div>
  )
}


