import React from 'react';

const Footer = () => {
  return (
    <div className='w-full z-10 top-0 drop-shadow-custom text-center p-5 transition text-gray-600'>
      &copy; 2022 Project by <a className='font-semibold hover:text-gray-900' href='https://github.com/AndrejStojkovic'>Andrej Stojkovikj</a>
      <span className='mx-1'>-</span>
      <a className='text-blue-500 hover:text-blue-600 font-semibold' href='https://github.com/AndrejStojkovic/simon-classic'>Github Repo</a>
    </div>
  )
}

export default Footer;