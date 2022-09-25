import React from 'react';
import Modal from '../../lib/Modal';

type StatsProps = {
  isModalOpen: boolean,
  handleModalClose: () => void
}

const StatsModal = ({isModalOpen, handleModalClose}: StatsProps) => {
  return (
    <Modal title='Stats' id='stats' isModalOpen={isModalOpen} handleModalClose={handleModalClose}>
      test
    </Modal>
  )
}

export default StatsModal;