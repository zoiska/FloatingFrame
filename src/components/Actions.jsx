import { useNavigate } from "react-router";

export default function Actions() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center gap-10">

      <button
        onClick={() => navigate("/FloatingFrame")}
        className="px-6 py-3 border-2 border-blue-700 text-blue-400 text-xl rounded hover:bg-blue-900/30 transition"
      >
        Visualisierung öffnen
      </button>

      <button
        onClick={() => navigate("/Scanner")}
        className="px-6 py-3 border-2 border-green-700 text-green-400 text-xl rounded hover:bg-green-900/30 transition"
      >
        Scanner starten
      </button>

    </div>
  );
}
