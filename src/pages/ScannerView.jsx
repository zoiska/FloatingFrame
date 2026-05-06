import { Scanner } from "@yudiel/react-qr-scanner";
import { useNavigate } from "react-router-dom";

export default function ScannerView() {
  const navigate = useNavigate();

  const customFinder = (detectedCodes, ctx) => {
    detectedCodes.forEach((detectedCode) => {
      const { boundingBox } = detectedCode;

      // Draw bounding box
      ctx.strokeStyle = "#00FF00";
      ctx.lineWidth = 4;
      ctx.strokeRect(
        boundingBox.x,
        boundingBox.y,
        boundingBox.width,
        boundingBox.height,
      );

      ctx.fillStyle = "#000000";
      detectedCode.forEach((point) => {
        ctx.fillRect(point.x - 5, point.y - 5, 25, 5);
        ctx.fillRect(point.x - 5, point.y - 5, 5, 25);
      });
    });
  };

  return (
    <div className="h-dvh w-screen pt-6 pb-6 border-red-600 border-4">
      <div className="flex flex-col justify-self-center items-center w-[80%] h-full overflow-hidden border-4 border-green-600 relative">
        <h1 className="font-hel font-extrabold text-3xl">Scan a QR-Code</h1>
        <Scanner
          onScan={(results) => {
            results.forEach((result) => {
              console.log(result.rawValue);
              navigate("/FloatingFrame");
            });
          }}
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
  );
}
