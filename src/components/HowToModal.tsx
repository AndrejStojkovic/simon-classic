import React from 'react';
import Modal from '../lib/Modal';

type HowToModalProps = {
  isModalOpen: boolean,
  handleModalClose: () => void
}

const HowToModal = ({isModalOpen, handleModalClose}: HowToModalProps) => {
  return (
    <Modal title='How To Play' id='how-to' isModalOpen={isModalOpen} handleModalClose={handleModalClose}>
      test
    </Modal>
  )
}

export default HowToModal;