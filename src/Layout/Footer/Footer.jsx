import React from 'react'
import GooglePlay from './../../Icons/GooglePlay';
import AppStore from './../../Icons/AppStore';
import Socials from './../../Icons/Socials';
import Uzcard from './../../Icons/Uzcard';
import Humo from './../../Icons/Humo';
import Payme from './../../Icons/Payme';

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
          <div className='w-[90%] mx-auto flex justify-between'>
            <div className='flex flex-col'>
              <h1 className='font-[300] text-sm text-white'>Ижтимоий тармоқлар</h1>
              <Socials/>
            </div>
            <div className='flex flex-col'>
              <h1 className='font-[300] text-sm text-white'>Боғланиш</h1>
              <span className='text-white'>+998 90 253 77 53 support@liber.uz</span>
            </div>
            <div className='flex flex-col'>
              <h1 className='font-[300] text-sm text-white'>Биз қабул қиламиз</h1>
              <div className='flex'>
              <Uzcard/>
              <Humo/>
              <Payme/>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}


