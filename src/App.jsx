import { Canvas } from "@react-three/fiber";
import BoxFrame from "./components/BoxFrame";

export default function App() {
  return (
    <>
    <h1>Test</h1>
    <Canvas>
      <directionalLight position={0, 0, 2} intensity={1.5}/>
      <ambientLight intensity={1}/>
      <BoxFrame rotation="0.7854" color="white"/>
    </Canvas>
    </>
  );
}
