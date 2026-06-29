import { useNavigate } from "react-router-dom";
import { ArrowLeft, Trash2 } from "lucide-react";

export default function DeleteConfirmationPopup({ setter, type, id, deleteAssetService }) {
  const navigate = useNavigate();

  const handleAbort = () => {
    console.log("Abort");
    setter(false);
  };

  const handleExtraDelete = () => {
    console.log("extra delete clicked");
    deleteAssetService(type, id);
    setter(false);
    navigate(-1);
  };

  return (
    <>
      <div className="backdrop fixed inset-0 bg-black/50" onClick={handleAbort} />
      <div className="popupMainContainer w-[75dvw] h-min-dvh top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fixed flex flex-col p-3 gap-4 border-2 border-brand-orange bg-black rounded-lg z-50">
        <h1 className="text-2xl font-bold mb-4 text-white text-center">Asset löschen</h1>
        <p className="font-bold mb-4 text-white text-center">
          Diese Aktion kann nicht rückgängig gemacht werden!
        </p>
        <button
          className="flex items-center gap-2 bg-transparent text-brand-red border border-brand-red px-4 py-2 rounded-lg cursor-pointer hover:scale-105 transition-transform duration-200"
          onClick={handleExtraDelete}
        >
          <Trash2 className="w-5 h-5" /> Endgültig löschen
        </button>

        <button
          className="flex items-center gap-2 bg-transparent text-brand-orange border border-brand-orange px-4 py-2 rounded-lg cursor-pointer hover:scale-105 transition-transform duration-200"
          onClick={handleAbort}
        >
          <ArrowLeft className="w-5 h-5" /> Abbrechen
        </button>
      </div>
    </>
  );
}
