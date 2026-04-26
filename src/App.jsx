import { Route, Routes } from "react-router";
import FrameView from "./pages/FrameView";
import ScannerView from "./pages/ScannerView";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ScannerView />} />
        <Route path="/FloatingFrame" element={<FrameView />} />
      </Routes>
    </>
  );
}
