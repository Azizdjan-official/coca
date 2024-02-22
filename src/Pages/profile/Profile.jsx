import React from 'react'
import sugdiyona from '../../Images/sugdiyona.png'

const Profile = () => {
  return (
    <div>
      <div className='flex gap-4 w-[90%] mx-auto my-8'>
        <div className='flex items-center justify-center'>
            <img src={sugdiyona} />
        </div>
        <div className='flex flex-col gap-3'>
            <h1 className='text-black font-[700] text-2xl'>Суғдиёна Икромова</h1>
            <p className='text-black font-[500] text-xl'>+998 90 253 77 53</p>
            <p className='text-[#9A9A9A] font-[500] text-xl'>ID: 0001  Баланс: 45 000 сўм</p>
        </div>
      </div>
      
    </div>
  )
}

export default Profile
