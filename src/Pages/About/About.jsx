import React from 'react'
import HeaderChiziqcha from './../../Icons/Header-chiziqcha';
import HeaderLinkedpath from './../../Icons/Header-linkedpath';

const About = () => {
  return (
    <div>
      <header className='w-[90%] mx-auto my-14'>
        <h1 className='font-[700] text-7xl text-[#1D1E25] w-[70%] '>Everything you need to get the attention of your audience</h1>
      </header>
      <main className='w-[90%] mx-auto flex justify-between  py-6'>
        <div className='flex gap-4 '>
        <HeaderChiziqcha/>
        <h1 className='font-[600] text-3xl  text-[#1D1E25] leading-10 w-[50%]'>Our digital agency helps clients develop, implement and maintain successful digital marketing strategies across all channels. Also work with you to build your website and create online businesses that grow.</h1>
        
        </div>
        <div><HeaderLinkedpath/></div>
      </main>
    </div>
  )
}

export default About
