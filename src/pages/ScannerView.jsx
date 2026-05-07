import { Scanner } from "@yudiel/react-qr-scanner";
import { useNavigate } from "react-router-dom";

export default function ScannerView() {
  const navigate = useNavigate();

  const customFinder = (detectedCodes, ctx) => {
    detectedCodes.forEach((detectedCode) => {
      const { cornerPoints } = detectedCode;

      //
      // Le coins de chercheur
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
      let xOffsetOne = -5;
      let yOffsetOne = -5;

      let xOffsetTwo = -5;
      let yOffsetTwo = -5;

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
        ctx.fillRect(xOffsetOne, yOffsetOne, 25, 5);
        ctx.fillRect(xOffsetTwo, yOffsetTwo, 5, 25);
        ctx.translate(-point.x, -point.y);
        ctx.restore();
        i++;
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
