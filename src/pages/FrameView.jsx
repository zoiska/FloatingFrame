import { Canvas } from "@react-three/fiber";
import BoxFrame from "../components/BoxFrame";
import NotebookModel from "../components/NotebookModel";
import cooldatabase from "/assets/cooldatabase.json";

export default function App() {
  return (
    <div className="mainContainer h-dvh w-full">
      <div className="switchContainer h-1/10 w-full border-pink-600 border-2">
        Switch visuals placeholder
      </div>
      <div className="frameContainer h-4/10">
        <Canvas className="canvas border-green-600 border-2">
          <directionalLight position={[2, 2, 2]} intensity={1.5} />
          <ambientLight intensity={1} />
          <BoxFrame rotation="0.7854" color="white" />
          <NotebookModel position={[0, -0.6, 2]} rotation={[0, -0.7, 0]} scale={0.3} />
        </Canvas>
      </div>
      <div className="detailsContainer h-5/10 w-full border-red-600 border-2">
        <pre>{JSON.stringify(cooldatabase, null, 2)}</pre>
        {/** tbd: animation, dynamic frameheight, details height, close details */}
      </div>
    </div>
  );
}
