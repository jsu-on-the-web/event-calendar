import React, { createContext, ReactNode } from 'react';

interface ModalContextContextProps { 
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  openModal: () => void;
  closeModal: () => void;
 }

export const ModalContextContext = createContext<ModalContextContextProps>({} as ModalContextContextProps);

export const ModalContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [showModal, setShowModal] = React.useState(false);
  const openModal = () => {
    console.log('Opening modal');
    setShowModal(true);
  };
  const closeModal = () => {
    console.log('Closing modal');
    setShowModal(false);
  }

  const value = {
    showModal,
    setShowModal,
    openModal,
    closeModal,
  };

  return (
    <ModalContextContext.Provider value={value}>
      {children}
    </ModalContextContext.Provider>
  );
};

// The hook
export const useModal  = () => {
  const context = React.useContext(ModalContextContext);
  if (!context) {
    throw new Error('useModalContext must be used within a ModalContextProvider');
  }
  return context;
};

export default ModalContextProvider;