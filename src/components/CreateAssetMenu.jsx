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
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-2 z-100">
      {open && (
        <div className="flex flex-col gap-2 mb-2">
          <button
            onClick={() => handleSelect("computer")}
            className="gap-3 px-4 py-2 border border-b-brand-blue bg-black text-brand-blue rounded-lg cursor-pointer hover:scale-105 transition-transform duration-200"
          >
            Computer
          </button>

          <button
            onClick={() => handleSelect("switch")}
            className="gap-3 px-4 py-2 border border-b-brand-blue bg-black text-brand-blue rounded-lg cursor-pointer hover:scale-105 transition-transform duration-200"
          >
            Switch
          </button>

          <button
            onClick={() => handleSelect("monitor")}
            className="gap-3 px-4 py-2 border border-b-brand-blue bg-black text-brand-blue rounded-lg cursor-pointer hover:scale-105 transition-transform duration-200"
          >
            Monitor
          </button>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="bg-brand-blue px-2 py-2 border-b-brand-black text-black rounded-lg transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-105"
      >
        <Plus size={25} />
      </button>
    </div>
  );
}
