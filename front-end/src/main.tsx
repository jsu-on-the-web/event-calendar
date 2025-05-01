import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.tsx'
import ModalContextProvider from './contexts/ModalContext/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ModalContextProvider>
      <App />
    </ModalContextProvider>
  </StrictMode>,
)
