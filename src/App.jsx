import { Navigate, Route, Routes } from "react-router";
import { useEffect, useState } from "react";
import FrameView from "./pages/FrameView";
import ScannerView from "./pages/ScannerView";
import FloatingStart from "./pages/FloatingStart";
import eruda from "eruda";
import { ScannedCodesContext } from "./contexts/ScannedCodesContext";

export default function App() {
  useEffect(() => {
    if (!window.eruda) {
      eruda.init();
    }
  }, []);

  const [scannedCodes, setScannedCodes] = useState([]);

  return (
    <>
      <ScannedCodesContext value={{ scannedCodes, setScannedCodes }}>
        <Routes>
          <Route path="/" element={<Navigate to="/start" replace />} />
          <Route path="/Scanner" element={<ScannerView />} />
          <Route path="/FloatingFrame" element={<FrameView />} />
          <Route path="/start" element={<FloatingStart />} />
        </Routes>
      </ScannedCodesContext>
    </>
  );
}