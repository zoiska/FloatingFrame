import { Route, Routes } from "react-router";
import FrameView from "./pages/FrameView";
import ScannerView from "./pages/ScannerView";
import { useEffect } from "react";
import eruda from "eruda";

export default function App() {
  useEffect(() => {
    if (!window.eruda) {
      eruda.init();
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<ScannerView />} />
        <Route path="/FloatingFrame" element={<FrameView />} />
      </Routes>
    </>
  );
}
