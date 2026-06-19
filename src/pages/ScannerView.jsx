import { Scanner } from "@yudiel/react-qr-scanner";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import Header from "../components/ScannerHeader";
import { ScannedCodesArrayContext } from "../contexts/ScannedCodesArrayContext";
import { qrCodeService } from "../services/qrCodeService.js";

export default function ScannerView() {
  const { setScannedCodesArray } = useContext(ScannedCodesArrayContext);
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

  const customFinder = (detectedCodes, ctx) => {
    detectedCodes.forEach((detectedCode) => {
      const { cornerPoints } = detectedCode;

      //
      // Les coins de chercheur
      //  ____________________
      // |        |           |
      // |            BoxOne  |
      // |_ _ _ _ |___________|
      // |        |
      // |        |
      // | BoxTwo |
      // |        |
      // |________|
      //

      let i = 0;

      // finder bigger than qrCode
      const offset = -5;

      ctx.fillStyle = "#000000";
      cornerPoints.forEach((point) => {
        ctx.save();
        ctx.translate(point.x, point.y);
        switch (i) {
          case 0:
            undefined;
            break;
          case 1:
            ctx.rotate((90 * Math.PI) / 180);
            break;
          case 2:
            ctx.rotate((180 * Math.PI) / 180);
            break;
          case 3:
            ctx.rotate((270 * Math.PI) / 180);
            i = 0;
            break;
        }
        ctx.fillRect(offset, offset, 25, 5);
        ctx.fillRect(offset, offset, 5, 25);
        ctx.translate(-point.x, -point.y);
        ctx.restore();
        i++;
      });
    });
  };

  const handleScan = (detectedCodes) => {
    detectedCodes.forEach((code) => {
      const parsed = JSON.parse(code.rawValue);

      qrCodeService(setScannedCodesArray, parsed);

      navigate("/FloatingFrame");
    });
  };

  return (
    <div
      className={`flex absolute flex-col items-center w-screen ${orientation == "portrait" || orientation == "portrait-primary" ? "h-dvh" : "max-h-min"}`}
    >
      <Header />

      <div className="flex w-full h-full justify-center items-center">
        <div className="flex justify-center items-center w-[90%]  overflow-hidden">
          <Scanner
            onError={(error) => console.log(error)} // is this real error handling?
            onScan={handleScan}
            scanDelay={500} // in ms
            allowMultiple={false}
            constraints={{
              facingMode: "environment",
              aspectRatio: 1,
            }}
            components={{
              tracker: customFinder,
              finder: false,
            }}
            sound={false}
            styles={{
              container: {},
              video: {},
            }}
          />
        </div>
      </div>
    </div>
  );
}
