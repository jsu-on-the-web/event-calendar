import './App.css'
import Calendar from './components/Calendar'
import Modal from './components/Modal'

function App() {

  return (
    <>
      {/* <body>
        <p>Hello world!</p>
      </body> */}
      <Calendar />
      <Modal children={<p>Hello world!</p>} onClose={() => { console.log(`Modal closed!`) }} />
    </>
  )
}

export default App
