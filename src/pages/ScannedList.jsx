import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ScannedCodesArrayContext } from "../contexts/ScannedCodesArrayContext.jsx";
import Header from "../components/ScannedListHeader.jsx";
import { Laptop, Monitor, Network } from "lucide-react";

export default function ScannedList() {
  const { scannedCodesArray } = useContext(ScannedCodesArrayContext);

  const [orientation, setOrientation] = useState("portrait");

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
        orientation === "portrait" || orientation === "portrait-primary"
          ? "h-dvh"
          : "max-h-min"
      }`}
    >
      <Header />

      <div
        className="fixed w-screen h-screen rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(251,146,60,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="pt-12 flex flex-col gap-2 items-center w-full h-full">
        {scannedCodesArray.map((object, objectIndex) => {
          //const type = object.type;

          //const remUnderscores = type.replaceAll("_", " ");
          //const newLabel = remUnderscores.charAt(0).toUpperCase() + remUnderscores.slice(1);

          return (
            <div
              key={objectIndex}
              className="flex gap-3 bg-transparent border border-brand-blue w-4/5 min-h-12 rounded-lg 
              items-center p-3 hover:scale-[1.02] transition-transform duration-200 cursor-pointer"
              onClick={() => navigate(`/FloatingFrame/${objectIndex}`)}
            >
              <span className="text-brand-blue">
                {object.type === "computer" ? (
                  <Laptop size={26} strokeWidth={2.5} />
                ) : object.type === "monitor" ? (
                  <Monitor size={26} strokeWidth={2.5} />
                ) : object.type === "switch" ? (
                  <Network size={26} strokeWidth={2.5} />
                ) : (
                  "?"
                )}
              </span>

              <div className="bg-transparent rounded-md px-2 py-1">
                <span className="text-brand-blue font-medium">
                  {(object.hostname ?? object.screen_diagonal + " Zoll") +
                    (object.ram_size
                      ? ", " + object.ram_size + " GB"
                      : object.refresh_rate
                        ? ", " + object.refresh_rate + " Hz"
                        : "") +
                    (object.manufacturer ? ", " + object.manufacturer : "") +
                    (object.type === "switch" ? ", Port: " + object.port : "")}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
