import { Canvas } from "@react-three/fiber";
import { useContext, useEffect, useState } from "react";
import BoxFrame from "../components/BoxFrame";
import NotebookModel from "../components/NotebookModel";
import { ScannedCodesArrayContext } from "../contexts/ScannedCodesArrayContext";
import { Patchpanel } from "../react_assets/Patchpanel";
import CameraSetup from "../components/CameraSetup.jsx";

export default function App() {
  let [orientation, setOrientation] = useState("portrait");
  const [isDetailsOpen, setDetailsOpen] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState(null);
  const { scannedCodesArray } = useContext(ScannedCodesArrayContext);

  const assetPositions = [
    [0, -0.6, 0.5],
    [1, -0.6, 1.5],
    [-1, -0.6, 1.5],
    [0, -0.6, 2.5],
  ];

  useEffect(() => {
    function handleRotation() {
      setOrientation(screen.orientation.type);
    }
    screen.orientation.addEventListener("change", handleRotation);
    return () => {
      screen.orientation.removeEventListener("change", handleRotation);
    };
  }, []);

  return (
    <div
      className={`mainContainer w-full ${orientation == "portrait" || orientation == "portrait-primary" ? "h-dvh" : "max-h-min"}`}
    >
      <div
        className={` switchContainer h-1/10 w-full justify-center
        top-0 left-0 right-0

        transform transition-all duration-500 ease-out

        ${isDetailsOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
      `}
      >
        <Patchpanel />
      </div>
      <div className="frameContainer h-4/10">
        <Canvas className="canvas" camera={{ fov: 40 }}>
          <CameraSetup />
          <directionalLight position={[2, 2, 2]} intensity={1.5} />
          <ambientLight intensity={1} />
          <BoxFrame rotation="0.7854" color="white" />
          {scannedCodesArray
            .filter((code) => code.type === "computer")
            .map((code, codeIndex) => (
              <NotebookModel
                key={code.id}
                position={assetPositions[codeIndex]}
                rotation={[0, -0.785398, 0]}
                scale={0.4}
                onClick={() => {
                  setSelectedAsset(code);
                  setDetailsOpen(true);
                }}
              />
            ))}
        </Canvas>
      </div>
      <div
        className={`detailsContainer h-5/10 w-full wrap-anywhere overflow-auto
        bottom-0 left-0 right-0

        transform transition-all duration-500 ease-out

        ${isDetailsOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}
      `}
      >
        {selectedAsset && (
          <pre className="whitespace-break-spaces p-2">
            {Object.entries(selectedAsset).map(([key, value]) => {
              const remUnderscores = key.replaceAll("_", " ");
              const newLabel = remUnderscores.charAt(0).toUpperCase() + remUnderscores.slice(1);

              return (
                <div key={key}>
                  <span className="font-bold text-brand-blue">{newLabel}:</span>{" "}
                  <span>{String(value)}</span>
                </div>
              );
            })}
          </pre>
        )}
      </div>
    </div>
  );
}
