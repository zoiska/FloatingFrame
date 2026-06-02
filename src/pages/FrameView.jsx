import { Canvas } from "@react-three/fiber";
import { useContext } from "react";
import BoxFrame from "../components/BoxFrame";
import NotebookModel from "../components/NotebookModel";
import { ScannedCodesContext } from "../contexts/ScannedCodesContext";
import { Patchpanel } from "../react_assets/Patchpanel";

export default function App() {
  const { scannedCodes } = useContext(ScannedCodesContext);

  return (
    <div className="mainContainer h-dvh w-full">
      <div className="switchContainer h-1/10 w-full justify-center">
        <Patchpanel />
      </div>
      <div className="frameContainer h-4/10">
        <Canvas className="canvas">
          <directionalLight position={[2, 2, 2]} intensity={1.5} />
          <ambientLight intensity={1} />
          <BoxFrame rotation="0.7854" color="white" />
          <NotebookModel position={[0, -0.6, 2]} rotation={[0, -0.7, 0]} scale={0.3} />
        </Canvas>
      </div>
      <div className="detailsContainer h-5/10 w-full wrap-anywhere overflow-auto">
        {scannedCodes.map((code, index) => (
          <pre key={index} className="whitespace-break-spaces p-2">
            {Object.entries(code).map(([key, value]) => {
              let remUnderscores = key.replaceAll("_", " ");
              let newLabel = remUnderscores.charAt(0).toUpperCase() + remUnderscores.slice(1);
              return (
                <div>
                  <span className="font-bold text-brand-blue">{`${newLabel}: `}</span>
                  <span>{`${value}\n`}</span>
                </div>
              );
            })}
          </pre>
        ))}
      </div>
      {/** tbd: animation, dynamic frameheight, details height, close details */}
    </div>
  );
}
