import React, { createContext, ReactNode } from 'react';

interface SelectedDateContextProps {
  selectedDate: number | undefined;
  setSelectedDate: (date: number | undefined) => void;
 }


export const SelectedDateContext = createContext<SelectedDateContextProps>({} as SelectedDateContextProps);

export const SelectedDateContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedDate, setSelectedDate] = React.useState<number | undefined>(undefined);  

  const value = {
    selectedDate,
    setSelectedDate,
  };
  
  return (
    <SelectedDateContext.Provider value={value}>
      {children}
    </SelectedDateContext.Provider>
  );
}

// The hook
export const useSelectedDate = () => {
  const context = React.useContext(SelectedDateContext);
  if (!context) {
    throw new Error('useSelectedDate must be used within a SelectedDateContextProvider');
  }
  return context;
}

export default SelectedDateContextProvider;