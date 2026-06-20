import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ScannedCodesArrayContext } from "../contexts/ScannedCodesArrayContext.jsx";
import Header from "../components/ScannedListHeader.jsx";

export default function ScannedList() {
  const { scannedCodesArray } = useContext(ScannedCodesArrayContext);

  let [orientation, setOrientation] = useState("portrait");

  const navigate = useNavigate();

  useEffect(() => {
    function handleRotation() {
      setOrientation(screen.orientation.type);
    }
    screen.orientation.addEventListener("change", handleRotation);
    return () => {
      screen.orientation.removeEventListener("change", handleRotation);
    };
  }, []);

  console.log(scannedCodesArray);

  return (
    <div
      className={`mainContainer w-full  ${
        orientation === "portrait" || orientation === "portrait-primary" ? "h-dvh" : "max-h-min"
      }`}
    >
      <Header />

      <div className="pt-12 flex flex-col gap-2 items-center w-full h-full">
        {scannedCodesArray.map((object, objectIndex) => {
          const type = object.type;

          const remUnderscores = type.replaceAll("_", " ");
          const newLabel = remUnderscores.charAt(0).toUpperCase() + remUnderscores.slice(1);

          return (
            <div
              key={objectIndex}
              className="flex gap-2 border border-b-blue-300 w-1/2 rounded"
              onClick={() => navigate(`/FloatingFrame/${objectIndex}`)}
            >
              <span>{newLabel}:</span>
              <span>{object.hostname ?? object.screen_diagonal + " Zoll"}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
