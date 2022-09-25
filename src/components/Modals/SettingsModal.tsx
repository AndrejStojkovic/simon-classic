import React from 'react';
import Modal from '../../lib/Modal';

type SettingsProps = {
  isModalOpen: boolean,
  handleModalClose: () => void
}

const SettingsModal = ({isModalOpen, handleModalClose}: SettingsProps) => {
  return (
    <Modal title='Settings' id='settings' isModalOpen={isModalOpen} handleModalClose={handleModalClose}>
      test
    </Modal>
  )
}

export default SettingsModal;