import { useContrast } from "../contexts/ContrastContext";

export default function ContrastToggleButton() {
  const { highContrast, toggleContrast } = useContrast();

  return (
    <button
      onClick={toggleContrast}
      className={`px-4 py-2 rounded-lg border transition ${
        highContrast
          ? "bg-black text-white border-white"
          : "bg-white text-black border-gray-500"
      }`}
    >
      Kontrast {highContrast ? "AN" : "AUS"}
    </button>
  );
}
