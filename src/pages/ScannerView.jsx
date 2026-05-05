import { Scanner } from "@yudiel/react-qr-scanner";
import { useNavigate } from "react-router-dom";

export default function ScannerView() {
  const navigate = useNavigate();

  return (
    <>
      <Scanner
        onScan={(result) =>
          result.forEach((element) => {
            console.log(element.rawValue);
            navigate("/FloatingFrame");
          })
        }
        onError={(error) => console.log(error)}
      />
    </>
  );
}
