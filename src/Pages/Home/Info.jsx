import React from 'react'
import InfoProps from './InfoProps'
import Uzb from './../../Icons/Uzb';

const Info = () => {
  return (
    <div className='flex justify-between w-[90%] mx-auto'>
      <InfoProps name="Тезкор етказиш" />
      <InfoProps name="Тўлов химояси" />
      <InfoProps name="Юқори сифат" />
      <InfoProps name="Энг сара китоблар" />
    </div>
  )
}

export default Info
