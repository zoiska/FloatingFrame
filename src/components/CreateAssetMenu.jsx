import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";

export default function CreateAssetMenu() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleSelect = (type) => {
    setOpen(false);
    navigate(`/CreateView/${type}`);
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-2">
      {open && (
        <div className="flex flex-col gap-2 mb-2">
          <button
            onClick={() => handleSelect("computer")}
            className="px-4 py-2 bg-white text-black shadow rounded-lg"
          >
            Computer
          </button>

          <button
            onClick={() => handleSelect("switch")}
            className="px-4 py-2 bg-white text-black shadow rounded-lg"
          >
            Switch
          </button>

          <button
            onClick={() => handleSelect("monitor")}
            className="px-4 py-2 bg-white text-black shadow rounded-lg"
          >
            Monitor
          </button>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-3 rounded-lg bg-blue-600 text-white shadow-lg flex items-center gap-2 hover:bg-blue-700 transition"
      >
        <Plus size={18} />
        <span>Erstellen</span>
      </button>
    </div>
  );
}
