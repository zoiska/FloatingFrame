import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ScannedCodesArrayContext = createContext({
  scannedCodesArray: [],
  setScannedCodesArray: () => {},
});

export function ScannedCodesArrayProvider({ children }) {
  const [scannedCodesArray, setScannedCodesArray] = useState([]);

  return (
    <ScannedCodesArrayContext value={{ scannedCodesArray, setScannedCodesArray }}>
      {children}
    </ScannedCodesArrayContext>
  );
}
