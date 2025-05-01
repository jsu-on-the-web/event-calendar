import React, { createContext, ReactNode } from 'react';
import { useSelectedDate } from '../SelectedDateContext';

interface ModalContextContextProps { 
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  openModal: () => void;
  closeModal: () => void;
 }

export const ModalContext = createContext<ModalContextContextProps>({} as ModalContextContextProps);

export const ModalContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [showModal, setShowModal] = React.useState(false);
  const { setSelectedDate } = useSelectedDate();
  const openModal = () => {
    console.log('Opening modal');
    setShowModal(true);
  };
  const closeModal = () => {
    console.log('Closing modal');
    setShowModal(false);
    setSelectedDate(undefined); // Reset selected date when closing the modal
  }

  const value = {
    showModal,
    setShowModal,
    openModal,
    closeModal,
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  );
};

// The hook
export const useModal  = () => {
  const context = React.useContext(ModalContext);
  if (!context) {
    throw new Error('useModalContext must be used within a ModalContextProvider');
  }
  return context;
};

export default ModalContextProvider;