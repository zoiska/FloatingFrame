import eruda from "eruda";
import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router";
import { AssetResponseContext } from "./contexts/AssetResponseContext";
import { ScannedCodesArrayContext } from "./contexts/ScannedCodesArrayContext";
import { TagResponseContext } from "./contexts/TagResponseContext";
import Assetverwaltung from "./pages/Assetverwaltung";
import FloatingStart from "./pages/FloatingStart";
import FrameView from "./pages/FrameView";
import ScannedList from "./pages/ScannedList";
import ScannerView from "./pages/ScannerView";

export default function App() {
  useEffect(() => {
    if (!window.eruda) {
      eruda.init();
    }
  }, []);

  const [scannedCodesArray, setScannedCodesArray] = useState([]);
  const [assetResponseArray, setAssetResponseArray] = useState([]);
  const [tagResponseArray, setTagResponseArray] = useState([]);

  return (
    <>
      <ScannedCodesArrayContext
        value={{ scannedCodesArray, setScannedCodesArray }}
      >
        <AssetResponseContext
          value={{ assetResponseArray, setAssetResponseArray }}
        >
          <TagResponseContext value={{ tagResponseArray, setTagResponseArray }}>
            <Routes>
              <Route path="/" element={<Navigate to="/start" replace />} />
              <Route path="/start" element={<FloatingStart />} />
              <Route path="/Scanner" element={<ScannerView />} />
              <Route path="/ScannedList" element={<ScannedList />} />
              <Route path="/Assetverwaltung" element={<Assetverwaltung />} />
              <Route path="/FloatingFrame" element={<FrameView />} />
            </Routes>
          </TagResponseContext>
        </AssetResponseContext>
      </ScannedCodesArrayContext>
    </>
  );
}
