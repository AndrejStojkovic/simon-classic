import React from 'react';

import { StatsIcon, HelpIcon, ThemeIcon } from '../lib/Icons';

type HeaderProps = {
  gameRunning: boolean
}

const Header = ({gameRunning}: HeaderProps) => {
  return (
    <div>
      <div id='logo' className={`flex gap-5 items-center justify-center transition duration-100 ${gameRunning ? 'opacity-0' : 'opacity-100'}`}>
        <div id='simon-logo'>
          <div className='flex justify-center items-center'>
            <div className='bg-black w-28 h-28 rounded-full absolute z-0'></div>
            <div className='bg-black w-24 h-1.5 absolute z-20'></div>
            <div className='bg-black w-1.5 h-24 absolute z-20'></div>
            
            <div className='z-10'>
              <div className='flex'>
                <div className='w-12 h-12 bg-yellow-500 rounded-tl-full'></div>
                <div className='w-12 h-12 bg-blue-500 rounded-tr-full'></div>
              </div>

              <div className='flex'>
                <div className='w-12 h-12 bg-red-500 rounded-bl-full'></div>
                <div className='w-12 h-12 bg-green-500 rounded-br-full'></div>
              </div>
            </div>
          </div>
        </div>

        <div className='text-center'>
          <div className='font-black text-5xl'>Simon</div>
          <div className='font-black text-4xl'>Classic</div>
        </div>
      </div>

      <div className='flex gap-2 justify-center items-center mt-5'>
        <button className='flex items-center bg-gray-200 hover:bg-gray-300 rounded-md gap-1 py-2 px-4 font-semibold text-lg transition'>
          <HelpIcon /> How to Play
        </button>
        <button className='flex items-center bg-gray-200 hover:bg-gray-300 rounded-md gap-1 py-2 px-4 font-semibold text-lg transition'>
          <StatsIcon /> Stats
        </button>
        <button className='flex items-center bg-gray-200 hover:bg-gray-300 rounded-md gap-1 py-2 px-4 font-semibold text-lg transition'>
          <ThemeIcon /> Theme
        </button>
      </div>
    </div>
  )
}

export default Header;