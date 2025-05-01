import { useState } from 'react';
import './App.css'
import Calendar from './components/Calendar'
import Modal from './components/Modal'

function App() {
  const [showModal, setShowModal] = useState(false)

  const handleCalendarCellClick = () => {
    // We open the modal
    setShowModal(true);
  };

  const handleModalClose = () => {
    // We close the modal
    setShowModal(false);
  };

  return (
    <>
      {/* <body>
        <p>Hello world!</p>
      </body> */}
      <Calendar />
      {showModal && (<Modal children={<p>Hello world!</p>} onClose={() => { handleModalClose() }} />)}

      <button 
        className="px-4 py-2 font-semibold text-black bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300" 
        onClick={() => { handleCalendarCellClick() }}
      >
        Test Button
      </button>
    </>
  )
}

export default App
