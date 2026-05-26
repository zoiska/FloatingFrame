import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ScannedCodesContext = createContext({
  scannedCodes: [],
  setScannedCodes: () => {},
});

export function ScannedCodesProvider({ children }) {
  const [scannedCodes, setScannedCodes] = useState([]);

  return (
    <ScannedCodesContext value={{ scannedCodes, setScannedCodes }}>{children}</ScannedCodesContext>
  );
}
