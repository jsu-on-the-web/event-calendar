import { useState } from 'react';
import './App.css'
import Calendar from './components/Calendar'
import Modal from './components/Modal'
import { useModal } from './contexts/ModalContext';

function App() {
  const { showModal, closeModal } = useModal();

  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  
  return (
    <>
      {/* <body>
        <p>Hello world!</p>
      </body> */}
      <Calendar setModalPosition={ setModalPosition } />
        {showModal && (<Modal children={<p>Hello world!</p>} position={modalPosition} onClose={closeModal} />)}
    </>
  )
}

export default App
