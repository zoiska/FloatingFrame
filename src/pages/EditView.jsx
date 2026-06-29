import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AssetResponseContext } from "../contexts/AssetResponseContext.jsx";
import DeleteConfirmationPopup from "../components/DeleteConfirmationPopup.jsx";
import { editAssetService } from "../services/editAssetService.js";
import { deleteAssetService } from "../services/deleteAssetService.js";
import { ArrowLeft, Save, Trash2 } from "lucide-react";

export default function EditView() {
  const { type, id } = useParams();
  const { assetResponseArray, setAssetResponseArray } = useContext(AssetResponseContext);

  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const [orientation, setOrientation] = useState("portrait");
  const [showDeleteConfirmationPopup, setShowDeleteConfirmationPopup] = useState(false);

  useEffect(() => {
    const assetFromContext = assetResponseArray?.find(
      (asset) => asset.id === Number(id) && asset.type?.toLowerCase() === type.toLowerCase(),
    );

    if (assetFromContext) {
      // Nur NULL und undefined entfernen
      const cleanedData = Object.fromEntries(
        Object.entries(assetFromContext).filter(([_, value]) => value != null),
      );

      setFormData(cleanedData);
    }
    function handleRotation() {
      setOrientation(screen.orientation.type);
    }
    screen.orientation.addEventListener("change", handleRotation);
    return () => {
      screen.orientation.removeEventListener("change", handleRotation);
    };
  }, [assetResponseArray, type, id]);

  const handleChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleSave = () => {
    editAssetService(formData, setAssetResponseArray, type, id);
  };

  const handleDeletePopup = () => {
    setShowDeleteConfirmationPopup(true);
    console.log("delet clicked");
  };

  // --- LOADING ---
  if (!formData || !formData.id) {
    return <div className="p-4">Lade Asset...</div>;
  }

  return (
    <div
      className={`mainContainer w-full ${
        orientation === "portrait" || orientation === "portrait-primary" ? "h-dvh" : "max-h-min"
      } ${setShowDeleteConfirmationPopup === true ? "overflow-hidden" : "overflow-auto"}`}
    >
      {showDeleteConfirmationPopup && (
        <DeleteConfirmationPopup
          setter={setShowDeleteConfirmationPopup}
          type={type}
          id={id}
          deleteAssetService={deleteAssetService}
        />
      )}

      <div className="p-6 max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-white text-center">
          {formData.type} {formData.id} bearbeiten
        </h1>

        <div className="buttons_row flex gap-3 pb-2">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 bg-transparent text-brand-orange border border-brand-orange px-4 py-2 rounded-lg cursor-pointer hover:scale-105 transition-transform duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            Zurück
          </button>

          <button
            onClick={handleDeletePopup}
            className="flex items-center gap-2 bg-transparent text-brand-red border border-brand-red px-4 py-2 rounded-lg cursor-pointer hover:scale-105 transition-transform duration-200"
          >
            <Trash2 className="w-5 h-5" />
            Löschen
          </button>
        </div>

        <div className="form_container space-y-3">
          {Object.entries(formData).map(([key, value]) => {
            const isDisabled = key === "id" || key === "type";

            return (
              <div key={key} className="flex flex-col bg-brand-black p-1 rounded">
                <label className="font-bold capitalize text-white">
                  {key.replaceAll("_", " ")}
                </label>

                <input
                  className={`${isDisabled ? "border border-brand-grey" : "border-2 border-brand-white"} p-1 rounded bg-black text-white`}
                  value={value ?? ""}
                  disabled={isDisabled}
                  onChange={(e) => handleChange(key, e.target.value)}
                />
              </div>
            );
          })}
        </div>

        <div className="buttons_bottom flex gap-3 mt-5">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 bg-transparent text-brand-orange border border-brand-orange px-4 py-2 rounded-lg cursor-pointer hover:scale-105 transition-transform duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            Zurück
          </button>

          <button
            onClick={handleSave}
            className="flex items-center gap-2 bg-transparent text-brand-blue border border-brand-blue px-4 py-2 rounded-lg cursor-pointer hover:scale-105 transition-transform duration-200"
          >
            <Save className="w-5 h-5" />
            Speichern
          </button>
        </div>
      </div>
    </div>
  );
}
