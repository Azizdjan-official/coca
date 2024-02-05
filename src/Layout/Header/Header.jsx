import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <header className='w-[80%] mx-auto flex justify-between bg-slate-300 py-4'>
        <h1>Coca </h1>
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
