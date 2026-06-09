import { Canvas } from "@react-three/fiber";
import { useContext, useEffect, useState } from "react";
import BoxFrame from "../components/BoxFrame";
import NotebookModel from "../components/NotebookModel";
import { ScannedCodesContext } from "../contexts/ScannedCodesContext";
import { Patchpanel } from "../react_assets/Patchpanel";

export default function App() {
  let [orientation, setOrientation] = useState("portrait");
  const [isDetailsOpen, setDetailsOpen] = useState(false);
  const { scannedCodes } = useContext(ScannedCodesContext);

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
        <Canvas className="canvas">
          <directionalLight position={[2, 2, 2]} intensity={1.5} />
          <ambientLight intensity={1} />
          <BoxFrame rotation="0.7854" color="white" />
          {scannedCodes.map((code, index) => (
            <NotebookModel
              position={[(index - (scannedCodes.length - 1) / 2) * 1.2, -0.6, 2]}
              rotation={[0, -0.7, 0]}
              scale={0.3}
              onClick={() => setDetailsOpen(true)}
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
