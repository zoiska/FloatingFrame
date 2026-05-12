import { Navigate, Route, Routes } from "react-router";
import FrameView from "./pages/FrameView";
import ScannerView from "./pages/ScannerView";
import FloatingStart from "./pages/FloatingStart";
import ThemeTest from "./pages/ThemeTest";
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
        <Route path="/" element={<Navigate to="/start" replace />} />
        <Route path="/Scanner" element={<ScannerView />} />
        <Route path="/FloatingFrame" element={<FrameView />} />
        <Route path="/start" element={<FloatingStart />} />
        <Route path="/test" element={<ThemeTest />} />
      </Routes>
    </>
  );
}
