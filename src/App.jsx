import eruda from "eruda";
import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router";

import { ScannedCodesArrayContext } from "./contexts/ScannedCodesArrayContext";
import { AssetResponseContext } from "./contexts/AssetResponseContext";
import { TagResponseContext } from "./contexts/TagResponseContext";
import { ContrastProvider } from "./contexts/ContrastContext";

import FloatingStart from "./pages/FloatingStart";
import ScannerView from "./pages/ScannerView";
import ScannedList from "./pages/ScannedList";
import Assetverwaltung from "./pages/Assetverwaltung";
import FrameView from "./pages/FrameView";

export default function App() {

  useEffect(() => {
    eruda.init();
  }, []);

  const [scannedCodesArray, setScannedCodesArray] = useState([]);
  const [assetResponseArray, setAssetResponseArray] = useState([]);
  const [tagResponseArray, setTagResponseArray] = useState([]);

  return (
    <ContrastProvider>
      <ScannedCodesArrayContext.Provider
        value={{ scannedCodesArray, setScannedCodesArray }}
      >
        <AssetResponseContext.Provider
          value={{ assetResponseArray, setAssetResponseArray }}
        >
          <TagResponseContext.Provider
            value={{ tagResponseArray, setTagResponseArray }}
          >
            <Routes>
              <Route path="/" element={<Navigate to="/start" replace />} />
              <Route path="/start" element={<FloatingStart />} />
              <Route path="/Scanner" element={<ScannerView />} />
              <Route path="/ScannedList" element={<ScannedList />} />
              <Route path="/Assetverwaltung" element={<Assetverwaltung />} />
              <Route path="/FloatingFrame" element={<FrameView />} />
            </Routes>
          </TagResponseContext.Provider>
        </AssetResponseContext.Provider>
      </ScannedCodesArrayContext.Provider>
    </ContrastProvider>
  );
}
