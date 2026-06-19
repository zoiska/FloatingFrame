import { createContext, useContext, useState, useEffect } from "react";

const ContrastContext = createContext();

export function ContrastProvider({ children }) {
  const [highContrast, setHighContrast] = useState(() => {
    const saved = localStorage.getItem("contrast");
    return saved === "true";
  });

  useEffect(() => {
    localStorage.setItem("contrast", highContrast);
  }, [highContrast]);

  const toggleContrast = () => setHighContrast(prev => !prev);

  return (
    <ContrastContext.Provider value={{ highContrast, toggleContrast }}>
      {children}
    </ContrastContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useContrast() {
  return useContext(ContrastContext);
}





