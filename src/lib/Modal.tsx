import React from 'react';
import { XIcon } from './Icons';

type ModalProps = {
  title: string,
  id: string,
  children: React.ReactNode,
  handleModalClose: () => void,
  isModalOpen: boolean
}

const Modal: React.FC<ModalProps> = ({title, id, children, handleModalClose, isModalOpen}) => {
  return (
    <>
      {isModalOpen && (<div id={id} className={`fixed z-50 w-screen h-screen top-0 left-0 overflow-hidden`}>
        <div className='w-full h-full bg-black opacity-75' onClick={() => handleModalClose()}></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-16 py-2 bg-white rounded-md text-center shadow-md'>
          <div className='absolute top-0 right-0 m-1 p-1 text-red-500 font-bold rounded-md hover:bg-red-100 hover:cursor-pointer'
            onClick={() => handleModalClose()}>
            <XIcon />
          </div>

          <h1 className='font-semibold text-xl'>{title}</h1>
          {children}
        </div>
        
      </div>)}
    </>
  )
}

export default Modal;