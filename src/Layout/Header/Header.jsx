import React from 'react'
import { Link } from 'react-router-dom';
import HeaderIcon from './../../Icons/Header-icon';

const Header = () => {
  return (
    <div>
      <header className='w-[90%] mx-auto  flex justify-between border py-4 items-center font-bold '>
        <HeaderIcon/>
        <div className='flex gap-10'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/pricing">Pricing</Link>
        </div>
      </header>
    </div>
  )
}

export default Header
