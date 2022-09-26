import React from 'react';
import Modal from '../../lib/Modal';

type HowToProps = {
  isModalOpen: boolean,
  handleModalClose: () => void
}

const HowToModal = ({isModalOpen, handleModalClose}: HowToProps) => {
  return (
    <Modal title='How To Play' id='how-to' isModalOpen={isModalOpen} handleModalClose={handleModalClose}>
      <div className='p-2'>      
        <div>1. Simon will show you a sequence of colors.</div>
        <div>2. You need to click the colors in the correct sequence.</div>
        <div><b>GOAL:</b> Get as much points as possible.<br/>(Each correct sequence = 1 point)</div>
        <div>- You can find your highscore on top<br />of the screen when you start the game.</div>
      </div>
    </Modal>
  )
}

export default HowToModal;