import { Navigate, Route, Routes } from "react-router";
import { useEffect, useState } from "react";
import FrameView from "./pages/FrameView";
import ScannerView from "./pages/ScannerView";
import FloatingStart from "./pages/FloatingStart";
import ScannedList from "./pages/ScannedList";
import Assetverwaltung from "./pages/Assetverwaltung";
import FilterMenuTest from "./pages/FilterMenuTest";
import eruda from "eruda";

import { ScannedCodesArrayContext } from "./contexts/ScannedCodesArrayContext";
import { ContrastProvider } from "./contexts/ContrastContext";
import GlobalLayout from "./layout/GlobalLayout";   // <-- NEU

export default function App() {
  useEffect(() => {
    if (!window.eruda) {
      eruda.init();
    }
  }, []);

  const [scannedCodesArray, setScannedCodesArray] = useState([]);

  return (
    <ContrastProvider>
      <ScannedCodesArrayContext.Provider
        value={{ scannedCodesArray, setScannedCodesArray }}
      >
        <GlobalLayout>
          <Routes>
            <Route path="/" element={<Navigate to="/start" replace />} />
            <Route path="/start" element={<FloatingStart />} />
            <Route path="/Scanner" element={<ScannerView />} />
            <Route path="/ScannedList" element={<ScannedList />} />
            <Route path="/Assetverwaltung" element={<Assetverwaltung />} />
            <Route path="/FloatingFrame" element={<FrameView />} />
            <Route path="/FilterMenuTest" element={<FilterMenuTest />} />
          </Routes>
        </GlobalLayout>
      </ScannedCodesArrayContext.Provider>
    </ContrastProvider>
  );
}
