import { useState } from 'react';
import './App.css'
import Calendar from './components/Calendar'
import Modal from './components/Modal'
import ModalContextProvider, { useModal } from './contexts/ModalContext';

function App() {
  const { showModal, openModal, closeModal } = useModal();
  return (
    <>
      {/* <body>
        <p>Hello world!</p>
      </body> */}
      <ModalContextProvider>
        <Calendar />
        {showModal && (<Modal children={<p>Hello world!</p>} onClose={closeModal} />)}

        <button
          className="px-4 py-2 font-semibold text-black bg-blue-500 rounded open-modal-button hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          onClick={openModal}
        >
          Test Button
        </button>
      </ModalContextProvider>
    </>
  )
}

export default App
