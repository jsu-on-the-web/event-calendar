import './App.css'
import Calendar from './components/Calendar'
import Modal from './components/Modal'
import { useModal } from './contexts/ModalContext';

function App() {
  const { showModal, closeModal } = useModal();
  return (
    <>
      {/* <body>
        <p>Hello world!</p>
      </body> */}
        <Calendar />
        {showModal && (<Modal children={<p>Hello world!</p>} onClose={closeModal} />)}
    </>
  )
}

export default App
