import { useState } from 'react';
import './App.css'
import Calendar from './components/Calendar'
import Modal from './components/Modal'
import { useModal } from './contexts/ModalContext';
import AddEventForm from './components/AddEventForm';

function App() {
  const { showModal, closeModal } = useModal();

  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  return (
    <>
      {/* <body>
        <p>Hello world!</p>
      </body> */}
      <Calendar setModalPosition={setModalPosition} />
      {showModal && (<Modal children={(<><p>Magnam non labore amet pariatur. Non voluptas harum et aut dolorum repudiandae vel quisquam. Velit cupiditate quae. Deleniti quod itaque adipisci in qui maiores eos nihil. Voluptatem ut aut esse dolore commodi sed non. Facilis porro qui ad molestiae aut illum magni natus exercitationem.</p>
        <p>Officia adipisci reiciendis voluptates et ea mollitia qui recusandae. Laboriosam qui aspernatur nesciunt qui nam est voluptatem deserunt. Est fugit totam necessitatibus.</p>
      </>)} position={modalPosition} onClose={closeModal} />)}

      <AddEventForm onSubmit={(data) => {
        console.log(data);
        closeModal();
      }} />
    </>
  )
}

export default App
