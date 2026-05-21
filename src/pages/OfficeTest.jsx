import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import OfficeModel from "../components/OfficeModel";

export default function OfficeTest() {
  return (
    <div style={{ width: "100vw", height: "100dvh" }}>
      <Canvas camera={{ position: [3, 3, 3], fov: 50 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <OfficeModel />
        <OrbitControls />
      </Canvas>
    </div>
  );
}