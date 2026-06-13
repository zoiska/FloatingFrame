import { Navigate, Route, Routes } from "react-router";
import { useEffect, useState } from "react";
import FrameView from "./pages/FrameView";
import ScannerView from "./pages/ScannerView";
import FloatingStart from "./pages/FloatingStart";
import eruda from "eruda";
import { ScannedCodesArrayContext } from "./contexts/ScannedCodesArrayContext";

export default function App() {
  useEffect(() => {
    if (!window.eruda) {
      eruda.init();
    }
  }, []);

  const [scannedCodesArray, setScannedCodesArray] = useState([]);

  return (
    <>
      <ScannedCodesArrayContext value={{ scannedCodesArray, setScannedCodesArray }}>
        <Routes>
          <Route path="/" element={<Navigate to="/start" replace />} />
          <Route path="/Scanner" element={<ScannerView />} />
          <Route path="/FloatingFrame" element={<FrameView />} />
          <Route path="/start" element={<FloatingStart />} />
        </Routes>
      </ScannedCodesArrayContext>
    </>
  );
}
