import React, { useState } from 'react';
import HowToModal from './Modals/HowToModal';
import StatsModal from './Modals/StatsModal';
import SettingsModal from './Modals/SettingsModal';
import { HelpIcon, ThemeIcon, SettingsIcons } from '../lib/Icons';

type HeaderProps = {
  gameRunning: boolean
}

const Header = ({gameRunning}: HeaderProps) => {
  const [isHowToModalOpen, setIsHowToModalOpen] = useState(false);
  const handleHowToModalOpen = () => setIsHowToModalOpen(true);
  const handleHowToModalClose = () => setIsHowToModalOpen(false);

  const [isStatsModalOpen, setIsStatsModalOpen] = useState(false);
  const handleStatsModalOpen = () => setIsStatsModalOpen(true);
  const handleStatsModalClose = () => setIsStatsModalOpen(false);

  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const handleSettingsModalOpen = () => setIsSettingsModalOpen(true);
  const handleSettingsModalClose = () => setIsSettingsModalOpen(false);

  return (
    <div>
      <HowToModal isModalOpen={isHowToModalOpen} handleModalClose={handleHowToModalClose} />
      <StatsModal isModalOpen={isStatsModalOpen} handleModalClose={handleStatsModalClose} />
      <SettingsModal isModalOpen={isSettingsModalOpen} handleModalClose={handleSettingsModalClose} />

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

      <div className='flex gap-4 justify-center items-center mt-6'>
        <button className='flex items-center text-black bg-gray-200 hover:bg-gray-300 rounded-md gap-1 py-2 px-4 font-semibold transition'
          onClick={() => handleHowToModalOpen()}>
          <HelpIcon /> How to Play
        </button>
        <button className='flex items-center text-black bg-gray-200 hover:bg-gray-300 rounded-md gap-1 py-2 px-4 font-semibold transition'
          onClick={() => handleSettingsModalOpen()}>
          <SettingsIcons /> Settings
        </button>
        <button className='flex items-center text-black bg-gray-200 hover:bg-gray-300 rounded-md gap-1 py-2 px-4 font-semibold transition'>
          <ThemeIcon /> Theme
        </button>
      </div>
    </div>
  )
}

export default Header;