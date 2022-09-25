import React from 'react';
import Modal from '../../lib/Modal';

type HowToProps = {
  isModalOpen: boolean,
  handleModalClose: () => void
}

const HowToModal = ({isModalOpen, handleModalClose}: HowToProps) => {
  return (
    <Modal title='How To Play' id='how-to' isModalOpen={isModalOpen} handleModalClose={handleModalClose}>
      test
    </Modal>
  )
}

export default HowToModal;